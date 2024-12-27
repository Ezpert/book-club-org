from rest_framework import serializers
from rest_framework.validators import UniqueTogetherValidator
import logging
logger = logging.getLogger('app_api')
from .models import Book, Club, BookRequest


class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ['id','title', 'description']



class ClubSerializer(serializers.ModelSerializer):
    class Meta:
        model = Club
        fields = ['id', 'name', 'description', 'current_book', 'book_q', 'members']



class BookRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookRequest
        fields = ['id', 'book', 'club', 'date_added', 'extra_info']

    logger.info('pegging test')
    def validate(self, value):
        book_queue = Club.book_q.through.objects.filter(club=value['club'].id)
        # we are trying to make sure that there can be no duplicates inside the current queue
        for request in book_queue:
            if request.book.title == value['book'].title:
                message = "Book must not be a duplicate in queue!"
                raise serializers.ValidationError(message)
        # checks if the book we are trying to introduce into the queue for the club
        # is the same as the current book and throws an error if so
        if value['book'].title == value['club'].current_book.title:
            message = "Book must not be in current book in given club!"
            raise serializers.ValidationError(message)




        return value

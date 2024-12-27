from django.db import models
from django.contrib.auth.models import User
from django.db.models import ForeignKey


# Create your models here.


class Book(models.Model):
        id = models.AutoField(primary_key=True)
        title = models.CharField(max_length=50, unique=True)
        description = models.TextField()

        def __str__(self):
                return f"ID: {self.id} |  Title: {self.title}"

class Club(models.Model):
        name = models.CharField(max_length=100, unique=True)
        description = models.TextField()
        current_book = models.ForeignKey(
                Book,
                related_name= 'current_book',
                verbose_name= 'current book',
                on_delete=models.CASCADE,

        )
        book_q = models.ManyToManyField(
                Book,
                related_name= 'book_queue',
                verbose_name='book queue',
                through="BookRequest",
        )
        members = models.ManyToManyField(
                User,
                related_name='club_users',
                verbose_name='users',
                blank=True,
        )

        def __str__(self):
                return self.name

class BookRequest(models.Model):
        book = models.ForeignKey(
                Book,
                on_delete=models.CASCADE,
                related_name='book',
        )
        club = models.ForeignKey(Club, on_delete=models.CASCADE)
        date_added = models.DateField()
        extra_info = models.CharField(max_length=64)
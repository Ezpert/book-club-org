from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.response import Response
from yaml import serialize
from rest_framework.decorators import action
from .models import Club, Book, BookRequest
from .serializers import ClubSerializer, BookSerializer, BookRequestSerializer

import logging
logger = logging.getLogger('app_api')
# Create your views here.


class ClubViewSet(viewsets.ModelViewSet):
        serializer_class = ClubSerializer
        queryset = Club.objects.all()

        def list(self, request, *args, **kwargs):
                queryset = Club.objects.all()
                clubs = []
                page = self.paginate_queryset(queryset)
                if page is not None:
                        serializer = self.get_serializer(page, many=True)
                        return self.get_paginated_response(serializer.data)
                serializer = self.get_serializer(queryset, many=True)
                for x in serializer.data:
                        print(x)
                        clubs.append({'id': x['id'],'name': x['name'], 'description': x['description']})
                print(clubs)
                return Response(clubs, status=status.HTTP_200_OK)

        @action(detail=False, methods=['GET'], name='Admin List')
        def admin_list(self, request, *args, **kwargs):
                queryset = Club.objects.all()
                clubs = []
                page = self.paginate_queryset(queryset)
                if page is not None:
                        serializer = self.get_serializer(page, many=True)
                        return self.get_paginated_response(serializer.data)
                serializer = self.get_serializer(queryset, many=True)
                for x in serializer.data:
                        print(x)
                        clubs.append({'id': x['id'], 'name': x['name'], 'description': x['description'], 'current_book': x['current_book'], 'queue': x['book_q'], 'members': x['members']})
                print(clubs)
                return Response(clubs, status=status.HTTP_200_OK)

class BookViewSet(viewsets.ModelViewSet):
        serializer_class = BookSerializer
        queryset = Book.objects.all()

class BookRequestViewSet(viewsets.ModelViewSet):
        serializer_class = BookRequestSerializer
        queryset = BookRequest.objects.all()



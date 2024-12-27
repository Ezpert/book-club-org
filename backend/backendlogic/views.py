from django.shortcuts import render
from rest_framework import  viewsets
from rest_framework.response import Response

from .models import Club, Book, BookRequest
from .serializers import ClubSerializer, BookSerializer, BookRequestSerializer

import logging
logger = logging.getLogger('app_api')
# Create your views here.


class ClubViewSet(viewsets.ModelViewSet):
        serializer_class = ClubSerializer
        queryset = Club.objects.all()

class BookViewSet(viewsets.ModelViewSet):
        serializer_class = BookSerializer
        queryset = Book.objects.all()

class BookRequestViewSet(viewsets.ModelViewSet):
        serializer_class = BookRequestSerializer
        queryset = BookRequest.objects.all()


from django.contrib import admin

from .models import Book, Club, BookRequest

# Register your models here.
admin.site.register(Book)
admin.site.register(Club)
admin.site.register(BookRequest)
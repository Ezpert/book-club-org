from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import ClubViewSet, BookViewSet, BookRequestViewSet

# Makes a router to handle all of our urls
router = DefaultRouter()

#
router.register(r'clubs', ClubViewSet)
router.register(r'books', BookViewSet)
router.register(r'bookrequests', BookRequestViewSet, basename='book-requests')


urlpatterns = router.urls

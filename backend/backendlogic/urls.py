from django.urls import path


urlpatterns = [
    path('create-club/', CreateClub.as_view(), name='create_club'),


]
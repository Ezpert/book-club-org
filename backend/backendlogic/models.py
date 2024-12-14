from django.db import models

# Create your models here.


class Book(models.Model):


class Club(models.Model):
        name = models.CharField(max_length=100, unique=True)
        current_book = models.OneToOneField(
                Book,
                on_delete=models.CASCADE,
                verbose_name="current book"
        )
        # description
        # BookQ
        # members

from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    category = models.CharField(max_length=50)
    image = models.ImageField(upload_to='products/')

    def __str__(self):
        return self.name

class Testimonial(models.Model):
    name = models.CharField(max_length=100)
    text = models.TextField()
    rating = models.IntegerField()

    def __str__(self):
        return self.name

class InstagramPost(models.Model):
    caption = models.CharField(max_length=255)
    image = models.ImageField(upload_to='instagram/')

    def __str__(self):
        return self.caption

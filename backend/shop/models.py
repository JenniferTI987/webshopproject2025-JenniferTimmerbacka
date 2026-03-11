from django.db import models
from django.contrib.auth.models import User

class Item(models.Model):
    STATUS_CHOICE = [
        ('ONSALE', 'On sake'),
        ('SOLD', "sold"),
    ]

    title = models.CharField(max_length=200)
    description = models.TextField()
    price = models.FloatField()
    date_added = models.DateTimeField(auto_now_add=True)

    seller = models.ForeignKey(User, on_delete=models.CASCADE, related_name='items')
    buyer = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True, related_name='purchases')

    status = models.CharField(max_length=10, choices=STATUS_CHOICE, default='ONSALE')

    def __str__(self):
        return self.title

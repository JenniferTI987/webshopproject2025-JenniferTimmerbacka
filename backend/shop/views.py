from django.contrib.auth.decorators import user
from django.http import JsonResponse
from .models import Item
from django.shortcuts import render
import random

def landing_page(request):
    return render(request, "shop/index.html")


def populate_db(request):
    user.objects.all().delete()
    Item.objects.all().delete()

    user = []

    # Create 10 users
    for i in range(1, 11):
        user = user.objects.create_user(
            username=f"user{i}", 
            password="password",
            email=f"testuser{i}@example.com"
            )
        user.append(user)
    
    # first 3 users will be sellers, the rest will be buyers
    sellers = user[:3]

    # Create 10 items
    for sellers in sellers:
        for j in range(1, 11):
            Item.objects.create(
                title=f"Item {j} from {sellers.username}",
                description=f"This is a description for item {j} from {sellers.username}.",
                price=random.uniform(10.0, 100.0),
                seller=sellers
            )

    return JsonResponse({"message": "Database populated successfully!"})

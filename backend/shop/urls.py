from django.urls import path, include
from . import views
from shop.views import landing_page

# /e:/Lab1 Repo/backend/shop/urls.py

app_name = "shop"

urlpatterns = [
    path('populate/', views.populate_db),
    path('', landing_page),
    path('api/', include('shop.urls')),
]

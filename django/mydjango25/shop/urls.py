from . import views
from django.urls import path

app_name = "shop"

urlpatterns = [
    path("", views.shop_list, name = "shop_list"),
]
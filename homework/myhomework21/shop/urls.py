from . import views
from django.urls import path

app_name = 'shop'

urlpatterns = [
    path("<int:pk>/",views.shop_detail, name = "shop_detail"),
    path('new/',views.shop_new, name = "shop_new"),
]
from . import views
from django.urls import path

app_name = "shop"

urlpatterns = [
    path('<int:pk>', views.shop_new, name="shop_new"),
    path('show/',views.show_form, name='show_form'),
    ]
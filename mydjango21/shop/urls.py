from . import views
from django.urls import path

app_name = "shop"

urlpatterns = [
    path('', views.shop_list, name = "shop_list"),
    path('<int:pk>', views.shop_new, name="shop_new"),
    path('show/',views.show_form, name='show_form'),
    path("<int:pk>/edit/",views.shop_edit, name="shop_edit"),
    ]
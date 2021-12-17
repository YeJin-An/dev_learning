from . import views 
from django.urls import path

app_name = "accounts"

urlpatterns = [
    path('singup/', views.singup , name = 'signup'),
    path('logon/', views.login , name = 'login'),
    path('profile/', views.profile, name = 'profile'),
    path('logout/', views.logout, name = 'logout'),
]
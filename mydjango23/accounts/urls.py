from django.urls import path
from accoints import views

app_name = "account"

urlpatterns = [
    path('login/', views.login, name = 'login'),
    path('signip/', views.signup, name = "signup"),
    path('profile/', views.profile, name = "profile"),
    path('logout/', views.logout, name = "logout"),
]
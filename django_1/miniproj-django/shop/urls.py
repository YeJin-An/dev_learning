from django.urls import path
from . import views

urlpatterns = [
  # path('', views.index, name ='index')
  path('', views.index, {'pagename':''}, name='home'),
  path('<strLpagename>',views.index, name='index')
]

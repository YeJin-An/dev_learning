from . import views
from django.urls import path

app_name = "second"

# 2)
urlpatterns = [
    path('', views.second_list, name="second_list"),
    path('<int:pk>/', views.second_detail, name="second_detail"),
    path("new/", views.post_name, name="post_new"),
    path("<int:pk>/edit/", views.post_edit, name="post_edit"),
    path('tags/<str:tag_name>/', views.tag_detail, name="tag_detail"),
    path("<int:post_pk>/comment/new/",views.comment_new, name = "comment_new"),
    path("<int:post_pk>/comment/<int:pk>/edit/",views.comment_edit, name = "comment_edit"),
    

]

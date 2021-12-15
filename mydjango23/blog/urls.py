
from django.urls import path

app_name = "blog"

urlpatterns = [
    path("", post_list, name="post_list"),
    path("<int:pk>/", post_detail, name="post_detail"),
    path("new/", post_new, name="post_new"),
    path("<int:pk>/edit/", post_edit, name="post_edit"),
    path("<int:pk>/delete/", post_delete, name="post_delete"),
]
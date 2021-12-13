from types import prepare_class
from django.contrib import admin
from second.models import Second, Comment, tag


@admin.register(Second)
class SecondAdmin(admin.ModelAdmin):
    pass


@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    pass


@admin.register(tag)
class TageAdmin(admin.ModelAdmin):
    pass



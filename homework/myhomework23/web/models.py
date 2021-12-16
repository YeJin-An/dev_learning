from django.db import models

class TimestampledModel(models.Model):
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(suto_now = True)

class Category(models.Model):
    pass

class Post(models.Model):
    pass

class Comment(models.Model):
    pass

class Tag(models.Model):
    pass

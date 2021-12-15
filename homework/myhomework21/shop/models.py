from django.db import models
from django.core.validators import RegexValidator

class TimestampedModel(models.Model):
    creadted_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    class Meta:
        abstract = True

class Category(TimestampedModel):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self) -> str:
        return self.name

class Shop(TimestampedModel):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    name = models.CharField(max_length = 100 , db_index = True)
    description = models.TextField(blank = True)
    telephone = models.CharField(max_length=14,
                            validators = [
                                RegexValidator(r"^$", message = '전화번호를 입력해주세요.'), 
                            ],
                            help_text = "입력예) 042-1234-1234")
    tag_set = models.ManyToManyField('Tag',blank=True)

    def __str__(self) -> str:
        return self.name

class Review(TimestampedModel):
    shop = models.ForeignKey(Shop, on_delete = models.CASCADE)
    author_name = models.CharField(max_length=20)
    message = models.TextField()

class Tag(TimestampedModel):
    name = models.CharField(max_length=100, unique = True)

    def __str__(self) -> str:
        return self.name


from django.db import models
from django.core.validators import RegexValidator

class TimestampModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_At = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True 

class Category(TimestampModel):
    name = models.CharField(max_length=100, unique = True)

    def __str__(self)->str:
        return self.name
    
    class Meta:
        ordering = ['-id']

class Shop(TimestampModel):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    name = models.CharField(max_length = 100 , db_index = True)
    description = models.TextField(blank = True)
    telephone = models.CharField(max_length=14,
                            validators = [
                                RegexValidator(r"^$", message = '전화번호를 입력해주세요.'), 
                            ],
                            help_text = "입력예) 042-1234-1234")

    def __str__(self) -> str:
        return self.name

    class Meta:
        ordering = ["-id"]

class Tag(TimestampModel):
    name = models.CharField(max_length=100, unique = True)

    def __str__(self) -> str:
        return self.name

        class Meta:
            ordering = ['name']
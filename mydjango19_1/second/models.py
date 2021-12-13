from abc import abstractmethod
from django.db import models
from django.core.validators import MaxLengthValidator, MinLengthValidator

# 3)


class TimestampedModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True  # 추상 클래스로서, DB 테이블이 생기지 않습니다.

# 1) - # 4) models.Model 의 TimestampedModel 추가

class Category(TimestampedModel):
    name = models.CharField(max_length=100,unique=True)

    def __str__(self) -> str:
        return self.name


class Second(TimestampedModel):
    # Category = models.ForeignKey(Category, on_delete=models.CASCADE)
    # 7) auth_name 추가(add)
    auth_name = models.CharField(max_length=100)
    tite = models.CharField(
        max_length=100,
        db_index=True,
        validators=[
            MinLengthValidator(3),
            # MaxLengthValidator(),
        ])
    content = models.TextField()
    photo = models.ImageField(upload_to="second/second/%Y/%m/%d")
    ip = models.GenericIPAddressField()

    # 5) ManyToManyField
    tag_set = models.ManyToManyField('tag', blank=True)

    # 8)
    def __Str__(self)-> str :
        return f"[{self.pk}] {self.tite}"

    # 10)
    class Meta:
        verbose_name = "포스팅"
        verbose_name_plural = "포스팅 목록"
# 2)

# 2) 안에 #6) 댓글


class Comment(TimestampedModel):
    # 7) auth_name 추가(add)
    # 11) second 추가

    # 외래키 : 정수값
    second = models.ForeignKey(Second, on_delete=models.CASCADE)
    # second_id 자동생성
    auth_name = models.CharField(max_length=100)
    message = models.TextField()

    # 10)
    class Meta:
        verbose_name = "댓글"
        verbose_name_plural = "댓글 목록"


class tag(TimestampedModel):
    name = models.CharField(max_length=100, db_index=True)

    # many-to-many
    # second_set = models.ManyToManyField('Second') 이렇게 해도 가능

    # 9)
    def __str__(self) -> str:
        return self.name

        # 10)
    class Meta:
        verbose_name = "태그"
        verbose_name_plural = "태그 목록"

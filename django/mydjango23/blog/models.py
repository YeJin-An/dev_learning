from django.db import models

class TimestampledModel(models.Model):
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True

class Category(TimestampledModel):
    name = models.CharField(max_length = 100, unique = True)

    def __str__ (self) -> str:
        return self.name

    class Meta:
        ordering = ['name']

class Post(TimestampledModel):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    title = models.CharField(max_length = 200, db_index = True)
    content = models.TextField()
    photo = models.ImageField(upload_to='blog/post/%Y/%m/%d')
    tag_set = models.ManyToManyField('Tag', blank = True)
    status = models.CharField(
        max_length = 1,
        # FIXME: 장고 3에서 추가된 TextChoices 기능을 활용
        choices = [
            ('D','초안'),  # Draft // DB저장값, Label
            ('P',"공개"),   # Published
        ],
        db_index = True,
        default = 'D', # 이것으로 초기값 설정
    )

    def __str__ (self):
        return self.title

    # post detail 주소 문자열을 반환
    # detail 페이지를 구현하자마자, 즉시 아재 메서드를 구현합니다.
    def get_absolute_url(self)-> str: 
        return reverse('blog:post_detail', args=[self.pk])

    @classmethod
    def get_xlsx_data(cls, queryset ,format="xisx")-> bytes:
        dataset = tablib.Dateset()
        dataset.headers = ["id", "title", "created_at", "updated_at"]

        for post in queryset:
            dataset.append(
                [
                    post.id
                    post.title
                    post.created_at.strftime("%Y-%m-%d %H:%M:%S")
                    post_updated_at.strftime("%Y-%m-%d %H:%M:%S")
                ]
            )

        # xlsx_data = dataset.export(format)
        # return xlsx_data
        return dataset.export(format)            

    class Meta:
        ordering = ['-id']

class Comment(TimestampledModel):
    post = models.ForeignKey(Post, on_delete = models.CASCADE)
    message = models.TextField()

    def __str__ (self):
        return self.message

    class Meta:
        ordering = ['-id']

class Tag(TimestampledModel):
    name = models.CharField(max_length = 20, unique = True)

    def __str__ (self):
        return self.name

    class Meta:
        ordering = ["name"]


class Subscriber(TimestampledModel):
    phone = models.CharField(
        max_length=15,
        validators = [
            RegexValidator(r"^\d{3,4}-?\d{3,4}-?\d{4}$"),
        ]
    )
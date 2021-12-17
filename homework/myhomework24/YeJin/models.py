from django.db import models

class TimestampedModel(models.Model):
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    class Meta:
        abstract = True

class Four(TimestampedModel):
    name = models.CharField(max_length = 100, unique = True)

    def __str__(self):
        return self.name
    
    class Meta:
        ordering = ["name"]

class One(TimestampedModel):
    four = models.ForeignKey(Four, on_delete = models.CASCADE)
    title = models.CharField(max_length = 200, db_index = True)
    content = models.TextField()
    photo = models.ImageField(upload_to = 'YeJin/one/%Y/%m/%d')
    three = models.ManyToManyField("Three",blank = True)
    status = models.CharField(
        max_length = 1,
        choices = [
            ("D", "초안"),
            ("P", "공개"),
        ],
        db_index = True,
        default = "D",
    )

    def __str__(self):
        return self.title
    
    class Meta:
        ordering = ['-id']

class Two(TimestampedModel):
    one = models.ForeignKey(One, on_delete=models.CASCADE)
    message = models.TextField()

    def __str__(self):
        return self.message

    class Meta:
        ordering = ['-id']

class Three(TimestampedModel):
    name = models.CharField(max_length = 20, unique = True)

    def __str__(self):
        return self.name
    
    class Meta:
        ordering = ['name']

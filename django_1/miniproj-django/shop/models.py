from django.db import models

class Shop(models.Model):
  title = models.CharField(max_length = 60)
  permalink = models.CharField(max_length=12, unique = True)
  update_Date = models.DateTimeField('Last Updated')
  bodytext = models.TextField('Page_Content', blank=True)

  def __str__(self):
    return self.title
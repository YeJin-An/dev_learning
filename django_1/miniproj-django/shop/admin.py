from django.contrib import admin
from .models import Shop


class ShopAdmin(admin.ModelAdmin):
  list_display=('title','update_Date')
  ordering = ('title',)
  search_fields = ('title',)

admin.site.register(Shop,ShopAdmin)


from django.shortcuts import render
from django.http import HttpResponse
from .models import Shop

def index(request , shopname):
  # return HttpResponse("<h1>The page Homepage</h1>") 
  # return render(request, 'base.html')

  shopname = '/' + shopname
  shop = Shop.Objects.get(permalink=shopname)
  context = {
    'title': shop.title,
    'content': shop.bodytext,
    'list_updated': shop.update_Date,
    'shop_list': Shop.objects.all(),
  }
  return render(request, 'shop/index.html', context)
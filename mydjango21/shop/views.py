from django.shortcuts import render
from django.http import HttpRequest, HttpResponse
from shop.models import Category, Shop, Tag 

def shop_list(request:HttpRequest)->HttpResponse:
    qs = Shop.objects.all()

    return render(request, 'shop/shop_list.html',{
        'shop_list':qs,
    })

def shop_new(request:HttpRequest)-> HttpResponse:
    pass

def shop_detail(request:HttpRequest)-> HttpResponse:
    pass
    
def shop_edit(request:HttpRequest)-> HttpResponse:
    pass

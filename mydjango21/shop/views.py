from django.shortcuts import render, redirect, get_object_or_404
from django.http import HttpRequest, HttpResponse
from shop.models import Category, Shop, Tag 
from shop.forms import ShopForm

def shop_new(request:HttpRequest, pk:int)->HttpResponse:
    shop = get_object_or_404(Shop, pk=pk)

    return render(request, 'shop/shop_new.html',{
        'shop_list':shop,
    })

def shop_new(request:HttpRequest)-> HttpResponse:
    pass

def shop_detail(request:HttpRequest)-> HttpResponse:
    pass
    
def shop_edit(request:HttpRequest)-> HttpResponse:
    pass

def show_form(request):
    if request.method == "POST":
        form = ShopForm(request.POST, request.FILES)
        if form.is_valid():
            post = form.save()
            return redirect('shop:shop_list', post.pk)
    else:
        form = ShopForm()
    return render(request, 'shop/show_form.html',{
        'form':form,
    })
 
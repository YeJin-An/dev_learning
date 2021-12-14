from django.shortcuts import render, redirect, get_object_or_404
from django.http import HttpRequest, HttpResponse
from shop.models import Category, Shop, Tag 
from shop.forms import ShopForm

def shop_list(request:HttpRequest)-> HttpResponse:
    category_qs = Category.objects.all()
    qs = Shop.objects.all()

    category:str = request.GET.get("category_id","")
    if category:
        qs = qs.filter(category__pk = category_id)

    query = request.GET.get("query","")
    if query:
        qs = qs.filter(name__icontains=query)

    return render(request,"shop/shop_list.html",{
        "category_list":category_qs,
        "shop_list":qs,
    })

def shop_new(request:HttpRequest, pk:int)->HttpResponse:
    shop = get_object_or_404(Shop, pk=pk)

    return render(request, 'shop/shop_new.html',{
        'shop_list':shop,
    })


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

    
def shop_edit(request:HttpRequest)-> HttpResponse:
    if request.method == "POST":
        form = ShopForm(request.POST, request.FILES, instance = shop)
        if form.is_valid():
            saved_shop = form.save()
            return redirect('shop:shop_form.html',saved_shop)
    else:
        form = ShopForm(instance = shop)
    return render(request,"shop/shop_new.html",{
        'form':form,
    })
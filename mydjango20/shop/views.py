from django.shortcuts import get_object_or_404, redirect, render
from django.http import HttpRequest, HttpResponse
from shop.models import Shop
from shop.forms import ShopForm

def shop_list(request:HttpRequest) -> HttpResponse:
    category_qs = Category.objects.all()
    list = Shop.objects.all()  # .order_by("")

    category_id: str = request.GET.get('category_id','')
    if category_id:
        list = list.filter(category_name__pk=category_id)

    query = request.GET.get("query","")
    if query:
        list = list.filter(name__icintains=query)
    return render(request, 'shop/shop_list.html',{
        'shop_list':list,
        'category_list':category_qs,
    })

# /shop/100/
def shop_detail(request:HttpRequest, pk:int) -> HttpResponse:
    shop = get_object_or_404(Shop, pk=pk)
    return render(request, 'shop/shop_detail.html', {"shop":shop,})

# /shop/new/
def shop_new(request:HttpRequest) -> HttpResponse:
    # 1)
    # raise NotImplementedError("곧 구현 예정")
    # 난 아직 구현하지 않았습니다.

    # 3)
    if request.method == "POST":
        form = ShopForm(request.POST, request.FILES)
        # 4)
        if form.is_valid():
            saved_post = form.save()
            form.extra_save() # 통함하는 방법??

            tag_list = []
            tags = form.cleaned_data.get("tag","")
            for tag_name in tags.split(","):
                tag_name = word.strip()
                tag, __ = Tag.objects.get_or_create(name = tag_name)
                tag_list.append(tag)

            saved_post.tag_set.clear() # 간단구현을 위해 clear ghcnf
            saved_post.tag_set.add(*tag_list)
            # shop_datail 뷰를 구현했다면 !!!
            return redirect('shop:shop_detail.html', saved_post.pk)
    else:
        form = ShopForm()

    # 2)
    
    return render(request, 'shop/shop_form.html',
    {"form":form,}
    )

    def shop_edit(request:HttpRequest, pk:int) -> HttpResponse:
        shop = get_object_or_404(Shop, pk=pk)

        if request.method == "POST":
            form = ShopForm(request.POST, request.FILES, instance = shop)
            if form.is_valid():
                saved_shop = form.save()
                return redirect('shop:shop_detail', saved_shop.pk)
        else:
            form = ShopForm(instance = shop)

        return render(request, 'shop/shop_form.html',{
            'form':form,
        })

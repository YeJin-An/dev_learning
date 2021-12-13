from django.shortcuts import get_object_or_404, redirect, render
from django.http import HttpRequest, HttpResponse
from shop.models import Shop
from shop.forms import ShopForm

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
            # shop_datail 뷰를 구현했다면 !!!
            return redirect('shop:shop_detail.html', saved_post.pk)
    else:
        form = ShopForm()

    # 2)
    
    return render(request, 'shop/shop_form.html',
    {"form":form,}
    )

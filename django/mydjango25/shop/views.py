from django.views.generic import ListView
from shop.models import Shop

class ShopListView(ListView):
    model = Shop

    def get_context_date(self,**kwargs):
        context_data = super().get_context_date(**kwargs)
        context_Data["category_list"] = Category.objects.all()
        return context_data

shop_list = ShopListView.as_view()

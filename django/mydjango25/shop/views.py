from django.views.generic import ListView , DetailView , CreateView
from django.contrib.auth.mixins import LoginRequiredMixin
from shop.models import Shop, Review
from shop.forms import ReviewForm
from django.urls import reverse, reverse_lazy
from django.http import HttpResponse


class ShopListView(ListView):
    model = Shop

    def get_context_date(self,**kwargs):
        context_data = super().get_context_date(**kwargs)
        context_Data["category_list"] = Category.objects.all()
        return context_data

shop_list = ShopListView.as_view()

shop_datail = DetailView.as_view(
    model = Shop
)

class ReviewCreateView(LoginRequiredMixin, CreateView):
    model = Review
    form_class = ReviewForm
    # success_url = reverse_lazy("shop:shop_list")

    # 유효성 검사에 통과한다면
    def form_valid(self, form)->HttpResponse:
        # self.kwarg : URL Captured 값들이 사전으로 저장
        shop = get_object_or_404(Shop, pk=shop_pk)

        self.kwargs["shop_pk"]
        review = form.save(commit=False)
        review.shop = shop
        review.user = self.request.user
        review.save()

        # return. redirect ("shop:shop_detail", shop.pk)
        return redirect(shop)

# TODO: shop detail 로 이동
review_new = CreateView.as_view()

class ReviewUpdateView(LoginRequiredMixin, ReviewUserCheckMixmin, UpdateView):
    modle = Review
    form_class = ReviewForm
    # success_url = reverse_lazy("shop:shop_list")

    def get_success_url(self):
        review = self.get_object
        return resolve_url(review.shop)

    def test_func(self):
        review = self.get_object()
        return self.request.user == review.user

review_edit = UpdateView.as_view()
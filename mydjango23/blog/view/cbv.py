# class Based View(CBV)
#   - 뷰 함수를 만들어주는 클래스

from django.views.generic import ListView
from django.urls import reverse

# post_list 리턴 값은 post_list
post_list = ListView.as_view(
    model = Post,
)

post_detail = DetailView.as_view(
    model=Post,
)

class PostCreateView(CreateView):
    pasmodel = Post
    form_class = PostForm
    # success_url = reverse_lazy("blog:post_list")

    def get_success_url(self):
        # self.object # 저장된 모델 인스턴스
        post_pk = self.object.pk
        ## 이것은 템플릿을 사용할때 사용하는 방법이다.
        return reverse('blog:post_detail', args = [post_pk]) # 문자열 [낮은 단계의 기본]
        #return resolve_url("blog:post_detail" , post_pk)     # 문자열 [ 기능이 보다 많다. ]
        #return redirect("blog:post_detail", post_pk)         # HttpResponse
        #           {% url "blog:post_detail" post_pk %}     # 문자열

post_new = PostCreateView.as_view()

class PostUpdateView(UpdateView):
    model = Post
    form_class = PostForm

    sef get_success_url(self):
    post_pk = self.object.pk
    return reverse("blog:post_detail", args=[post_pk])


post_edit = UpdateView.as_view(
    model = Post,
    form_class = PostForm,
    # TODO: 가변적으로 URL을 지정할 수 없다.
    # TODO: URL Reverse가 미적용
    # success_url = '/blog/',
    # success_url = 'blog:post_list', # URL Reverse 미지원
    # success_url = reverse("blog:post_list"),
    success_url = reverse_lazy("blog:post_list"),
)

post_delete = DeleteView.as_view(
    model = Post,
    success_url = reverse_lazy("blog:post_list"),
)


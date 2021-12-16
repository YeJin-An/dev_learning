from django.shortcuts import render,redirect, get_object_or_404
from django.http import HttpRequest, HttpResponse
from django.contrib import messages

from blog.models import Post
from blog.forms import PostForm


def post_list(request:HttpRequest)-> HttpResponse:
    post_qs = Post.objects.all()

    format = request.GET.get("format","")

    if format == "xlsx":
        tabular_data = Post.get_tabular_data(post_qs, format = "xlsx")
        return HttpResponse(tabular_data, conent_type = "application/vnd.ms-excel")
    elif formate == "json":
        tabular_date = Post.get_tabular_data(post_qs, format = "json")
        return HttpResponse(tabular_date, conent_type = "application/json")

    # render 파일을 읽고 뭉쳐주는 역활
    return render(request, 'blog/post_list.html',{
        'post_list':post_qs, # 참조를 하겠다.
    })

def post_detail(request:HttpRequest, pk:int)-> HttpResponse:
    post = get_object_or_404(Post, pk=pk)
    return render(request, 'blog/post_detail.html',{
        "post":post,
    })

def post_new(request:HttpRequest) ->HttpResponse:
    # request.method # "GET" , "POST"

    if request.method == "POST":
        form = PostForm(request.POST, request.FILES)
        if form.is_valid():
            saved_post = form.save()
            messages. success(request, "새로운 포스팅을 저장했습니다.")
            return redirect('blog:post_detail', saved_post.pk) # 이동
    else:
        form = PostForm()
    return render(request, "blog/post_form.html", {
        "form":form,
    })
    

def post_edit(request:HttpRequest, pk:int)->HttpResponse:
    post = get_object_or_404(Post, pk=pk)
    if request.method == "POST":
        form = PostForm(request.POST, request.FILES, instance = post)
        if form.is_valid():
            saved_post = form.save()
            messages.success(request, f"#{pk} 새로운 포스팅을 저장했습니다.")
            return redirect('blog:post_detail', saved_post.pk) # 이동
    else:
        form = PostForm(instance=post)
    return render(request, "blog/post_form.html", {
        "form":form,
        "post":post,
    },)


def post_delete(request:HttpRequest, pk:int)->HttpResponse:
    post = get_object_or_404(Post, pk=pk)

    # GET 요청 : 정말 삭제를 할 것인지, 한 번 더 물어봅니다.
    # POST 요청 : 삭제를 하고, 다른 주소로 이동을 시킵니다.

    if request.method == "POST":
        post.delete()
        messaged.success(request,f"#{pk} 포스팅을 삭제했습니다.")
        return redirect("blog:post_list")

    return render (request,"blog/post_confirm_delete.html",{
        "post":post,
    })

    Subscriber_new = CreateView.as_view(
    models = Subscriber,
    form_class = SubscriberForm,
)


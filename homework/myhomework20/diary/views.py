from django.shortcuts import render
from django.http import HttpRequest,HttpResponse
from diary.models import Post
from diary.forms import PostForm

def post_list(request:HttpRequest)-> HttpResponse:
    template_name = 'diary/post_list.html'
    post = Post.objects.all()
    query = request.GET.get("quert","")
    if query == "GET":
        post = post.filter(title__icontains=query)
    context_name = {'post_list':post,}
    return render(request , template_name , context_name)

def post_detail(request:HttpRequest, pk:int) -> HttpResponse:
    template_name = 'diary/post_detail.html'
    post = Post.objects.get(pk=pk)
    comment_list = post.commir_set.all()
    tag_list = post.tag_set.all()
    context_name = {'post_detail':post,
                    'comment_list':comment_list,
                    'tag_list':tag_list,}
    return render(request, template_name , context_name)

def tag_detail(request:HttpRequest, tag_name:str) -> HttpResponse:
    template_name = 'diary/tag_detail.html'
    post = Post.objects.all()
    post = post.filter(tag_set__name = tag_name)
    context_name = {'tag_name':tag_name,
                    'post_list':post,}
    return render(request,template_name, context_name)


def post_new(request:HttpRequest)-> HttpResponse:
    form = PostForm()
    return render(request, 'diary/post_form.html',
    {"form":form,})

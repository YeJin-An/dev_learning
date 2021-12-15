from django.shortcuts import render,redirect, get_object_or_404
from django.http import HttpRequest, HttpResponse
from django.contrib.messages import messages

from blog.models import Post
from blog.forms import PostForm


def post_list(request:HttpRequest)-> HttpResponse:
    post_qs = Post.objects.all()
    # render 파일을 읽고 뭉쳐주는 역활
    return render(request, 'blog/post_list.html',{
        'post_list':post_qs, # 참조를 하겠다.
    })

def post_detail(request:HttpRequest, pk:int)-> HttpResponse:
    post = post_get_object_or_404(Post, pk=pk)
    return render(request, 'blog/post_detail.html',{

    })

def post_new(request:HttpRequest) ->HttpResponse:
    pass

def post_edit(request:HttpRequest, pk:int)->HttpResponse:
    pass

def post_delete(request:HttpRequest, pk:int)->HttpResponse:
    pass

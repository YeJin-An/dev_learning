from django.shortcuts import render, redirect , get_object_or_404
from django.http import HttpRequest, HttpResponse, Http404
from django.contrib import messages
from second.models import Second, Comment
from second.forms import PostForm , CommentForm


def tag_detail(request: HttpResponse, tag_name: str) -> HttpRequest:
    qs = Second.objects.all()
    qs = qs.filter(tag_set__name=tag_name)
    app_name = 'second/tag_detail.html'
    context_data = {"tag_name": tag_name, "second_list": qs}
    return render(request, app_name, context_data)


def second_list(request: HttpRequest) -> HttpResponse:
    app_name = 'second/second_list.html'
    qs = Second.objects.all()
    query = request.GET.get("query", "")
    if query:
        qs = qs.filter(tite__icontains=query)
    context_data = {"second_list": qs}

    return render(request, app_name, context_data)


def second_detail(request: HttpRequest, pk: int) -> HttpResponse:

    post = get_object_or_404(Second, pk = pk)
    
    app_name = 'second/second_detail.html'
    second = Second.objects.get(pk=pk)
    comment_list = second.comment_set.all()
    tag_list = second.tag_set.all()

    context_data = {
        'second_detail': second,
        "comment_list": comment_list,
        'tag_list': tag_list, }

    return render(request, app_name, context_data)


def post_name(request: HttpRequest) -> HttpResponse:

    if request.method == "POST":
        form = PostForm(request.POST, request.FILES)
        if form.is_valid():
            post = form.save(commit=False)
            post.ip = request.META['REMOTE_ADDR']
            form.save()  # ModelForm에서만 지원
            messages.success(request, "성공적으로 저장했습니다.")
            return redirect('second:second_list')
    else:
        form = PostForm()

    return render(request, "second/post_form.html", {
        "form": form,
    })


def post_edit(request: HttpRequest, pk: int) -> HttpResponse:
    post = get_object_or_404(Second, pk = pk)


    if request.method == "POST":
        form = PostForm(request.POST, request.FILES, instance=post)
        if form.is_valid():
            post.save()
            messages.success(request, "성공적으로 수정했습니다.")
            return redirect('second:second_list')
    else:
        form = PostForm(instance=post)

    return render(request, "second/post_form.html", {
        "form": form,
    })

# /second/100/comment/new/
def comment_new(request:HttpResponse, post_pk:int) -> HttpResponse:
    post = get_object_or_404(Second, pk = post_pk)
    if request.method == "POST":
        form = CommentForm(request.POST, request.FILES)
        if form.is_valid():
            comment = form.save(commit=False)
            comment.second= post
            comment.save()
            return redirect('second:second_detail', post_pk)
    else:
        form = CommentForm()
    return render(request,'second/comment_form.html',{"comment":form,})

# second/100/comments/20/edit
def comment_edit(request:HttpResponse , post_pk:int , pk:int) -> HttpResponse:

    comments = get_object_or_404(Comment, pk = pk)
    # 수정
    if request.method == "POST":
        form = CommentForm(request.POST,request.FILES,instance=comments)
        if form.is_valid():
            form.save()
            return redirect('second/second_detail', post_pk )
    else:
        form = CommentForm(instance = comments)
    return render(request, 'second/comment_form.html',{
        'form':form,
    })
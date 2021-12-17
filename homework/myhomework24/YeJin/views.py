from django.shortcuts import render, get_object_or_404, redirect
from django.http import HttpResquest , HttpResponse
form django.contrib import messages

def one_list(request:HttpResquest) -> HttpResponse:
    template_name = "YeJin/one_list.html"
    one_qs = One.objects.all()
    context_name = {"One_list":one_qs,}
    return render(request, template_name, context_name)

def one_detail(request:HttpResquest,pk:int)-> HttpResponse:
    template_name = "YeJin/one_detail"
    one = get_object_or_404(One, pk=pk)
    context_name = {'one':one,}
    return render(reuqest, template_name, context_name)


def one_new(request:HttpResquest) -> HttpResponse:
    # request.method "GET" OR "POST"

    if request.method == "POST":
        form = OneForm(request.POST, request.FILES)
        if form.is_valid():
            saved_one = form.save()
            messages.success(request,"새로운 포스팅을 저장했습니다.")
            return redirect('YeJin:one_detail', saved_post.pk)
    else:
        form = OneForm()

    template_name = "YeJin/one_form.html"
    context_name = {'form':form,}
    return render(request, template_name , context_name)

def one_edit(request:HttpResquest, pk:int)-> HttpResponse:
    one = get_object_or_404(One, pk=pk)

    if request.method = "POST":
        from = OneForm(request.POST, request.FILES, instance = one)
        if form.is_valid():
            saved_one = form.save()
            messages.success(request, f"#{pk} 포스팅을 저장했습니다")
            return redirect('YeJin:post_detail', saved_one.pk)
    else:
        from = OneForm()
    
    template_name = "YeJin/one_form.html"
    context_name = {"form":form,}
    return render(request,template_name, context_name)

def one_delete(request:HttpResquest, pk:int)-> HttpResponse:
    raise NotImplementedError("삭제는 아직 강의 에서 다루지 않았습니다.")

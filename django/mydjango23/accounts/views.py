from django.shortcuts import render
from django.contrib.auth.forms import UserCreationForm  
from django.urls import reverse_lazy
from django.views.generic import CreateView
from PIL import Image


def login(request):
    pass

# 새로운 User 인스턴스를 만드는 것.
def signup(request):
    if request.method == "POST"
        form = UserCreationForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redurect("accounts:login")
    else:
        form = UserCreateionForm()
    return render(request, "accounts/signup_form.html",{'form':form},)

# signup = CreateView.as_view(
#     form_class = UserCreationForm,
#     success_url = reverse_lazy("accounts:login"),
#     template_name = "accounts/signup_form/html",
# )

def profile(request:HttpRequest)->HttpResponse:
    canvas = Image.new("RGBA", (256, 256), (255, 0, 0, 255))
    # text/image

    response = HttpResponse(content_type = "image/png")
    canvas.save(response,"PNG")

    return response

def logout(request):
    pass

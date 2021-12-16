from django.shortcuts import render
from django.contrib.auth.forms import UserCreationForm  
from django.urls import reverse_lazy
from django.views.generic import CreateView
from PIL import Image

from Login.views import LoginView
from django.contrib.auth import views

login = LoginView.as_view(
    form_class = LoginForm,
    template_name="accounts/login_form.html",
)

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

@login_required # 로그인이 필요하다는 의미를 가지고 있음.
def profile(request:HttpRequest)->HttpResponse:
    return render(request, "blog/profile.html")

logout = LogoutView.as_view(
    next_page = "accounts:login",
)

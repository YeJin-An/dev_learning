from django.shortcuts import render
from django.views.generic import CreateView
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.views import LoginView
from django.urls import reverse_lazy

# def singup(request):
#     pass

singup = CreateView.as_view(
    form_class = UserCreationForm,
    success_url = reverse_lazy("accounts:login"),
    template_name = "accounts/singup_form.html",
)

login = LoginView.as_view(
    template_name = "accounts/login_form.html",
)

def profile(request):
    pass

def logout(request):
    pass


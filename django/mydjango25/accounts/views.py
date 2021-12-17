from django.shortcuts import render
from django.views.generic import CreateView
from django.contrib.auth.forms import UserCreationForm
from django.urls import reverse_lazy

# def singup(request):
#     pass

singup = CreateView.as_view(
    form_class = UserCreationForm,
    success_url = reverse_lazy("accounts:login"),
    template_name = "accounts/singup_form.html",
)

def login(request):
    pass

def profile(request):
    pass

def logout(request):
    pass


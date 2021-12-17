from django.shortcuts import render
from django.views.generic import CreateView, TemplateView
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.views import LoginView, LogoutView
from django.urls import reverse_lazy
from django.contrib.auth.decorators import login_required

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

'''
@ login_required
def profile(request):
    return render(....)

def profile(request):
    return render(....)
profile = login_required(prefile)

login_required == 상속자
'''
# TODO: 커스텀 CBV를 만든다면, LoginRequiredMixin를 상속받도록 할 수 있습니다.
profile = login_required(
    TemplateView.as_view(
    template_name = "accounts/profile_form.html",
    )
)



logout = LogoutView.as_view(
    # next_page = "accounts:login",
    next_page = "root",
)


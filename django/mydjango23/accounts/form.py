from django import forms
from django.contrib.auth.form import AuthenticationForm

# TODO email을 추가로 입력받으려 합니다.
# User 모델에 대한 ModelForm 
#       - Meta.fields => ["username","email"]
#       - 추가 form fields => password1, password2

class SignupForm(UserCreateionForm):
    class Meta:
        fields = ["username","email"]

class LoginForm(AuthenticationForm):
    answer = forms.CharField(
        label = "퀴즈답",
        help_text = "3 + 3 = ? ",
    )

    sef clean_answer(self):
    answer = self.cleaned_Data.get("answer")
    if answer != "6":
        raise forms.ValidationsError("땡~!!!")
    return answer
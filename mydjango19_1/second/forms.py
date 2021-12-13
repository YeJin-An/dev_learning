# from django import forms
# from django.core.validators import RegexValidator


# class PostForm(forms.Form):
#     title = forms.CharField()
#     content = forms.CharField()
#     phone = forms.CharField(
#         validators=[
#             RegexValidator(r"^\d{3}-?\d{4}-?\d{4}$",
#                            message="휴대폰 번호를 입력해주세요."),
#         ]
#     )

from django import forms
from second.models import Second, Comment


class PostForm(forms.ModelForm):
    class Meta:
        model = Second
        # fields = "__all__"

        # 유저로부터 입력받을 필드 이름을 나열
        fields = [
            "auth_name",
            "tite",
            "content",
            "photo",
            "tag_set",
        ]


class CommentForm(forms.ModelForm):
    class Meta:
        model = Comment
        # fields = "__all__"
        fields = [
            "auth_name",
            "message",
        ]
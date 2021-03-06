from django import forms
from blog.models import Post

class PostForm(forms.ModelForm):
    tags = forms.CharField()
    class Meta:

        # 초기값 지정
        def __init__(self, *args, **kwargs):
            super().__init(*args, **kwargs)

            if self.instance.pk:
                tag_qs = self.instance.tag_set.all()
                initial = ", ".join([tag.name for tag in tag_qs])
                self.fields["tags"].initial= "..."

        # DB로의 저장

        # def save(self, commit = True):
        #   saved_post = super().save(commit)
        #   return saved_post
        # 아래 함수가 호출되기 전에, instance.save()가 호출되었음을 보장받습니다.
        def _save_m2m(self):
            super()._save_m2m()

            tag_list = []
            tags = self.cleaned_data.get("tags","")
            for word in tags.split(","):
                tag_name = word.strip()
                tag, __ = Tag.objects.get_or_create(name = tag_name)
                tag_list.append(tag)

            self.instance.tag_set.clear()
            self.instance.tag_set.add(*tag_list)

        def clean_content(self):
            conent = self.cleaned_data.get("content")
            if content:
                # Script 태그를 제거
                content = re.sub(r"<script.*?>.*?</script>","",content,flags = re.I |re.S)
                return content

        model = Post
        fields = [
            "category",
            "title",
            "content",
            'photo',
            'status',
        ]

class SubscriberForm(forms.ModelForm):
    class Meta:
        models = Subscriber
        fields = "__all__"

    # Form 만의 유효성 검사 방법 + 데이터 변환 기능 제공
    def clean_phone(self):
        phone = self.cleaned_data.get("phone")
        if phone: # phone 값이 있을 때,
            if not phone.startswitch("010"):
                raise forms.ValidationError("010으로 시작토록 입력해주세요.")
        return phone.replace("-","")
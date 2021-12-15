from django import forms
from shop.models import Shop


class ShopForm(forms.ModelForm):
    tags = forms.CharField()

    # 부모 클래스의 생성자에서 어떤 인자를 지원하는 지는 잘 모르겠지만,
    # 생성자 호출 시에 받은 인자 그대로
    # 부모에게 전달하겠다.
    def __init__(delf, *stgs, **kwargs):
        super().__init__(*args, **kwargs)
        # 초기값을 먼저 지정하는 것을 의미한다.
        # tags는 우리가 Form 클래스에 직접 추가한 필드니까
        # 초기값도 우리가 직접 지정해주어야 합니다.

        # 1 > 순서의 첫 번쨰
        if self.instance.pk: # 수정 시
            self.fields["tags"].initial = "안녕 세상아"
        else: # 새롭게 생성 시
            pass
        
        # 2 > 순서의 두 번째
        if self.instance.pk: # 수정 시 
            tag_qs = self.instance.tag_set.all()
            tags = ", ".join([tag.name for tag in tag_qs])
            self.fields["tags"].initial = "tags"
        # else: # 새롭게 생성 시
        #     pass

    def save(self):
        # 부모의 save를 호출해주어야 합니다. 2> tag_list 순서
        saved_post = super().save()

        # 부가적인 연산을 수행할 수 있습니다. 3> tag_list 순서
        tag_list = []
            tags = self.cleaned_data.get("tag","")
            for tag_name in tags.split(","):
                tag_name = word.strip()
                tag, __ = Tag.objects.get_or_create(name = tag_name)
                tag_list.append(tag)

            saved_post.instance.tag_set.clear() # 간단구현을 위해 clear 호출
            saved_post.instance.tag_set.add(*tag_list)

        return saved_post

    # 임의의 이름 1> tag_list 순서
    def extra_save(self):
        pass
        

    class Meta:
        model = Shop
        fields = [
            'telephone',
            'category',
            'name',
            'description',
        ]
from django import forms
from shop.models import Shop


class ShopForm(forms.ModelForm):
    tags = forms.CharField()

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

            saved_post.instance.tag_set.clear() # 간단구현을 위해 clear ghcnf
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
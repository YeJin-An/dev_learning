from django import forms
from shop.models import Shop

class ShopForm(forms.ModelForm):

    tags = forms.CharField()

    # 2>
    def __init__(self, *args, **kwargs):
        super().__init__(*stgs, **kwargs)

        if self.instance.pk:
            tag_qs = self.instance.tag_set.all()
            tags = ", ".join([tag.name for tag in tag_qs])
            self.fields["tags"].initial = tags

    # 1>
    def save(self):
        # 부모의 save를 호출해주어야 합니다.
        saved_post = super().save()

        # 부가적인 연산을 수행할 수 있습니다.
        tag_list = []
        tags = self.cleaned_data.get("tags","")
        for word in tags.split(","):
            tag_name = word.strip()
            tag, __ - Tag.objects.get_or_create(name = tag_name)
            tag_list.append(tag)

        saved_post.tag_set.clear() # 간단수현을 위해 clear 호출
        saved_post.tag_set.add(*tag_list)

        return saved_post

    class Meta:
        model = Shop
        fields = [
            'category',
            'name',
            'telephone',
            'description',
        ]
from django import forms 
from YeJin.models import One

class OneForm(forms.ModelsForm):
    class Meta:
        models = One
        fields = "__all__"
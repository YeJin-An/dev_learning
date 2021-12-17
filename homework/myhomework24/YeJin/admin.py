from django.contrib import admin
from YeJin.models import One , Two , Three , Four

@admin.register(One)
class OneAdmin(admin.ModelAdmin):
    pass


@admin.register(Two)
class TwoAdmin(admin.ModelAdmin):
    pass


@admin.register(Three)
class ThreeAdmin(admin.ModelAdmin):
    pass


@admin.register(Four)
class FourAdmin(admin.ModelAdmin):
    pass
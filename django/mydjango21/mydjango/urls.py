
from django.contrib import admin
from django.urls import path, include

from django.conf import settings
from django.conf.urls.static import static

from mydjango.settings import DEBUG

from django.shortcuts import redirect


def root(request):
    return redirect('shop:shop_list')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('shop/',include('shop.urls')),
]

urlpatterns += static(settings.MEDIA_URL,
                    document_root = settings.MEDIA_ROOT)

if DEBUG:
    import debug_toolbar
    urlpatterns += [
        path('__debug__/',include(debug_toolbar.urls)),
    ]
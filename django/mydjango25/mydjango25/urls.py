
from django.contrib import admin
from django.urls import path , include
from django.views.generic import TemplateView

from django.conf import settings
from django.conf.urls.static import static

from mydjango25.settings import DEBUG

urlpatterns = [
    path('admin/', admin.site.urls),
    path("shop/", include('shop.urls')),
    path('',TemplateView.as_view(template_name = 'root.html'),name = 'root'),
]

urlpatterns += static(settings.MEDIA_URL,
document_root = settings.MEDIA_ROOT)

if DEBUG:
    import debug_toolbar
urlpatterns += [
    path('__debug__/', include(debug_toolbar.urls)),
]

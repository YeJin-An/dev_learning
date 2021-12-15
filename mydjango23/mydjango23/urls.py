
from django.contrib import admin
from django.urls import path, include

from django.conf import settings
from django.conf.urls.static import static

from mydjango23.settings import DEBUG

from django.shortcuts import redirect

urlpatterns = [
    path('admin/', admin.site.urls),
    path('blog/', include('blog.urls')),
]

# static의 반환값은 리스트!!
urlpatterns += static(settings.MEDIA_URL,
                      document_root=settings.MEDIA_ROOT)

if DEBUG:
    import debug_toolbar
urlpatterns += [
    path('__debug__/', include(debug_toolbar.urls)),
]

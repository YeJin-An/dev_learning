
from django.contrib import admin
from django.urls import path, include

from django.conf import settings
from django.conf.static import static

from myhomerk.settings import DEBUG

urlpatterns = [
    path('admin/', admin.site.urls),
    path('web/', include(web.urls)),
]

urlpatterns += static(settings.MEDIA_URL,
                        document_root = settings.MEDIA_ROOT)

if DEBUG:
    import debug_toolbar
    urlpatterns += [
        path('__debug__/', include(debug_toolbar.urls)),
    ]

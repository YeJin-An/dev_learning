"""mydjango17 URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

from django.conf import settings
from django.conf.urls.static import static

from mydjango17.settings import DEBUG

from django.shortcuts import redirect

# TODO: 편의상 여기에 root를 구현하지만,
# 차후 RedirectView CBV를 써서 이 구현을 제거할 예정

# 자동으로 페이지 이동 구현


def root(request):
    return redirect("second:second_list")


urlpatterns = [
    path('admin/', admin.site.urls),
    path('second/', include('second.urls')),
    path('', root, name='root'),
]

# static의 반환값은 리스트!!
urlpatterns += static(settings.MEDIA_URL,
                      document_root=settings.MEDIA_ROOT)

if DEBUG:
    import debug_toolbar
urlpatterns += [
    path('__debug__/', include(debug_toolbar.urls)),
]

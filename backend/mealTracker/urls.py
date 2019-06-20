from django.urls import include, path
from django.views.generic.base import TemplateView
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register(r'/meals', views.MealViewSet)

urlpatterns = [
    path('', views.index, name='index'),
    path('history', views.history, name='history'),
    path('add', views.add, name='add'),
    path('home/', TemplateView.as_view(template_name="home.html"), name="home"),
    path('getData', views.getData),
    path('api', include(router.urls)),
    path('accounts/', include('django.contrib.auth.urls')),
    path('register', views.register, name='register')
]
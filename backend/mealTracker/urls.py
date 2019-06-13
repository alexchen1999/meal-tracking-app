from django.urls import path
from django.views.generic.base import TemplateView

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('history', views.history, name='history'),
    path('add', views.add, name='add'),
    path('home', TemplateView.as_view(template_name="home.html"), name="home"),
    path('getData', views.getData)
]
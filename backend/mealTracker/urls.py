from django.urls import include, path
from django.conf.urls import url
from django.views.generic.base import TemplateView
from rest_framework import routers
from django.contrib.auth import views as auth_views

from . import views

router = routers.DefaultRouter()
router.register(r'/meals', views.MealViewSet)
router.register(r'/users', views.UserViewSet)
router.register(r'/usersmeals', views.UserMealViewSet)

urlpatterns = [
    path('', views.index, name='index'),
    path('history', views.history, name='history'),
    path('add', views.add, name='add'),
    path('home/', TemplateView.as_view(template_name="home.html"), name="home"),
    path('api', include(router.urls)),
    url(r'^login/$', auth_views.LoginView.as_view(), name='login'),
    #path('accounts/', include('django.contrib.auth.urls')),
    path('register', views.register, name='register'),
    path('logout', views.logout, name='logout'),
    path('user', views.UserMealView.as_view(), name='test'),
    path('time', views.filter_by_time, name='time'),
    path('filterbytime',views.MealsByTimeFrameView.as_view(), name='filterbytime'),
    path('category', views.filter_by_category, name='category'),
    path('filterbycategory',views.MealsByCategoryView.as_view(), name='filterbycategory')
]
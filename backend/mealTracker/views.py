from django.shortcuts import render, redirect
from django.http import HttpResponseRedirect
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import authenticate, login
from .models import Meal, CustomUser
from .forms import MealForm
from .forms import CustomUserCreationForm
from .forms import DateForm
from rest_framework import viewsets, generics
from rest_framework.response import Response
from rest_framework.decorators import detail_route
from .serializers import MealSerializer, MealSerializerAbbr, UserSerializer
from django.contrib.auth.decorators import login_required
from django.contrib.auth import logout as django_logout
from rest_framework.views import APIView
from django.http import JsonResponse
import datetime

class UserMealView(APIView):
    def get(self, request):
        user = self.request.user
        meals = Meal.objects.filter(user=user.id).values('id', 'name', 'timestamp', 'category', 'price', 'notes')
        return JsonResponse({'user': user.username if user.username else "Guest", 'meals': list(meals)})
        # return JsonResponse({'user': 'Bob'}) 


def filter_by_time(request):
    form = DateForm()
    return render(request, 'filter_by_time.html', {'form': form})
        
class MealsByTimeFrameView(generics.ListAPIView):
        queryset = Meal.objects.all().order_by('timestamp')
        serializer_class = MealSerializer
        #def get(self, request):
        #    start = datetime.datetime(2019, 6, 20)
        #    end = datetime.datetime(2019, 6, 30)
        #    meals = Meal.objects.filter(timestamp__gte=start, timestamp__lte=end).values('id', 'name', 'timestamp', 'category', 'price', 'notes')
        #    return JsonResponse({'meals': list(meals)})
                
        @detail_route(methods=['GET'])
        def get_filtered_by_time(self, request, pk=None):
            user = self.request.user
            sdy = int(request.GET.get('start_date_year'))
            sdm = int(request.GET.get('start_date_month'))
            sdd = int(request.GET.get('start_date_day'))
            edy = int(request.GET.get('end_date_year'))
            edm = int(request.GET.get('end_date_month'))
            edd = int(request.GET.get('end_date_day'))
            start_date = datetime.datetime(sdy, sdm, sdd)
            end_date = datetime.datetime(edy, edm, edd)
            start_date = self.request.GET.get['start_date']
            end_date = self.request.GET.get['end_date']
            meals = Meal.objects.filter(timestamp__gte=start_date, timestamp__lte=end_date, user=user.id).values('id', 'name', 'timestamp', 'category', 'price', 'notes')
            return JsonResponse({'user': user.username if user.username else "Guest", 'meals': list(meals)})
            
        #return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        #def get_queryset(self):
        #    if (self.request.method == 'POST'):
        #        form = DateForm(self.request.POST)
        #        if form.has_changed():        

        #    else:
        #        form = DateForm()
        #    return render(self.request, 'filter_by_time.html', {'form': form})
def index(request):
    return render(request, 'main.html')

@login_required
def history(request):
    meals = Meal.objects.order_by('timestamp')
    context = {'meals' : meals}
    return render(request, 'history.html', context)

@login_required
def add(request):
    if request.method == 'POST':
        print('reaches here')
        form = MealForm(request.POST)
        if form.is_valid():
            price = form.cleaned_data['price']
            category = form.cleaned_data['category']
            name = form.cleaned_data['name']
            notes = form.cleaned_data['notes']

            if request.user.is_authenticated:
                userToAdd = request.user

            meal = Meal(price=price, category=category, name=name, notes=notes, user=userToAdd)
            meal.save()
            return HttpResponseRedirect('/history')
    else:
        form = MealForm()
        
    return render(request, 'add.html', {'form': form })

class MealViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows meals to be viewed or edited.
    e.g. at /api/meals/
    """
    queryset = Meal.objects.all().order_by('timestamp')
    serializer_class = MealSerializer

    def list(self, request, *args, **kwargs):
        meals = Meal.objects.all()
        serializer = MealSerializerAbbr(meals, many=True)
        return Response(serializer.data)

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    e.g. at /api/users/
    """
    queryset = CustomUser.objects.all().order_by('id')
    serializer_class = UserSerializer

class UserMealViewSet(viewsets.ModelViewSet):
    queryset = Meal.objects.all()
    serializer_class = MealSerializer
    
    def get_queryset(self):
        """
        This view should return a list of all the meals
        for the currently authenticated user.
        """

        user = self.request.user
        return Meal.objects.filter(user=user)

def register(request):
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST)
        
        if form.is_valid():
            form.save()
            username = form.cleaned_data['username']
            password = form.cleaned_data['password1']
            
            user = authenticate(username=username, password=password)
            login(request, user)
            return redirect('/')
    else:    
        form = CustomUserCreationForm()
        
        
    context = {'form' : form}
    return render(request, 'registration/register.html', context)

@login_required
def logout(request):
    django_logout(request)
    return HttpResponseRedirect('/')

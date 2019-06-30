from django.shortcuts import render, redirect
from django.http import HttpResponseRedirect
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import authenticate, login
from .models import Meal, CustomUser
from .forms import MealForm
from .forms import CustomUserCreationForm
from rest_framework import viewsets
from rest_framework.response import Response
from .serializers import MealSerializer, MealSerializerAbbr, UserSerializer
from django.contrib.auth.decorators import login_required
from django.contrib.auth import logout as django_logout
from rest_framework.views import APIView
from django.http import JsonResponse

class UserMealView(APIView):
    def get(self, request):
        user = self.request.user
        meals = Meal.objects.filter(user=user).values('id', 'name', 'timestamp', 'category', 'price', 'notes')
        return JsonResponse({'user': user.name, 'meals': list(meals)})
        # return JsonResponse({'user': 'Bob'}) 

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

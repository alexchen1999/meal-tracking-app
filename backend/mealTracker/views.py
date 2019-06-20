from django.shortcuts import render, redirect
from django.http import HttpResponseRedirect
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import authenticate, login
from .models import Meal
from .forms import MealForm
from rest_framework import viewsets
from rest_framework.response import Response
from .serializers import MealSerializer, MealSerializerAbbr


def index(request):
    return HttpResponse("Hello, world!11!!!!")

def history(request):
    meals = Meal.objects.order_by('timestamp')
    context = {'meals' : meals}
    return render(request, 'history.html', context)

def add(request):
    if request.method == 'POST':
        print('reaches here')
        form = MealForm(request.POST)
        if form.is_valid():
            price = form.cleaned_data['price']
            category = form.cleaned_data['category']
            name = form.cleaned_data['name']
            notes = form.cleaned_data['notes']
            meal = Meal(price=price, category=category, name=name, notes=notes)
            meal.save()
            return HttpResponseRedirect('/home/history')
    else:
        form = MealForm()
        
    return render(request, 'add.html', {'form': form })

@csrf_exempt
def getData(request):
	data = Model.objects.all()
	if request.method == 'GET':
		serializer = MealSerializer(data, many=True)
		return JsonResponse(serializer.data, safe=False)

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

def register(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        
        if form.is_valid():
            form.save()
            username = form.cleaned_data['username']
            password = form.cleaned_data['password1']
            
            user = authenticate(username=username, password=password)
            login(request, user)
            return redirect('/')
    else:    
        form = UserCreationForm()
        
        
    context = {'form' : form}
    return render(request, 'registration/register.html', context)

from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.http import HttpResponse
from .models import Meal
from .forms import MealForm


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
            meal = Meal(price=price, category=category)
            meal.save()
            return HttpResponseRedirect('/home/history')
    else:
        form = MealForm()
        
    return render(request, 'add.html', {'form': form })

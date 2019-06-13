from django.shortcuts import render
from django.http import HttpResponse
from .models import Meal


def index(request):
    return HttpResponse("Hello, world!11!!!!")

def history(request):
    meals = Meal.objects.order_by('timestamp')
    context = {'meals' : meals}
    return render(request, 'history.html', context)

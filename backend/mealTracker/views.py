from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Meal
from .forms import MealForm
from rest_framework import viewsets
from .serializers import MealSerializer


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
    """
    queryset = Meal.objects.all().order_by('timestamp')
    serializer_class = MealSerializer

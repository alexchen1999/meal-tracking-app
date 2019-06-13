from .models import Meal
from rest_framework import serializers


class MealSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Meal
        fields = ('name', 'timestamp', 'category', 'price', 'notes')
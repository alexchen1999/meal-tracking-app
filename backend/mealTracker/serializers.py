from .models import Meal
from rest_framework import serializers


class MealSerializer(serializers.ModelSerializer):
    class Meta:
        model = Meal
        fields = ('id', 'name', 'timestamp', 'category', 'price', 'notes')

class MealSerializerAbbr(serializers.ModelSerializer):
    class Meta:
        model = Meal
        fields = ('id', 'name', 'timestamp', 'price')
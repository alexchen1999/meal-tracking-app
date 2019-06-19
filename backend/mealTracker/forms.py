from django import forms
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from .models import CustomUser

class MealForm(forms.Form):
    name = forms.CharField(max_length=100)
    notes = forms.CharField(widget=forms.Textarea)
    MEAL_CHOICES = (
            ('Breakfast', 'Breakfast'),
            ('Lunch', 'Lunch'),
            ('Dinner', 'Dinner'),
            ('Snack', 'Snack')
            )
    category = forms.ChoiceField(label="Category of Meal", 
                                 choices=MEAL_CHOICES)
    price = forms.DecimalField(label="Price", max_digits=6, decimal_places=2)
    
class CustomUserCreationForm(UserCreationForm):

    class Meta(UserCreationForm):
        model = CustomUser
        fields = ('username', 'password', 'name')

class CustomUserChangeForm(UserChangeForm):

    class Meta:
        model = CustomUser
        fields = ('username', 'password', 'name')
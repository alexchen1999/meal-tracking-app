from django import forms
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from django.contrib.auth import get_user_model

User = get_user_model()

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
        model = User
        fields = ('username', 'name')

class CustomUserChangeForm(UserChangeForm):

    class Meta:
        model = User
        fields = ('username', 'name')
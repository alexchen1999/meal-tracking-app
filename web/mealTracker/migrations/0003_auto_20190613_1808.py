# Generated by Django 2.2.2 on 2019-06-13 18:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mealTracker', '0002_auto_20190611_1935'),
    ]

    operations = [
        migrations.AddField(
            model_name='meal',
            name='name',
            field=models.CharField(default='Madras Chettinaad', max_length=100),
        ),
        migrations.AddField(
            model_name='meal',
            name='notes',
            field=models.CharField(default='', max_length=250),
        ),
    ]
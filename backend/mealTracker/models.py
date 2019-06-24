from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager

# Create your models here.
# Editing the model requires a db migration (manage.py makemigrations, migrate)

class UserManager(BaseUserManager):
    def create_user(self, username, name, password=None):
        if not username:
            raise ValueError("Please specify a username.")
        if not password:
            raise ValueError("Please specify a password.")
        user_obj = self.model(username = username)
        user_obj.set_password(password)
        user_obj.save(using=self._db)
        return user_obj

    def create_superuser(self, username, password=None, name=None, email=None):
        user_obj = self.create_user(username=username, password=password, name=name)
        user_obj.username = username
        user_obj.is_superuser = True
        user_obj.is_staff = True
        user_obj.save(using=self._db)
        return user_obj

class CustomUser(AbstractUser):
    username = models.TextField(max_length=30, unique=True)
    password = models.TextField(max_length=30)
    name = models.TextField(max_length=30)
    
    USERNAME_FIELD = 'username'
    
    objects = UserManager()
    
    def __str__(self):
        return self.username


class Meal(models.Model):
    price = models.DecimalField(max_digits=6, decimal_places=2)
    category = models.CharField(max_length=200)
    # need to look up what date published is
    timestamp = models.DateTimeField(auto_now_add=True) 
    name = models.CharField(max_length=100, default="Madras Chettinaad")
    notes = models.CharField(max_length=250, default="")
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, null=True)
    
# =============================================================================
#     def setPrice(self, price):
#         self.price = price
#     
#     def getPrice(self):
#         return self.price
#     
#     def setCategory(self, category):
#         self.category = category
#         
#     def getCategory(self):
#         return self.category
#     
#     def setTimestamp(self, timestamp):
#         self.timestamp = timestamp
#     
#     def getTimeStamp(self):
#         return self.timestamp
# =============================================================================

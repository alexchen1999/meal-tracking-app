from django.db import models

# Create your models here.
class Meal(models.Model):
    price = models.DecimalField(max_digits=6, decimal_places=2)
    category = models.CharField(max_length=200)
    # need to look up what date published is
    timestamp = models.DateTimeField(auto_now_add=True)
    
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

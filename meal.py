#!/usr/bin/env python2
# -*- coding: utf-8 -*-
"""
Created on Sun Jun  9 15:28:25 2019

@author: alex
"""

class Meal:
    def __init__(self, price, category, timestamp):
        self.price = price
        self.category = category
        self.timestamp = timestamp
        
meal1 = Meal("$9.99", "Breakfast", "6/9/19")
    
print(meal1.price)
print(meal1.category)
print(meal1.timestamp)
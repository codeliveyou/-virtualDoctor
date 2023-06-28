from django.shortcuts import render
import os
import json

# Create your views here.

def front(request):
    context = { }
    return render(request, "index.html", context)
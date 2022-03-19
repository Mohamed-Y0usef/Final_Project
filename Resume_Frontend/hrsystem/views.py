from django.shortcuts import render
# Create your views here.

def upload(request):
    return render(request , 'hr/upload.html')

def searchjob(request):
    return render(request , 'hr/searchjob.html') 
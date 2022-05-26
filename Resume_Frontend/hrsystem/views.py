from django.shortcuts import render
# Create your views here.

def hrupload(request):
    return render(request , 'hr/hrupload.html')

def hrsearchjob(request):
    return render(request , 'hr/hrsearchjob.html') 
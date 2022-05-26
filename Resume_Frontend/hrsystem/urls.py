from django.urls import path ,include
from . import views

urlpatterns = [
    path('hrupload' , views.hrupload , name = 'hrupload'),
    path('hrsearchjob/' , views.hrsearchjob , name = 'hrsearchjob')
]
from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^cars$', views.add_car),
    url(r'^passengers$', views.add_passengers),
]

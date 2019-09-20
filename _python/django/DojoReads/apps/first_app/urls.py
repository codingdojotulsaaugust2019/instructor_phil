from django.conf.urls import url
from . import views

urlpatterns = [
    # ---------------------------------------- Get Routes ----------------------------------------
    # index page 1
    url(r'^$', views.index),
    # books index 5, 6 (get, post methods)
    url(r'^books$', views.books),
    # books show 7
    url(r'^books/(?P<book_id>\d+$)', views.show),
    # user logout 4
    url(r'^logout$', views.logout),
    # unfavor book 10
    url(r'^books/(?P<book_id>\d+$)/un-favor', views.un_favor),
    # favor book 11
    url(r'^books/(?P<book_id>\d+$)/favor', views.favor),
    # ---------------------------------------- Post Routes ----------------------------------------
    # user register 2
    url(r'^register$', views.register),
    # user login 3
    url(r'^login$', views.login),
    # book update route 8
    url(r'^books/(?P<book_id>\d+$)/update', views.update),
    # book delete route 9
    url(r'^books/(?P<book_id>\d+$)/delete', views.delete),
]

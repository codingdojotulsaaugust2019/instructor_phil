from django.shortcuts import render, HttpResponse
# this is the controller

# Create your views here.
def index(request):
    return HttpResponse("message from index method in views")

def show(request):
    context = {
        "name": "Phil"
    }
    return render(request, 'firstApp/show.html', context)
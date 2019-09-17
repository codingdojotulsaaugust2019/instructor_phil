from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from .models import User, Car

# Create your views here.
def index(request):
    context = {
        'allCars': Car.objects.all(),
        'allUsers': User.objects.all()
    }
    return render(request, 'firstapp/index.html', context)

def add_car(request):
    if request.method == 'POST':
        print(request.POST)
        print('*'*20 + 'in views' + '*'*20)
        response_from_models = Car.objects.validate_car(request.POST)
        print('*'*20 + 'in views response from model' + '*'*20)
        print(response_from_models)
        if response_from_models['status'] == True:
            # car was saved
            pass
        else:
            # failed the validations
            # add errors to messages
            for error in response_from_models['errors']:
                messages.error(request, error)
            
        # Car.objects.create(name = request.POST['name'], owner = User.objects.get(id = request.POST['owner_id']))

    return redirect("/")

def add_passengers(request):
    if request.method == 'POST':
        print(request.POST)
        car = Car.objects.get(id = request.POST['car_id'])
        user = User.objects.get(id = request.POST['user_id'])
        car.passengers.add(user)
    return redirect('/')
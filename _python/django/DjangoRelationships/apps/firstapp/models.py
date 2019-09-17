from django.db import models

# Create your models here.
class User(models.Model):
    name = models.CharField(max_length=45)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    #objects object
    # one to many relationship
    # owns = [Car objects]
    # many to many relationship
    # back_seat_driver = [Car objects]
    def __repr__(self):
        return f'<User object: name={self.name} id={self.id}>'

        

class CarManager(models.Manager):
    def validate_car(self, form_data):
        print(form_data)
        print('*'*20 + 'in models' + '*'*20)
        errors = []
        if len(form_data['name']) < 1:
            # name was not there
            errors.append('Name must be present!')
        if not form_data['name'].isalpha():
            # name contains numbers
            errors.append('Name can not have numbers!')
        owner = User.objects.filter(id=form_data['owner_id'])
        if len(owner) < 1:
            errors.append('Car must have an owner!')

        # how do know if we passed the validations?
        if(len(errors) < 1):
            # passed validations
            # save the car
            car = self.create(name=form_data['name'], owner=owner[0])
            response_to_views = {'status': True, 'car': car}
            return response_to_views
        else:
            # failed validaions
            # send the messages to views
            response_to_views = {'status': False, 'errors': errors}
            return response_to_views

class Car(models.Model):
    name = models.CharField(max_length = 45)
    owner = models.ForeignKey(User, related_name="owns")
    # owner = User object
    passengers = models.ManyToManyField(User, related_name="back_seat_driver")
    # passengers = [User objects]
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = CarManager()
    def __repr__(self):
        print(f'<Car object: {self.name} passengers are:>')
        print(self.passengers)
        print(type(self.passengers))
        for user in self.passengers.all():
            print(f'\t User name: {user.name}')
        return f'<Car object: name={self.name} owner={self.owner.name}>'

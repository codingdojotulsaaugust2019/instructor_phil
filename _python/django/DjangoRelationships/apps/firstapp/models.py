from django.db import models

# Create your models here.
class User(models.Model):
    #objects object
    name = models.CharField(max_length=45)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    # one to many relationship
    # owns = [Car objects]
    # many to many relationship
    # back_seat_driver = [Car objects]
    def __repr__(self):
        return f'<User object: name={self.name} id={self.id}>'

class Car(models.Model):
    name = models.CharField(max_length = 45)
    owner = models.ForeignKey(User, related_name="owns")
    # owner = User object
    passengers = models.ManyToManyField(User, related_name="back_seat_driver")
    # passengers = [User objects]
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __repr__(self):
        print(f'<Car object: {self.name} passengers are:>')
        print(self.passengers)
        print(type(self.passengers))
        for user in self.passengers.all():
            print(f'\t User name: {user.name}')
        return f'<Car object: name={self.name} owner={self.owner.name}>'

from django.shortcuts import render, redirect

# Create your views here.
# ---------------------------------------- Get Methods ----------------------------------------
def index(request):
    # return html
    return render(request, 'first_app/index.html')

def books(request):
    # get for get method
    # true
        # check session for loggin in user
        # true 
            # get the user, save in context object, send to html
            # get all books, save in context object, send to html
            # render books.html
        # false
            # flash login/register message
            # redirect to "/" index
        return render(request, 'first_app/books.html')
    # false
        # check for user in session
        # true
            # validate the book
            # false
                # display error messages
            # true
                # get user with session user_id
                # add user to the book
                # save the book
                # redirect to "/books"
        # false
            # redirect to "/" index route
def logout(request):
    # clear session()
    request.session.clear()
    return redirect("/")
def show(request, book_id):
    # check for user in session
    # true
        # get book by id (query), add to context, send context to html
        # get user with session user id, add to context, send context to html
        # render(show.html)
    # false
        # flash login/register message
        # redirect to "/" index
def un_favor(request, book_id):
    # check for user in session
    # true
        # get book object
        # get user object
        # remove user from the books favorited_by list(many to many)
        # redirect to "/books" + book_id
    # false
        # flash login/register message
        # redirect to "/" index
def favor(request, book_id):
    # check for user in session
    # true
        # get book object
        # get user object
        # add user to the books favorited_by list(many to many)
        # redirect to "/books" + book_id
    # false
        # flash login/register message
        # redirect to "/" index
# ---------------------------------------- Post Methods ----------------------------------------
def register(request):
    # check for post method
    # true
        # validate the user(in model)
        # check if user passed the validations
        # true
            # hash the password
            # save user
            # saving the user in session(user_id)
            # redirect to welcome/success page
        # false
            # display errors (django messages -> from django.contrib import messages)
            # redirect to "/" index route
    # false
        # redirect to "/" index route

def login(request):
    # check for post method
    # true
        # query db with email
        # check the query
        # true
            # found a user
            # verify password from form matches the password in db
            # true
                # user is who they say they are
                # save the user_id in session
                # redirect to "/books" book index route
            # false
                # error message, invalid password/email combinations
                # redirect to "/" index route
        # false
            # email doesnt exist
            # send message to register first
            # redirect to "/" index route
    # false
        # redirect to "/" index route

def update(request, book_id):
    # if request is post
    # true
        # validate the book
        # true
            # save the book
            # success save message
        # false
            # diplay the book errors
        # redirect to "books/" + book_id
    # false
        # redirect to "books/" + book_id

def delete(request, book_id):
    # if request is post
    # true
        # delete querry to db
        # redirect to "/books"
    # false
        # redirect to "/books/" + book_id
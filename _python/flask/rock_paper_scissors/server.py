from flask import Flask, render_template, request, redirect, session, flash
from random import randint

app = Flask(__name__)
app.secret_key = 'my super secret key'


@app.route("/")
def index():
    client_says = ""
    server_says = ""
    result = ""
    if 'client_won' not in session:
        session['client_won'] = 0
        session['server_won'] = 0
        session['ties'] = 0

    if 'user_input' in session and 'server_says' in session and 'result' in session:
        print('^'*90)
        print(session['user_input'])
        # client_says = session['user_input']
        # server_says = session['server_says']
        # result = session['result']

    return render_template("index.html")
    # return render_template("index.html", client = client_says, server = server_says, result = result)

@app.route("/process", methods=['post'])
def process():
    print(request.form)
    rps = ['rock', 'paper', 'scissors']
    rand_num = randint(0,2)
    server_says = rps[rand_num]
    print('&'*90)
    print(server_says)
    # result will be either win, lose, or tie
    result = rockPaperScissors(request.form['user_input'], server_says)


    if result == 'win':
        session['client_won'] += 1
    elif result == 'lose':
        session['server_won'] += 1
    else:
        session['ties'] += 1

    flash(f"Client picked {request.form['user_input']}")
    flash(f"Server picked {server_says}")
    flash(f"You {result}")
    # session['server_says'] = server_says
    # session['user_input'] = request.form['user_input']
    # session['result'] = rockPaperScissors(request.form['user_input'], server_says)
    return redirect("/")

@app.route('/play_again', methods=['post'])
def restart():
    session.clear()
    return redirect("/")

def rockPaperScissors(p1, p2):
    results = {
        "rock": { "rock": "tie", "paper": "lose", "scissors": "win" },
        "paper": { "rock": "win", "paper": "tie", "scissors": "lose" },
        "scissors": { "rock": "lose", "paper": "win", "scissors": "tie" } 
    }
    return results[p1][p2]
app.run(debug=True)
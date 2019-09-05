from flask import Flask, render_template, request, redirect

app = Flask(__name__)

print('working flask')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/pets', methods=['post'])
def process():
    print(request.form['name'])
    return redirect('/')

app.run(debug=True)
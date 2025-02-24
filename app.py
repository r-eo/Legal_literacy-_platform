from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template("index.html")

@app.route('/student')
def student():
    return render_template("student.html")

@app.route('/professional')
def professional():
    return render_template("professional.html")

@app.route('/senior')
def senior():
    return render_template("senior.html")

if __name__ == '__main__':
    app.run(debug=True)

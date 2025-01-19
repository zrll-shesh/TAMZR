from flask import Flask, render_template

app = Flask(__name__)

# Home Route
@app.route('/')
def home():
    return render_template('index.html')

# About Tamzr Route
# @app.route('/about')
# def about():
#     return render_template('about.html')

# Why Choose Us Route
@app.route('/why-us')
def why_us():
    return render_template('why_us.html')

# Bimbel Online Route
@app.route('/bimbel-online')
def bimbel_online():
    return render_template('bimbel_online.html')

# About Joki Tugas Route
@app.route('/joki-tugas')
def joki_tugas():
    return render_template('joki_tugas.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080, debug=True)


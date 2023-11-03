from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("balance_sheet.html", people=['Lloyd', 'Evan', 'Tim', 'Gage', 'Aiden'])

if __name__ =='__main__':
    app.run(debug=True)
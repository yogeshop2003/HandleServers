from flask import Flask, redirect, send_from_directory
import time

app = Flask(__name__, static_folder='static')

@app.route('/')
def start():
    return "type /time to get a output for a liner time complexed algo."

@app.route('/time')
def calculate_time():
    initial_time = time.time()
    array = []
    for i in range(10000000):
        array.append(i)

    total_sum = 0
    for i in range(len(array)):
        total_sum += array[i]

    final_time = time.time()

    return "Python run time :" + str(final_time - initial_time)

@app.route('/yogesh')
def yogesh():
    return redirect("https://www.leetcode.com/yogeshop2003", code = 302)

if __name__ == '__main__':
    app.run(host='localhost', port=8084)

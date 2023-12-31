from flask import Flask, jsonify, render_template, send_from_directory, request
import pandas as pd

app = Flask(__name__)

# Cargar los datos
pd.set_option('display.max_columns', 500)
df = pd.read_csv('universal_top_spotify_songs.csv')

# Ruta para servir archivos estáticos
@app.route('/static/<path:filename>')
def serve_static(filename):
    return send_from_directory('static', filename)

@app.route('/')
def index():
    return render_template('adiiu.html')

@app.route('/get_data', methods=['GET'])
def get_data():
    num_rows = int(request.args.get('num_rows', 100))
    # Convierte el DataFrame a un diccionario JSON
    selected_columns = df[['name', 'popularity', 'artists']]

    # Convierte el subconjunto del DataFrame a un diccionario JSON
    data = selected_columns.head(num_rows).to_dict(orient='records')
    return jsonify(data)

@app.route('/get_data2', methods=['GET'])
def get_data2():
    num_rows = int(request.args.get('num_rows', 100))
    # Convierte el DataFrame a un diccionario JSON
    selected_columns = df[['album_name', 'weekly_movement']]

    # Convierte el subconjunto del DataFrame a un diccionario JSON
    data = selected_columns.head(num_rows).to_dict(orient='records')
    return jsonify(data)

@app.route('/get_data3', methods=['GET'])
def get_data3():
    num_rows = int(request.args.get('num_rows', 100))
    # Convierte el DataFrame a un diccionario JSON
    selected_columns = df[['name', 'duration_ms']]

    # Convierte el subconjunto del DataFrame a un diccionario JSON
    data = selected_columns.head(num_rows).to_dict(orient='records')
    return jsonify(data)

@app.route('/get_data4', methods=['GET'])
def get_data4():
    num_rows = int(request.args.get('num_rows', 100))
    # Convierte el DataFrame a un diccionario JSON
    selected_columns = df[['name', 'popularity', 'artists']]

    # Convierte el subconjunto del DataFrame a un diccionario JSON
    data = selected_columns.head(num_rows).to_dict(orient='records')
    return jsonify(data)

if __name__ == '__main__':
    app.run()

from flask import Flask, jsonify, render_template, send_from_directory
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
    # Convierte el DataFrame a un diccionario JSON
    selected_columns = df[['name', 'popularity', 'artists']]

    # Convierte el subconjunto del DataFrame a un diccionario JSON
    data = selected_columns.head(100).to_dict(orient='records')
    return jsonify(data)

@app.route('/get_data2', methods=['GET'])
def get_data2():
    # Convierte el DataFrame a un diccionario JSON
    selected_columns = df[['album_name', 'weekly_movement']]

    # Convierte el subconjunto del DataFrame a un diccionario JSON
    data = selected_columns.head(60).to_dict(orient='records')
    return jsonify(data)

@app.route('/get_data3', methods=['GET'])
def get_data3():
    # Convierte el DataFrame a un diccionario JSON
    selected_columns = df[['name', 'popularity']]

    # Convierte el subconjunto del DataFrame a un diccionario JSON
    data = selected_columns.head(30).to_dict(orient='records')
    return jsonify(data)


if __name__ == '__main__':
    app.run()

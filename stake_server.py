from flask import Flask, send_file, jsonify
from flask_cors import CORS
import json
import random
import os

app = Flask(__name__)
CORS(app)

# 1. Încărcarea Fondului Static de Scenarii (Regula de aur Stake)
DB_FILE = 'stake_pool_3M.jsonl'
stake_scenarios = []

print(f"Botezăm Stake Engine RGS...")
if os.path.exists(DB_FILE):
    print(f"Încărcăm fondul matematic din {DB_FILE}...")
    with open(DB_FILE, 'r') as f:
        for line in f:
            stake_scenarios.append(json.loads(line))
    print(f"SUCCESS: {len(stake_scenarios)} scenarii gata de joc.")
else:
    print(f"EROARE CRITICĂ: Nu găsesc {DB_FILE}. Rulează 'stake_math_generator.py' mai întâi!")
    exit()

# 2. Livrarea Interfeței Canvas
@app.route('/')
def serve_game():
    # Asigură-te că fișierul tău html se numește exact așa
    return send_file('stake_canvas.html')

# 3. Endpoint-ul de Pariere (Latență ultra-mică)
@app.route('/api/play', methods=['POST'])
def play_round():
    # Stake RGS extrage pur și simplu un rezultat deja calculat și auditat
    # Aici intervine ponderarea (weighting) în sistemele reale. Pentru noi, este o selecție uniformă.
    selected_scenario = random.choice(stake_scenarios)
    
    # Returnăm instantaneu "harta" completă către Canvas
    return jsonify({
        "status": "success",
        "scenario_id": selected_scenario["scenario_id"],
        "grid_layout": selected_scenario["grid"],
        "max_multiplier": selected_scenario["max_multiplier_potential"]
    })

if __name__ == '__main__':
    print("\n========================================")
    print(" STAKE RGS ESTE ONLINE - PORT 5000")
    print(" ACCESEAZĂ JOCUL AICI: http://localhost:5000")
    print("========================================\n")
    app.run(port=5000, debug=True)
from flask import Flask, request, jsonify
from flask_cors import CORS
import random
import hashlib

app = Flask(__name__)
CORS(app)

# Configurații provably fair (Simulate pentru acest stadiu)
SERVER_SEED = "stake_server_secret_key_88"
CLIENT_SEED = "user_client_seed_123"
NONCE = 0

@app.route('/api/authenticate', methods=['GET'])
def authenticate():
    # Balanță inițială în unități mici (Satoshis/Cents)
    return jsonify({
        "balance": 1000000, 
        "status": "AUTHENTICATED",
        "currency": "USD"
    })

@app.route('/api/play', methods=['POST'])
def play():
    global NONCE
    data = request.json
    bet = data.get('bet', 100000)
    user_index = data.get('index')
    mine_count = data.get('mine_count', 3) # Primim numărul de mine de la client
    
    NONCE += 1
    
    # 1. GENERARE TABLĂ DETERMINISTICĂ (Provably Fair)
    # Generăm un hash unic pentru această rundă
    round_hash = hashlib.sha256(f"{SERVER_SEED}:{CLIENT_SEED}:{NONCE}".encode()).hexdigest()
    
    # Cream o listă de 25 de poziții
    # 0 = Gol, 1 = Pisică (Hit), 2 = Bombă (Mine)
    board = [0] * 25
    
    # Plasăm minele folosind hash-ul pentru seed (asigură corectitudine)
    random.seed(round_hash)
    mine_positions = random.sample(range(25), mine_count)
    for pos in mine_positions:
        board[pos] = 2
        
    # 2. CALCUL REZULTAT
    is_hit = False
    payout = 0
    
    if board[user_index] == 2:
        # A lovit o bombă
        is_hit = False
        payout = 0
    else:
        # A găsit o pisică (loc sigur)
        is_hit = True
        # FORMULA MATEMATICĂ STAKE (RTP 99%)
        # Multiplier = (1 - HouseEdge) * (Total / Safe)
        house_edge = 0.01 
        safe_slots = 25 - mine_count
        multiplier = (1 - house_edge) * (25 / safe_slots)
        payout = int(bet * multiplier)

    # 3. RĂSPUNSUL CĂTRE FRONTEND
    return jsonify({
        "success": True,
        "isHit": is_hit,
        "payout": payout,
        "mines": mine_positions, # Trimitem locația TUTUROR minelor pentru transparență
        "hash": round_hash,      # Trimitem hash-ul pentru auditul jucătorului
        "nonce": NONCE
    })

if __name__ == '__main__':
    print("Stake RGS Engine Online | Port 5000")
    app.run(debug=True, port=5000)
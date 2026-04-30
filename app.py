from flask import Flask, request, jsonify
from flask_cors import CORS
import random
import math

app = Flask(__name__)
CORS(app)

class GameState:
    def __init__(self):
        self.balance = 1000.0
        self.bet = 0.0
        self.mines_pos = []
        self.revealed_pos = []  
        self.mines_count = 3
        self.active = False

    def get_multiplier(self):
        cats_found = len(self.revealed_pos)
        if cats_found == 0: return 1.00
        
        total_cells = 25
        safe_cells = total_cells - self.mines_count
        
        if cats_found > safe_cells: return 1.00
        
        prob = math.comb(safe_cells, cats_found) / math.comb(total_cells, cats_found)
        return max(1.00, round((1 / prob) * 0.99, 2))

state = GameState()

@app.route('/api/start', methods=['POST'])
def start():
    data = request.json
    state.bet = float(data.get('bet', 10))
    state.mines_count = int(data.get('mines', 3))
    
    if state.bet > state.balance:
        return jsonify({"error": "Bani insuficienti"}), 400
        
    state.balance -= state.bet
    state.mines_pos = random.sample(range(25), state.mines_count)
    state.revealed_pos = []  
    state.active = True
    
    print(f"\n[SERVER] WHACK-A-CAT PORNIT! Bet: ${state.bet} | Inamici(Câini): {state.mines_count}")
    return jsonify({"status": "started", "balance": state.balance})

@app.route('/api/reveal', methods=['POST'])
def reveal():
    idx = int(request.json.get('index'))
    
    if not state.active: 
        return jsonify({"error": "Joc inactiv"}), 400
        
    if idx in state.revealed_pos:
        return jsonify({"error": "Gaura deja lovită"}), 400
        
    if idx in state.mines_pos:
        state.active = False
        print(f"[SERVER] MUȘCĂTURĂ DE CÂINE la {idx}!")
        return jsonify({"status": "mine", "all_mines": state.mines_pos})
        
    state.revealed_pos.append(idx)
    mult = state.get_multiplier()
    cashout_value = round(state.bet * mult, 2)
    
    print(f"[SERVER] Pisică prinsă la {idx}! Multiplicator: {mult}x | Cashout: ${cashout_value}")
    return jsonify({"status": "diamond", "multiplier": mult, "cashout": cashout_value})

@app.route('/api/cashout', methods=['POST'])
def cashout():
    if not state.active or len(state.revealed_pos) == 0:
        return jsonify({"error": "Cashout invalid"}), 400
        
    win_amount = round(state.bet * state.get_multiplier(), 2)
    state.balance += win_amount
    state.active = False
    print(f"[SERVER] CASHOUT! Câștig: ${win_amount}")
    return jsonify({"status": "success", "win": win_amount, "new_balance": state.balance})

if __name__ == '__main__':
    print("\n--- MOTORUL WHACK-A-CAT ESTE ONLINE ---")
    app.run(port=5000, debug=True)
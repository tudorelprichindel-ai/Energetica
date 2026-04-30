import json
import csv
import random
import zstandard as zstd

# CONFIGURARE JOC
TOTAL_CELLS = 25
MINES_COUNT = 3
TOTAL_SIMULATIONS = 10000

def generate_stake_math_package():
    jsonl_filename = "whack_base.jsonl"
    zst_filename = "whack_base.jsonl.zst"
    csv_filename = "lookUpTable_base.csv"
    index_filename = "index.json"
    
    csv_data = []
    
    print("1. Procesam logica RGS si convertim sumele in uint64...")
    
    with open(jsonl_filename, 'w', encoding='utf-8') as f_jsonl:
        for sim_id in range(1, TOTAL_SIMULATIONS + 1):
            
            grid = list(range(TOTAL_CELLS))
            mines_positions = random.sample(grid, MINES_COUNT)
            
            raw_multiplier = 1.00 if random.random() > 0.5 else 0.00
            if raw_multiplier > 0:
                raw_multiplier += random.uniform(0.1, 5.0)
                
            payout_int = int(round(raw_multiplier * 100))
            probability_weight = 1 
            
            event_data = {
                "id": sim_id,
                "events": [
                    {
                        "type": "board_state",
                        "mines": mines_positions
                    }
                ],
                "payoutMultiplier": payout_int
            }
            
            f_jsonl.write(json.dumps(event_data) + '\n')
            csv_data.append([sim_id, probability_weight, payout_int])

    print("2. Aplicam compresia zStandard (Obligatorie pentru Stake Engine)...")
    cctx = zstd.ZstdCompressor(level=3)
    with open(jsonl_filename, 'rb') as f_in:
        with open(zst_filename, 'wb') as f_out:
            cctx.copy_stream(f_in, f_out)

    print("3. Generam tabelul de referinta CSV...")
    with open(csv_filename, 'w', newline='') as f_csv:
        writer = csv.writer(f_csv)
        writer.writerows(csv_data)

    print("4. Cream index.json (Cheia de bolta a RGS-ului)...")
    index_data = {
        "modes": [
            {
                "name": "base",
                "cost": 1.0,
                "events": zst_filename,
                "weights": csv_filename
            }
        ]
    }
    with open(index_filename, 'w') as f_index:
        json.dump(index_data, f_index, indent=4)

    print("\n[SUCCESS] Pachetul Matematic Stake a fost generat si este pregatit pentru validare.")

if __name__ == "__main__":
    generate_stake_math_package()
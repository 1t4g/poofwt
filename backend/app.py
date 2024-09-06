from flask import Flask, jsonify
import random

app = Flask(__name__)

@app.route('/whitepaper', methods=['GET'])
def get_whitepaper():
    words = ['магические', 'инновации', 'космические', 'децентрализованные', 'реверсные', 'сингулярности', 'токеномика', 'алгоритмы', 'каштаны']
    random_text = ' '.join(random.choice(words) for _ in range(50))
    return jsonify(random_text)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000)

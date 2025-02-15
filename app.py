import pickle
import numpy as np
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# ✅ Load the StandardScaler and model together
with open("diabetes_model.pkl", "rb") as f:
    scaler, model = pickle.load(f)  # Now correctly loading both

@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.json  # Get JSON data from frontend
        # Convert input to NumPy array
        features = np.array([data["features"]], dtype=np.float64)
        # ✅ Standardize the input using the saved scaler
        std_features = scaler.transform(features)
        # Make prediction
        prediction = model.predict(std_features)[0]
        return jsonify({"prediction": int(prediction)})
    except Exception as e:
        print("Error:", str(e))
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)

import { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    pregnancies: "",
    glucose: "",
    bloodPressure: "",
    skinThickness: "",
    insulin: "",
    bmi: "",
    diabetesPedigree: "",
    age: "",
  });

  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const features = Object.values(formData).map(Number); // Convert to numbers

    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ features }),
      });

      const data = await response.json();
      setPrediction(data.prediction);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Diabetes Prediction</h2>
        
        <form onSubmit={handleSubmit} className="space-y-3">
          {Object.keys(formData).map((key) => (
            <div key={key}>
              <label className="block text-gray-700 capitalize">{key.replace(/([A-Z])/g, " $1")}</label>
              <input
                type="number"
                step="any"
                name={key}
                value={formData[key]}
                onChange={handleChange}
                className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md font-bold hover:bg-blue-600"
            disabled={loading}
          >
            {loading ? "Predicting..." : "Predict"}
          </button>
        </form>

        {prediction !== null && (
          <div className={`mt-4 p-3 text-center font-bold text-lg rounded-md ${
            prediction === 1 ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"
          }`}>
            {prediction === 1 ? "Diabetic" : "Not Diabetic"}
          </div>
        )}
      </div>
    </div>
  );
}

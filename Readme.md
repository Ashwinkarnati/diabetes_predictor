# Diabetes Predictor Web App

## 🚀 Overview

This is a **Diabetes Predictor** web application that uses **Flask** as the backend and **React** for the frontend. It utilizes the **Pima Indian Diabetes Dataset** to predict whether a person is diabetic or not based on user input.

---

## 📂 Project Structure

```
diabetes-predictor/
│-- backend/                  # Flask API
│   │-- app.py                # Flask main app
│   │-- diabetes_model.pkl    # Trained ML model
│   │-- requirements.txt      # Backend dependencies
│
│-- frontend/                 # React App
│   │-- src/
│   │   │-- components/       # React components
│   │   │-- App.js            # Main React app
│   │   │-- index.js          # Entry point
│   │-- package.json          # Frontend dependencies
│
│-- tailwind.config.js        # Tailwind CSS Configuration
│-- postcss.config.js         # PostCSS Configuration
│-- README.md                 # Project Documentation
```

---

## 🛠️ Setup Instructions

### **Backend (Flask) Setup**

1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Create and activate a virtual environment (**optional but recommended**):
   ```bash
   python -m venv venv
   source venv/bin/activate  # On macOS/Linux
   venv\Scripts\activate     # On Windows
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Run the Flask app:
   ```bash
   python app.py
   ```

---

### **Frontend (React) Setup**

1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React app:
   ```bash
   npm start
   ```

---

## 📡 API Endpoints (Flask)

- **`POST /predict`** → Accepts JSON input with user data and returns diabetes prediction.
  ```json
  {
    "pregnancies": 3,
    "glucose": 45,
    "blood_pressure": 72,
    "skin_thickness": 35,
    "insulin": 0,
    "bmi": 23,
    "dpf": 0.627,
    "age": 32
  }
  ```
- **Response:**
  ```json
  {
    "prediction": "Diabetic"
  }
  ```

---

## 🎨 Frontend Features

✅ Responsive UI (Tailwind CSS)\
✅ User Input Form\
✅ Connects to Flask API\
✅ Displays Prediction Result

---

## 🌍 Deployment

1. **Upload to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
2. **Deploy Backend to Render/Heroku**
3. **Deploy Frontend to Vercel/Netlify**

---

## 🤖 Technologies Used

- **Backend**: Flask, Scikit-learn, NumPy, Pandas
- **Frontend**: React, Tailwind CSS
- **Deployment**: Vercel (Frontend), Render/Heroku (Backend)

---

## 📌 Future Improvements

- Improve UI design
- Add more ML models for better accuracy
- Store user predictions in a database

---

### 🔥 Developed with ❤️ by [Karnati Ashwin]


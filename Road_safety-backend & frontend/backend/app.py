from flask import Flask, render_template, request, redirect, url_for,jsonify,send_from_directory
from model import predict_performance
import os
from flask_cors import CORS

app = Flask(_name_)

materials = {
    "basic": [
        {"title": "Understanding Road Signs", "url": ""},
        {"title": "Pedestrian Safety Tips", "url": "#"}
    ],
    "intermediate": [
        {"title": "Defensive Driving Techniques", "url": "#"},
        {"title": "Using Vehicle Safety Features", "url": "#"}
    ],
    "advanced": [
        {"title": "Analyzing Accident Statistics", "url": "#"},
        {"title": "Impact of Road Safety in Communities", "url": "#"}
    ]
}

user_data = {
    "progress_level": "basic",
    "performance": {
        "road signs": {"score": 80, "status": "strong"},
        "pedestrian safety": {"score": 60, "status": "weak"},
        "vehicle safety": {"score": 85, "status": "strong"},
        "defensive driving": {"score": 50, "status": "weak"}
    }
}

@app.route('/')
def index():
    return send_from_directory(os.path.join(app.static_folder, 'build'), 'index.html')

@app.route('/recommend', methods=["POST"])
def recommend():
    progress = user_data["progress_level"]
    recommended_materials = materials.get(progress, [])

    return render_template("recommendations.html", materials=recommended_materials)
    return jsonify(recommended_materials)


@app.route('/set_progress', methods=["POST"])
def set_progress():
    progress = request.form.get("progress_level")
    if progress in materials:
        user_data["progress_level"] = progress
    print(f"Progress Level set to: {progress_level}")
    return redirect(url_for("../frontend-road safety/project/src/App.tsx"))

@app.route('/feedback')
def feedback():
    feedback_data = {
        'strong_areas': ["JavaScript", "React", "TypeScript"],
        'weak_areas': ["Testing", "API Integration"],
        'recommendations': [
            {'title': "React Documentation", 'url': "https://reactjs.org/docs/getting-started.html"},
            {'title': "JavaScript Info", 'url': "https://javascript.info/"}
        ]
    }
    performance = user_data["performance"]
    weak_areas = [topic for topic, details in performance.items() if details["status"] == "weak"]
    strong_areas = [topic for topic, details in performance.items() if details["status"] == "strong"]
    
    recommendations = []
    if "road signs" in weak_areas:
        recommendations.append({"title": "Road Signs Refresher", "url": "#"})
    if "pedestrian safety" in weak_areas:
        recommendations.append({"title": "Pedestrian Safety Basics", "url": "#"})
    if "vehicle safety" in weak_areas:
        recommendations.append({"title": "Vehicle Safety Tips", "url": "#"})
    if "defensive driving" in weak_areas:
        recommendations.append({"title": "Mastering Defensive Driving", "url": "#"})

    print("Personalized Feedback Requested.")
    
    return jsonify(feedback_data)
    return render_template("feedback.html", weak_areas=weak_areas, strong_areas=strong_areas, recommendations=recommendations)

@app.route('/predict_performance', methods=["POST"])
def predict():
    data = request.get_json()
    interaction_time = float(data.get("interaction_time",0))
    test_score = float(data.get("test_score",0))
    progress_level = float(data.get("progress_level",0))

    predicted_score = predict_performance(interaction_time, test_score, progress_level)
    predicted_score = (test_score * 0.5) + (progress_level * 0.3) + (interaction_time * 0.2)
    predicted_score = round(predicted_score, 2)  

    print(f"Interaction Time: {interaction_time} minutes")
    print(f"Test Score: {test_score}%")
    print(f"Progress Level: {progress_level}%")
    

    return render_template("prediction.html", predicted_score=predicted_score)
    return jsonify({"predicted_score": predicted_score})
    return redirect(url_for('index'))



if _name_ == "_main_":
    app.run(debug=True,port=5000)
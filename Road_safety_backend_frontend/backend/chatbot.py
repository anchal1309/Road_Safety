pip install Flask Flask-SocketIO nltk


from flask import Flask, render_template, request
from flask_socketio import SocketIO
import nltk
from nltk.tokenize import word_tokenize

# Download NLTK punkt package for tokenization
nltk.download('punkt')

# Create Flask application
app = Flask(__name__)
socketio = SocketIO(app)

# Road safety knowledge base (Simple responses to predefined queries)
def get_bot_response(user_query):
    # Simple keyword-based responses
    user_query = user_query.lower()

    # Basic queries and responses
    if "accident" in user_query:
        return ("If you're involved in an accident, follow these steps:\n"
                "1. Ensure safety and move to a safe location.\n"
                "2. Call emergency services.\n"
                "3. Check for injuries.\n"
                "4. Exchange information with others involved.\n"
                "5. Document the scene (photos, witness details).\n"
                "6. Do not admit fault on the spot.")
    elif "speed limit" in user_query:
        return "Speed limits on residential streets are generally 25-30 mph (40-48 km/h). Check posted signs for specific limits."
    elif "fog" in user_query:
        return ("In foggy weather, reduce speed and use low-beam headlights. "
                "Avoid high beams, as they can reflect off the fog. Increase following distance.")
    elif "weather" in user_query:
        return "When driving in bad weather, always adjust your speed to match the conditions. Drive slowly, keep a safe distance, and be prepared for sudden stops."
    elif "road signs" in user_query:
        return "Road signs help guide drivers. Common signs include stop signs, yield signs, speed limit signs, etc. Make sure you know their meanings!"
    else:
        return "Sorry, I didn't understand that. Can you please rephrase?"

# Route for the homepage
@app.route('/')
def index():
    return render_template('index.html')

# SocketIO event for receiving user messages and sending bot responses
@socketio.on('message')
def handle_message(message):
    print(f"Received message: {message}")
    response = get_bot_response(message)
    socketio.emit('response', response)

if __name__ == '__main__':
    socketio.run(app, debug=True)
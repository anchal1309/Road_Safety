import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error

# Simulated dataset for model training
# Columns: [user_interaction, test_score, progress_level]
data = np.array([
    [30, 80, 20, 65],  # [interaction_time, test_score, progress_level, performance_score]
    [45, 70, 40, 70],
    [20, 50, 10, 50],
    [60, 90, 70, 80],
    [50, 85, 60, 78],
    [15, 40, 15, 45]
])

X = data[:, :-1]  # Features: [interaction_time, test_score, progress_level]
y = data[:, -1]   # Target: performance_score

# Train a simple linear regression model
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
model = LinearRegression()
model.fit(X_train, y_train)

# Calculate model accuracy on test data
y_pred = model.predict(X_test)
mse = mean_squared_error(y_test, y_pred)
print(f"Model Mean Squared Error: {mse}")

def predict_performance(interaction_time, test_score, progress_level):
    # Use the trained model to make a prediction
    features = np.array([[interaction_time, test_score, progress_level]])
    predicted_score = model.predict(features)
    return predicted_score[0]
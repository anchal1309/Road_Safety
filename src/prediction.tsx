// app.ts

// Function to handle form submission and send data to Flask
async function predictPerformance(event: Event): Promise<void> {
    event.preventDefault();

    // Get input values
    const interactionTime = (document.getElementById('interaction_time') as HTMLInputElement).value;
    const testScore = (document.getElementById('test_score') as HTMLInputElement).value;
    const progressLevel = (document.getElementById('progress_level') as HTMLInputElement).value;

    const data = {
        interaction_time: interactionTime,
        test_score: testScore,
        progress_level: progressLevel
    };

    try {
        // Send POST request to Flask backend with the form data
        const response = await fetch('/predict-performance', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        // Parse JSON response from Flask
        const result = await response.json();
        // Display the predicted performance score in the UI
        const predictedScore = result.predicted_score;
        const predictedScoreElement = document.getElementById('predicted_score') as HTMLHeadingElement;
        predictedScoreElement.textContent = `${predictedScore}%`;

    } catch (error) {
        console.error('Error:', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Attach the form handler to the form element
    const predictionForm = document.querySelector('#prediction_form') as HTMLFormElement;
    if (predictionForm) {
        predictionForm.addEventListener('submit', predictPerformance);
    }
});

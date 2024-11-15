// app.ts

// Function to handle progress level change
function setProgressLevel(event: Event): void {
    event.preventDefault();

    const progressLevel = (document.getElementById('progress_level') as HTMLSelectElement).value;
    console.log(`Selected Progress Level: ${progressLevel}`);

    // You can implement AJAX logic to send this data to Flask or submit the form
    // For simplicity, let's just log the progress level to the console
}

// Function to handle the prediction form submission
function predictPerformance(event: Event): void {
    event.preventDefault();

    const interactionTime = (document.getElementById('interaction_time') as HTMLInputElement).value;
    const testScore = (document.getElementById('test_score') as HTMLInputElement).value;
    const progressLevel = (document.getElementById('progress_level') as HTMLInputElement).value;

    console.log(`Interaction Time: ${interactionTime} minutes`);
    console.log(`Test Score: ${testScore}%`);
    console.log(`Progress Level: ${progressLevel}%`);

    // Logic to handle prediction, such as sending the data to Flask via AJAX
}

// Function to handle form submissions for recommendations and feedback
function submitRecommendationFeedback(event: Event, action: string): void {
    event.preventDefault();

    // Use AJAX or form submission to handle the request
    // Example:
    // const formData = new FormData(document.forms[0]);
    // fetch(action, { method: 'POST', body: formData });
    console.log(`Submitting to: ${action}`);

    // Simple redirection for now
    window.location.href = action;
}

document.addEventListener('DOMContentLoaded', () => {
    // Attach form handlers
    const progressForm = document.querySelector('#progress_form') as HTMLFormElement;
    const predictionForm = document.querySelector('#prediction_form') as HTMLFormElement;
    const recommendationForm = document.querySelector('#recommendation_form') as HTMLFormElement;
    const feedbackForm = document.querySelector('#feedback_form') as HTMLFormElement;

    if (progressForm) {
        progressForm.addEventListener('submit', setProgressLevel);
    }

    if (predictionForm) {
        predictionForm.addEventListener('submit', predictPerformance);
    }

    if (recommendationForm) {
        recommendationForm.addEventListener('submit', (e) => submitRecommendationFeedback(e, '/recommend'));
    }

    if (feedbackForm) {
        feedbackForm.addEventListener('submit', (e) => submitRecommendationFeedback(e, '/feedback'));
    }
});

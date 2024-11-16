"use strict";
function setProgressLevel(event) {
    event.preventDefault();
    const progressLevel = document.getElementById('progress_level').value;
    console.log(`Selected Progress Level: ${progressLevel}`);
}
function predictPerformance(event) {
    event.preventDefault();
    const interactionTime = document.getElementById('interaction_time').value;
    const testScore = document.getElementById('test_score').value;
    const progressLevel = document.getElementById('progress_level').value;
    console.log(`Interaction Time: ${interactionTime} minutes`);
    console.log(`Test Score: ${testScore}%`);
    console.log(`Progress Level: ${progressLevel}%`);
}
function submitRecommendationFeedback(event, action) {
    event.preventDefault();
    console.log(`Submitting to: ${action}`);
    window.location.href = action;
}
document.addEventListener('DOMContentLoaded', () => {
    const progressForm = document.querySelector('#progress_form');
    const predictionForm = document.querySelector('#prediction_form');
    const recommendationForm = document.querySelector('#recommendation_form');
    const feedbackForm = document.querySelector('#feedback_form');
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

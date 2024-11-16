function setProgressLevel(event: Event): void {
    event.preventDefault();

    const progressLevel = (document.getElementById('progress_level') as HTMLSelectElement).value;
    console.log(`Selected Progress Level: ${progressLevel}`);}

function predictPerformance(event: Event): void {
    event.preventDefault();

    const interactionTime = (document.getElementById('interaction_time') as HTMLInputElement).value;
    const testScore = (document.getElementById('test_score') as HTMLInputElement).value;
    const progressLevel = (document.getElementById('progress_level') as HTMLInputElement).value;

    console.log(`Interaction Time: ${interactionTime} minutes`);
    console.log(`Test Score: ${testScore}%`);
    console.log(`Progress Level: ${progressLevel}%`);

}

function submitRecommendationFeedback(event: Event, action: string): void {
    event.preventDefault();

    console.log(`Submitting to: ${action}`);

    window.location.href = action;
}

document.addEventListener('DOMContentLoaded', () => {
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

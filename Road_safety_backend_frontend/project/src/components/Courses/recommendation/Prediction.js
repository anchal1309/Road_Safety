"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = predictPerformance;
function predictPerformance(event) {
    return __awaiter(this, void 0, void 0, function* () {
        event.preventDefault();
        const interactionTime = document.getElementById('interaction_time').value;
        const testScore = document.getElementById('test_score').value;
        const progressLevel = document.getElementById('progress_level').value;
        const data = {
            interaction_time: interactionTime,
            test_score: testScore,
            progress_level: progressLevel
        };
        try {
            const response = yield fetch('/predict-performance', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const result = yield response.json();
            const predictedScore = result.predicted_score;
            const predictedScoreElement = document.getElementById('predicted_score');
            predictedScoreElement.textContent = `${predictedScore}%`;
        }
        catch (error) {
            console.error('Error:', error);
        }
    });
}
document.addEventListener('DOMContentLoaded', () => {
    const predictionForm = document.querySelector('#prediction_form');
    if (predictionForm) {
        predictionForm.addEventListener('submit', predictPerformance);
    }
});

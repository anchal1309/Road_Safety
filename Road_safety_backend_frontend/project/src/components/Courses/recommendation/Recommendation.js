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
exports.default = Recommendation;
function Recommendation() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('/recommended-materials');
            const materials = yield response.json();
            const materialsList = document.getElementById('materials-list');
            if (materials.length === 0) {
                const listItem = document.createElement('li');
                listItem.textContent = 'No recommended materials available.';
                materialsList.appendChild(listItem);
            }
            else {
                materials.forEach((material) => {
                    const listItem = document.createElement('li');
                    const link = document.createElement('a');
                    link.href = material.url;
                    link.textContent = material.title;
                    listItem.appendChild(link);
                    materialsList.appendChild(listItem);
                });
            }
        }
        catch (error) {
            console.error('Error fetching materials:', error);
        }
    });
}
document.addEventListener('DOMContentLoaded', Recommendation);

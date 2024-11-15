// app.ts

// Function to fetch and display recommended materials
async function fetchRecommendedMaterials(): Promise<void> {
    try {
        // Fetch the recommended materials from the Flask backend
        const response = await fetch('/recommended-materials');
        const materials = await response.json();

        // Get the container for the list
        const materialsList = document.getElementById('materials-list') as HTMLUListElement;

        // If no materials were found, display a message
        if (materials.length === 0) {
            const listItem = document.createElement('li');
            listItem.textContent = 'No recommended materials available.';
            materialsList.appendChild(listItem);
        } else {
            // Loop through materials and create list items dynamically
            materials.forEach((material: { title: string; url: string }) => {
                const listItem = document.createElement('li');
                const link = document.createElement('a');
                link.href = material.url;
                link.textContent = material.title;
                listItem.appendChild(link);
                materialsList.appendChild(listItem);
            });
        }
    } catch (error) {
        console.error('Error fetching materials:', error);
    }
}

// Run the fetch operation when the page is loaded
document.addEventListener('DOMContentLoaded', fetchRecommendedMaterials);

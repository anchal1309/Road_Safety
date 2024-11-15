async function fetchRecommendedMaterials(): Promise<void> {
    try {
        const response = await fetch('/recommended-materials');
        const materials = await response.json();

        const materialsList = document.getElementById('materials-list') as HTMLUListElement;

        if (materials.length === 0) {
            const listItem = document.createElement('li');
            listItem.textContent = 'No recommended materials available.';
            materialsList.appendChild(listItem);
        } else {
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

document.addEventListener('DOMContentLoaded', fetchRecommendedMaterials);

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const workoutContainer = document.getElementById('workout-container');

searchButton.addEventListener('click', () => {
	const searchTerm = searchInput.value.toLowerCase();
	const workoutCards = workoutContainer.children;
	
	for (let i = 0; i < workoutCards.length; i++) {
		const workoutCard = workoutCards[i];
		const workoutName = workoutCard.getAttribute('data-workout-name').toLowerCase();
		
		if (workoutName.includes(searchTerm)) {
			workoutCard.style.display = 'block';
		} else {
			workoutCard.style.display = 'none';
		}
	}
});
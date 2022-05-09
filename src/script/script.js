import PitchAnalyser from 'pitch-analyser';

window.onload = function() {
	// Get elements from page
	const aNote = document.querySelector('.note');
	const aCents = document.querySelector('.cents');
	const startButton = document.querySelector('.start');

	// Analyser options
	const analyserOptions = {
		callback: analyserCallback,
		returnNote: true,
		returnCents: true,
		decimals: 2,
	};

	// Initialize the analyser
	const analyser = new PitchAnalyser(analyserOptions);

	// What to do with the audio payload
	function analyserCallback(payload) {
		updateNote(payload.note);
		updateCents(payload.cents);
	}

	// Update the note on the page
	function updateNote(note) {
		aNote.innerText = note;
	}

	// Update the cents on the page (Not sure about the accuracy)
	function updateCents(cents) {
		aCents.innerText = cents;
	}

	// Handle error
	function handleError(err) {
		throw new Error(`Opps something went wrong: ${err}`);
	}

	// Button to initialise and start the analyser
	startButton.addEventListener('click', function() {
		// Required to init the analyser first
		// It will create an AudioContext instance under 'analyser.audioContext'
		// It returns no value
		analyser.initAnalyser().then(() => {
			// Start the analyser after initialisation
			analyser.startAnalyser();
		});

		startButton.classList.add('hidden');
	});

};
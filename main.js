document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get user responses
    const responses = {
      q1: document.querySelector('input[name="q1"]:checked').value,
      q2: document.querySelector('input[name="q2"]:checked').value,
      q3: document.querySelector('input[name="q3"]:checked').value,
      q4: document.querySelector('input[name="q4"]:checked').value,
      q5: document.querySelector('input[name="q5"]:checked').value,
      q6: document.querySelector('input[name="q6"]:checked').value,
      q7: document.querySelector('input[name="q7"]:checked').value,
      q8: document.querySelector('input[name="q8"]:checked').value,
      q9: document.querySelector('input[name="q9"]:checked').value,
      q10: document.querySelector('input[name="q10"]:checked').value
    };
  
    // Store responses in local storage
    localStorage.setItem('userResponses', JSON.stringify(responses));
  
    // Calculate and display result
    const personalityType = calculatePersonalityType(responses);
    // Redirect to the corresponding result page
    window.location.href = `${personalityType}.html`;
  });
  
  function calculatePersonalityType(responses) {
    // Example logic for determining personality type
    // You can modify this based on your criteria
    if (responses.q1 === 'Reading' && responses.q2 === 'Stay calm and focused' && responses.q3 === 'Documentary') {
      return 'bookworm';
    } else if (responses.q1 === 'Outdoor activities' && responses.q2 === 'Engage in physical activity' && responses.q3 === 'Action and adventure') {
      return 'adventurer';
    } else if (responses.q1 === 'Socializing with friends' && responses.q2 === 'Talk to someone' && responses.q3 === 'Comedy') {
      return 'social_butterfly';
    } else {
      return 'balanced';
    }
  }
  
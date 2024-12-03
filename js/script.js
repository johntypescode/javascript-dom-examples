window.onload = () => {

	// Load the parent container into memory
	const parentDIV = document.querySelector('div#parent-container');

	/**
	 * Exercise 1: a <p> with red text that says "Hey, I'm red!"
	 */

	const redParagraph = document.createElement('p');
	redParagraph.style.color = 'red';
	redParagraph.textContent = 'Hey, I\'m red!';

	// Append the red text paragraph to parent container
	parentDIV.appendChild(redParagraph); // SUCCESS

	/**
	 * Exercise 2: an <h3> with blue text that says "I'm a blue h3!"
	 */
	const blueH3 = document.createElement('h3');
	blueH3.style.color = 'blue';
	blueH3.textContent = 'I\'m a blue H3!';

	parentDIV.appendChild(blueH3);

};
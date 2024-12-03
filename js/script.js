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

	/**
	 * Exercise 3: <div> with black border and pink background
	 * 				-> <h1> "I'm in a DIV!"
	 * 				-> <p> "Me too!"
	 */

	// The pink DIV container
	const pinkDIV = document.createElement('div');
	pinkDIV.style.border = '3px solid #000';
	pinkDIV.style.backgroundColor = 'pink';

	// H1 in pink DIV
	const H1inDIV = document.createElement('h1');
	H1inDIV.textContent = 'I\'m in a DIV!';

	// Paragraph in pink DIV
	const PgInDIV = document.createElement('p');
	PgInDIV.textContent = 'ME TOO!';

	// Append the H1 to the pink DIV
	pinkDIV.appendChild(H1inDIV);
	pinkDIV.appendChild(PgInDIV);

	// Append the pink DIV to the container parent
	parentDIV.appendChild(pinkDIV);


};
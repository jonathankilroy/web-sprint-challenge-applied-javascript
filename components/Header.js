// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container
// Code below here
function Header() {
    const headerDiv = document.createElement('div');
    const date = document.createElement('span');
    const headerText = document.createElement('h1');
    const temp = document.createElement('span');

    date.textContent = 'MARCH 28, 2020';
    headerText.textContent = 'Lambda Times';
    temp.textContent = '98°';

    headerDiv.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    headerDiv.append(date);
    headerDiv.append(headerText);
    headerDiv.append(temp);
    return headerDiv
}

const headerSelection = document.querySelector('div.header-container');
const newHeader = Header();

headerSelection.appendChild(newHeader);
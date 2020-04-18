// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

const headerComponent = () => {
    const header = document.createElement('div');
    const date = document.createElement('span');
    const title = document.createElement('h1');
    const temp = document.createElement('span');

    header.classList.add('header');
    date.textContent = "SMARCH 28, 2019";
    title.textContent = "Lambda Times";
    date.classList.add('date');
    temp.classList.add("temp");
    temp.textContent = "98°"

    header.appendChild(date)
    header.appendChild(title)
    header.appendChild(temp)

    return header;
}

const headerContainer = document.querySelector('.header-container')
headerContainer.append(headerComponent())

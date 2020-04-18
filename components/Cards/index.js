// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

const cardsComponent = (headline, authorPhoto, authorName) => {
    const card = document.createElement("div");
    const headlines = document.createElement('div');
    const author = document.createElement('div');
    const imageContainer = document.createElement('div');
    const image = document.createElement('img');
    const authorsName = document.createElement('span');

    card.classList.add('card');
    headlines.classList.add('headline');
    headlines.textContent = headline;
    author.classList.add('author');
    imageContainer.classList.add('img-container');
    image.src = authorPhoto;
    authorsName.textContent = `By ${authorName}`;

    card.appendChild(headlines)
    card.appendChild(author)
    author.appendChild(imageContainer)
    imageContainer.appendChild(image)
    author.appendChild(authorsName)

    return card;
}

axios.get("https://lambda-times-backend.herokuapp.com/articles")
  .then((response) => {
    // console.log(response);
    const cardInfo = response.data.articles;
    
    for(const topic in response.data.articles) {
        const topicArticles = response.data.articles[topic];
        const cardsContent = document.querySelector(".cards-container");
        topicArticles.forEach((article) => {
            const card = cardsComponent(article.headline, article.authorPhoto, article.authorName);
            console.log(card);
            cardsContent.append(card)
        })
    }
  })
  .catch((err) => {
    console.log("The data was not returned", err);
  })
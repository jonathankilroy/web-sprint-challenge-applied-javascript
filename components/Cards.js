// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
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
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
axios.get('https://lambda-times-api.herokuapp.com/articles')
.then(response => {
  const bootstrap = response.data.articles.bootstrap
  const javascript = response.data.articles.javascript
  const jquery = response.data.articles.jquery
  const node = response.data.articles.node
  const technology = response.data.articles.technology
   bootstrap.forEach(item =>{
     const articles = articleMaker(item)
     cardContainter.appendChild(articles)
   })
   javascript.forEach(item =>{
     const articles = articleMaker(item)
     cardContainter.appendChild(articles)
   })
   jquery.forEach(item =>{
     const articles = articleMaker(item)
     cardContainter.appendChild(articles)
   })
   node.forEach(item =>{
     const articles = articleMaker(item)
     cardContainter.appendChild(articles)
   })
   technology.forEach(item =>{
     const articles = articleMaker(item)
     cardContainter.appendChild(articles)
   })
})
.catch(err =>{
  console.log(err)
})

const cardContainter = document.querySelector('.cards-container')
function articleMaker(obj){
    const card = document.createElement('div')
    const headline = document.createElement('div')
    const author = document.createElement('div')
    const imgDiv = document.createElement('div')
    const img = document.createElement('img')
    const name = document.createElement('span')
   
    card.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    imgDiv.classList.add('img-container')
   
   
    img.src = obj.authorPhoto
    headline.textContent = obj.headline
    name.textContent = obj.authorName
   
    card.appendChild(headline)
    headline.appendChild(author)
    author.appendChild(imgDiv)
    imgDiv.appendChild(img)
    author.appendChild(name)
    
   card.addEventListener('click', event =>{
     console.log(headline.textContent)
   })
   return card
}
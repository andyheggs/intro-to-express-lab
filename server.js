const express = require('express');
const app = express();


//const express = require('express');
//const morgan = require('morgan');

//const app = express();

// Use Morgan middleware with the 'dev' option for concise output
//app.use(morgan('dev'));

// Rest of your Express app code

// Import Express
//const express = require('express')

// Create an Express app
//const app = express()

// Define routes here (we'll add them soon)

// Define routes here:

//app.get('/', (req, res) => {
  //res.send('<h1>Hello World!</h1>');
//});

/*
app.get('/:itemNumber', (req, res) => {
  // Accessing the parameter
  console.log(req.params.itemNumber);  // Output could be 123, 456, etc.

  // Sending a response with the parameter
  res.send(`<h1>Item ${req.params.itemNumber}</h1>`);
});

app.get('/about', (req, res) => {
  res.send('About Page');
});



app.get('/greet/:name', (req, res) => {
console.log(req.params.name);

  res.send(`Hello, ${req.params.name}!`);
});


app.get('/hello', (req, res) => {
  // Accessing query parameters from the request
  const name = req.query.name;
  const age = req.query.age;

  // Using the query parameters to customize the response
  res.send(`Hello there, ${name}! I hear you are ${age} years old!`);
});



app.get('/', (req, res) => {
  res.send('<h1>Hello Express!</h1>');
});

// First middleware function
app.use((req, res, next) => {
  console.log('Middleware 1: Logging request details');
  next(); // Pass control to the next middleware
});

// Second middleware function
app.use((req, res, next) => {
  console.log('Middleware 2: Performing some operation');
  next(); // Pass control to the next middleware
});

// Route handler as the final middleware
app.get('/', (req, res) => {
  res.send('<h1>Hello Express!</h1>');
});


-------------------------------------------------------------- Exericise 1------------------------------------------------------------------
*1. Be Polite, Greet the User*

Task: Create a route that responds to URLs like /greetings/<username-parameter>.

Examples: Matches routes like /greetings/Christy or /greetings/Mathilda.

Response: Include the username from the URL in the response, such as “Hello there, Christy!” or “What a delight it is to see you once more, Mathilda.”


app.get('/greetings/:name',(req, res) => {

  console.log(req.params.name);

  //res.send(`Hello there, ${req.params.name}!`)
  
  res.send(`What a delight it is to see you once more, ${req.params.name}!`)
});

-------------------------------------------------------------- Exericise 2------------------------------------------------------------------

*2. Rolling the Dice*

Task: Set up a route to handle URLs following the pattern /roll/<number-parameter>.

Examples: Matches routes like /roll/6 or /roll/20.

Validation: If the parameter is not a number, respond with “You must specify a number.” For instance, /roll/potato should trigger this response.

Functionality: If a valid number is provided, respond with a random whole number between 0 and the given number. For example, a request to /roll/16 might respond with “You rolled a 14.”

  app.get('/roll/:numberParameter', (req, res) => {
    const numberParameter = parseInt(req.params.numberParameter, 10);
  
    if (isNaN(numberParameter)) {
      return res.send('You must specify a number.');
    }
  
    const diceOutcome = Math.floor(Math.random() * (numberParameter + 1));

    res.send(`You rolled a ${diceOutcome}.`);
  });
  

-------------------------------------------------------------- Exericise 3------------------------------------------------------------------


*3. I Want THAT One!*

Task: Create a route for URLs like /collectibles/<index-parameter>.

Examples: Matches routes such as /collectibles/2 or /collectibles/0.

Data Array:

  const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

//Validation: If the index does not correspond to an item in the array, respond with “This item is not yet in stock. Check back soon!”

//Response: Should describe the item at the given index, like “So, you want the shiny ball? For 5.95, it can be yours!” Include both the name and price properties.

app.get('/collectibles/:name', (req, res) => {
  const itemName = req.params.name.toLowerCase(); 

  const item = collectibles.find(collectible => collectible.name.toLowerCase() === itemName);

  if (!item) {
    return res.send('This item is not yet in stock. Check back soon!');
  }

  res.send(`So, you want the ${item.name}? For ${item.price}, it can be yours!`);
});



-------------------------------------------------------------- Exericise 4------------------------------------------------------------------

*4. Filter Shoes by Query Parameters*

Use the following array of shoes in this challenge:

*/


  const shoes = [
      { name: "Birkenstocks", price: 50, type: "sandal" },
      { name: "Air Jordans", price: 500, type: "sneaker" },
      { name: "Air Mahomeses", price: 501, type: "sneaker" },
      { name: "Utility Boots", price: 20, type: "boot" },
      { name: "Velcro Sandals", price: 15, type: "sandal" },
      { name: "Jet Boots", price: 1000, type: "boot" },
      { name: "Fifty-Inch Heels", price: 175, type: "heel" }
  ];

  
 /* 
//Task: Create a route /shoes that filters the list of shoes based on query parameters.

Query Parameters:

min-price: Excludes shoes below this price.
max-price: Excludes shoes above this price.
type: Shows only shoes of the specified type.
No parameters: Responds with the full list of shoes.

*/
app.get('/shoes', (req, res) => {
  const { 'min-price': minPrice, 'max-price': maxPrice, type } = req.query;

  let filteredShoes = shoes;

  if (minPrice) {
    filteredShoes = filteredShoes.filter(shoe => shoe.price >= parseFloat(minPrice));
  }

  if (maxPrice) {
    filteredShoes = filteredShoes.filter(shoe => shoe.price <= parseFloat(maxPrice));
  }

  if (type) {
    filteredShoes = filteredShoes.filter(shoe => shoe.type === type);
  }
 
  res.send(filteredShoes);
});


// Listen for requests on port 3000

app.listen(3000, () => {
    console.log('Listening on port 3000')
  })

  
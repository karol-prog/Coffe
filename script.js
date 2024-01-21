// Rating slider

const ratings = [
  {
    name: "Penny Lane",
    quote:
      "Definitely the best coffee I have ever had. Whoever loves a specialty coffee, that's the place to go to. Super friendly staff, very cozy atmosphere. It's the highlight of the day as I grab a coffee (or two). And don't forget to buy a cinnamon roll!",
    picture:
      "https://images.unsplash.com/photo-1518577915332-c2a19f149a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=562&q=80",
  },
  {
    name: "Jim Knight",
    quote:
      "Cool Beans is a trendy cafe in my neighborhood that is just steps away from my home. They have beautiful decor, unusual drinks, and a cute dog mascot. I had a chance to try their espresso beverages and they were surprisingly good!",
    picture:
      "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    name: "Amy Jones",
    quote:
      "Wonderfully spacious and clean establishment, with friendly service and delicious coffee!",
    picture:
      "https://images.unsplash.com/photo-1618298363483-e31a31f1a1e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
  },
  {
    name: "Nick Baker",
    quote:
      "Quick and friendly service with a nice view out to the street accompanied by amazing coffee and tasty selection of sweets.",
    picture:
      "https://images.unsplash.com/photo-1484684096794-03e03b5e713e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
  },
];

const quoteEl = document.querySelector(".quote");
const quoteAuthorEl = document.querySelector(".quote-author");
const quotePicEl = document.querySelector(".quote-pic");
const quoteElements = document.querySelector(".quote-section").children;

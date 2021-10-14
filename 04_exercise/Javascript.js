let books = [
  { title: "Java", author: "David", price: 22, sold: false },
  { title: "Python", author: "Zia", price: 20, sold: true },
];
let main = document.querySelector("main");

function display() {
  for (i = 0; i < books.length; i++) {
    let heading = document.createElement("h1");
    heading.textContent = "Book Title :" + books[i].title;
    main.appendChild(heading);
    let author = document.createElement("p");
    author.textContent = "Author Name:" + books[i].author;
    main.appendChild(author);
    let price = document.createElement("p");
    price.textContent = "Book Price: " + books[i].price + " CHF";
    main.appendChild(price);
    let available = document.createElement("p");
    if (books[i].sold) {
      available.textContent = "This book is Available";
    } else {
      available.textContent = "This book is sold";
    }
    main.appendChild(available);
  }
}
display();

function Savebook() {
  let booktitle = document.getElementById("booktitle").value;
  let authername = document.getElementById("authername").value;
  let price = document.getElementById("bookprice").value;

  let CreateObject = {
    title: booktitle,
    author: authername,
    price: price,
    sold: false,
  };

  books.push(CreateObject);
  lastbook();
}
function lastbook() {
  let heading = document.createElement("h1");
  heading.textContent = "Book Title :" + books[books.length - 1].title;
  main.appendChild(heading);
  let author = document.createElement("p");
  author.textContent = "Author Name:" + books[books.length - 1].author;
  main.appendChild(author);
  let price = document.createElement("p");
  price.textContent = "Book Price: " + books[books.length - 1].price + " CHF";
  main.appendChild(price);
  let available = document.createElement("p");
  available.textContent = "Book Price is available";
  main.appendChild(available);
}

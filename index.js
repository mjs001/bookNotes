import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import "dotenv/config";

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//Format for getting request openlibrary:
// https://openlibrary.org/api/books?bibkeys=ISBN:0385472579&jscmd=data&format=json
// ISBN is what user will input to find book
// path for title: [0].title
// path for subtitle: [0].subtitle not everything has a subtitle!
// path for author: [0].authors[0].name ex for multiple: "Christina Lauren" - will need to replace space with ', '
// path for cover url: [0].cover.medium
// path for isbn13: [0].identifiers.isbn_13
// path for genres: [0].subjects[0].name, [0].subjects[1].name;
// path for publisher: [0].publishers[0].name
// path for publish date: [0].publishers.publish_date
// path for number of pages if not present pagination (which is a str need to convert from str to int): [0].number_of_pages (is integer all others strings), pagination: [0].pagination (Str)

// PG
// const db = pg.Client({});
// ex

//FEATURES:
//Search books by ISBN or title

// How to:
/*

*/

//Add books to myBooks

// How to:
/*

*/

//Delete book from myBooks

// How to:
/*

*/

//make ratings out of 5

// How to:
/*

*/

//ADD new notes

// How to:
/*

*/

//edit notes

// How to:
/*

*/

//delete notes

// How to:
/*

*/

var myBooks = [
  { isbn: "9781501128035", title: "The Unhoneymooners" },
  {
    id: 1,
    bookInfo: {
      isbn: "9780545791434",
      subtitle: "the Illustrated Edition",
      author: "J. K. Rowling",
      genres: ["Children's Books/Ages 9-12 Fiction", "Witches and warlocks"],
      publisher: "Scholastic, Incorporated",
      publish_date: "2022",
      number_of_pages: "576",
      cover: "https://covers.openlibrary.org/b/id/12960783-M.jpg",
    },
    rating: 4, //out of 5
    notes: [
      { id: 1, timestamp: "2023-11-09T21:13:34Z", note: "Love this book!" },
      { id: 2, timestamp: "	2023-11-08T20:13:34Z", note: "Would read again." },
    ],
  },
];

var selectedBook = {};

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(port, () => {
  console.log("server is listening at port", port);
});

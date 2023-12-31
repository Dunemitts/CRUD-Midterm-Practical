var bookList = [
    {bookName: "Harry Potter",
    color: "black",
    genre: "Fantasy",
    cost: "15",
    },
];
updateList()
let action = "";

const act = () => {
    action = document.querySelector("#choice").value;
    console.log(action);
    //book creation
    if (action == "c" || action == "C"){
        let newbook = {
            bookName: prompt("Enter Book Name"),
            color: prompt("Enter Book Color"),
            genre: prompt("Enter Book Genre"),
            cost: prompt("Enter Book Cost"),
        };
        //push method
        bookList.push(newbook);
        console.log(bookList);
        insertNewData(newbook);
    }
    //read book data
    else if (action == "r" || action == "R"){
        selectbook = prompt("Enter book Name To Search")
        let foundBook = bookList.find(book => book.bookName === selectbook);
        console.log(foundBook.bookName);
        attributePaste(foundBook);
    }
    //update book data
    else if (action == "u" || action == "U"){
        selectbook = prompt("Enter book Name To Update")
        let foundBook = bookList.find(book => book.bookName === selectbook);
        foundBook.bookName = prompt("Enter New book Name");
        foundBook.color = prompt("Enter book Color");
        foundBook.genre = prompt("Enter book genre");
        foundBook.cost = prompt("Enter book Cost");
        console.log("Updated To book: " + foundBook.bookName);
        let row = document.getElementById("BookTable").rows[bookList.indexOf(foundBook)+1];
        row.cells[0].innerHTML = foundBook.bookName;
        row.cells[0].style.color = foundBook.color;
        console.log(bookList);
    }
    //delete book
    else if (action == "d" || action == "D"){
        selectbook = prompt("Enter book Name To Delete")
        bookList.forEach(selecting);
        console.log(bookList);
    }
}
//inventory updater
function updateList(){
    const table = document.getElementById("BookTable");
    const tbody = document.querySelector("tbody")
    tbody.innerHTML = "";
    bookList.forEach((book) => {
        const row = document.createElement("tr")
        const cell = document.createElement("td")
        cell.innerText = book.bookName; 
        row.appendChild(cell)
        tbody.appendChild(row);
    })
};
//insert data into table
const insertNewData = (newData) => {
    var table = document.getElementById("BookTable").getElementsByTagName('tbody')[0];
    var newbookRow = table.insertRow(table.length);
    cell1 = newbookRow.insertCell(0);
    cell1.style.color = newData.color;
    cell1.innerHTML = newData.bookName;
}
//book selection
function selecting(book, index, arr){
    let desiredbook = selectbook;
    if (book.bookName == desiredbook) {
        //action for delete
        if (confirm('Are you sure you want to delete this book?')) {
            document.getElementById("BookTable").deleteRow([index+1]);
            //splice method
            arr.splice(index, 1);
        }
    }
}
//read paste
const attributePaste = (selectedBook) => {
    let str = `The ${selectedBook.bookName} is ${selectedBook.color}, in the ${selectedBook.genre} genre, and costs $${selectedBook.cost}.<br>`;
    let area = document.querySelector(".paste");
    area.innerHTML = str;
}
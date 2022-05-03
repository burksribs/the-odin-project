let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book){
    myLibrary.push(book);
    setData();
}

function getBook(title, author, pages, read){
    const book = new Book(title, author, pages,read);
    addBookToLibrary(book);
}

myLibrary.forEach(e =>
    console.log(e))

const addButton = document.getElementById('add');
const addForm = document.querySelector('.add-form');
addButton.addEventListener('click', (e) => {
    addForm.style.display = "block";
})

const cards = document.getElementById('books-content');


const closeForm = document.getElementById('close');
closeForm.addEventListener('click', ()=>{
    addForm.style.display = "none";
})
const addBook = document.querySelector('.add-content button');
addBook.addEventListener('click', (e) => {
    let title = document.getElementById('title-input').value;
    let author = document.getElementById('author-input').value;
    let pages = document.getElementById('pages-input').value;
    let read = document.getElementById('read-input').checked;

    getBook(title,author,pages,read);
    addForm.style.display = "none";
    render();
})

function render(){
    const books = document.querySelectorAll('.card');
    books.forEach(book => cards.removeChild(book));
    myLibrary.forEach((book) => {
        createCard(book)
    })   
}

function createCard(book){
    let card = document.createElement('div');
    card.className = 'card';
    
    let title = document.createElement('p');
    title.textContent = book.title;
    card.appendChild(title);

    let author = document.createElement('p'); 
    author.textContent = book.author;
    card.appendChild(author);

    let pages = document.createElement('p');
    pages.textContent = book.pages;
    card.appendChild(pages);

    let read = document.createElement('button');
    read.textContent = 'READ';
    if (book.read)
        read.className = 'read';
    else
    {
        read.className = 'not-read';
        read.textContent = 'NOT READ'
    }
    read.addEventListener('click', (e) => {
        book.read = !book.read;
        setData();
        render();
    })
    card.appendChild(read);

    let remove = document.createElement('button');
    remove.textContent = 'REMOVE';
    remove.addEventListener('click', (e) => {
        myLibrary.splice(myLibrary.indexOf(book),1);
        setData();
        render();
    })
    card.appendChild(remove);

    cards.appendChild(card);
}

// setting Library to be stored in local storage
function setData() {
    localStorage.setItem(`myLibrary`, JSON.stringify(myLibrary));
}

//pulls books from local storage when page is refreshed
function restore() {
    if(!localStorage.myLibrary) {
        render();
    }else {
        let objects = localStorage.getItem('myLibrary') // gets information from local storage to use in below loop to create DOM/display
        objects = JSON.parse(objects);
        myLibrary = objects;
        render();
    }
}

restore();
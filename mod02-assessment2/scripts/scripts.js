const book1 = {
    title: "Secretly Yours: A Novel",
    author: "Tessa Bailey",
    genre: "Romance",
    pages: 326,
    publicationYear: 2023,
    image: "images/tessa.jpg",
};

const book2 = {
    title: "Icebreaker",
    author: "Hannah Grace",
    genre: "Romance",
    pages: 448,
    publicationYear: 2022,
    image: "images/hannah.jpeg",
};

const book3 = {
    title: "A Million Kisses in Your Lifetime",
    author: "Monica Murphy",
    genre: "Romance",
    pages: 552,
    publicationYear: 2022,
    image: "images/monica.jpeg",
};

const book4 = {
    title: "Twisted Love",
    author: "Ana Huang",
    genre: "Romance",
    pages: 360,
    publicationYear: 2021,
    image: "images/ana.jpeg",
};

const book5 = {
    title: "Love Redesigned",
    author: "Lauren Asher",
    genre: "Romance",
    pages: 528,
    publicationYear: 2023,
    image: "images/lauren.jpeg",
};

function displayBooks() {
    const bookContainer = document.getElementById("bookContainer");

    [book1, book2, book3, book4, book5].forEach(book => {
        const bookTemplate = `
            <div class="book">
                <img src="images/${book.image}" alt="${book.title}">
                <h2>${book.title}</h2>
                <p>Author: ${book.author}</p>
                <p>Genre: ${book.genre}</p>
                <p>Pages: ${book.pages}</p>
                <p>Publication Year: ${book.publicationYear}</p>
            </div>
        `;
        bookContainer.innerHTML += bookTemplate;
    });
}

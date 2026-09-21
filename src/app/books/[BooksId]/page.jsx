import React from 'react';

const BooksID =async ({params}) => {
    const{BooksId}= await params

    const res = await fetch(`http://localhost:5000/books/${BooksId}`)
    const books = await res.json()
    return (
        <div>
            <h2>{books.title}</h2>
            <p>{books.description}</p>
        </div>
    );
};

export default BooksID;
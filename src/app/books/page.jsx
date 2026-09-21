import React from 'react';

const getbooks = async()=>{
    const res = await fetch('http://localhost:5000/books')
    if(!res.ok){
        throw new Error ('Faill the feach books')
    }
    return res.json()

}

const BooksPage = async () => {
    const BooksPage = await getbooks()
    
    return (
        <div>
            <h2>Books:{BooksPage.length}</h2>
        </div>
    );
};

export default BooksPage
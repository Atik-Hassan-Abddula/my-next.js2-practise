import React from 'react';
import BooksCard from '../Components/BooksCard';
import next from 'next';

const getbooks = async()=>{
    const res = await fetch('http://localhost:5000/books',{next:{revalidate:5}})
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
            <div className='grid grid-cols-3 gap-4 '>
                {
                    BooksPage.map(BooksPage=> <BooksCard key={BooksPage.id} BooksPage={BooksPage} ></BooksCard>)
                }
            </div>
        </div>
    );
};

export default BooksPage
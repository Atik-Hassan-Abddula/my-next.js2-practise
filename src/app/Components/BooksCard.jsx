import Link from 'next/link';
import React from 'react';

const BooksCard = ({BooksPage}) => {
    const{id,title,description}= BooksPage
    return (
       <div className="card bg-base-100  shadow-sm">
  <figure>
    {/* <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" /> */}
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>

      <Link href={`/books/${id}`}>
       <button className="btn btn-primary">View Detiles</button>
      
      </Link>
    </div>
  </div>
</div>
    );
};

export default BooksCard;
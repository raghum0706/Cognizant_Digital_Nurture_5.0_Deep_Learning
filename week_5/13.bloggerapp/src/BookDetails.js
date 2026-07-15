import React from "react";

function BookDetails() {

    const books = [
        {
            id:1,
            title:"React Basics",
            author:"Raghu",
            price:450
        },
        {
            id:2,
            title:"Java Programming",
            author:"James",
            price:600
        },
        {
            id:3,
            title:"Python Essentials",
            author:"Guido",
            price:500
        }
    ];

    return(

        <div className="column">

            <h2>Book Details</h2>

            {

                books.map(book=>(
                    <div key={book.id}>

                        <h3>{book.title}</h3>

                        <p>Author : {book.author}</p>

                        <p>Price : ₹{book.price}</p>

                    </div>
                ))

            }

        </div>

    );

}

export default BookDetails;
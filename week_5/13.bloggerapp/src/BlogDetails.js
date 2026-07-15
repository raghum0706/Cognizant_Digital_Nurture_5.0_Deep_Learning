import React from "react";

function BlogDetails(){

    const blogs=[
        {
            id:1,
            title:"React Hooks",
            author:"John"
        },
        {
            id:2,
            title:"ES6 Features",
            author:"David"
        }
    ];

    return(

        <div className="column">

            <h2>Blog Details</h2>

            {

                blogs.map(blog=>(

                    <div key={blog.id}>

                        <h3>{blog.title}</h3>

                        <p>{blog.author}</p>

                    </div>

                ))

            }

        </div>

    );

}

export default BlogDetails;
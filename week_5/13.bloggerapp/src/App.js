import React from "react";
import "./App.css"

import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";

function App(){

    const choice=1;

    let component;

    if(choice===1){

        component=<BookDetails/>

    }
    else if(choice===2){

        component=<BlogDetails/>

    }
    else{

        component=<CourseDetails/>

    }

    const showBooks = true;

    const showCourses = true;

    return(
        <div>
        <h1 style={{alignItems: "center",textAlign: "center"}}>Blogger Application</h1>

        <div className="container" style={{padding:"20px"}}>

            

            {component}

            {showBooks ? <BlogDetails /> : <CourseDetails />}

            {showCourses && <CourseDetails />}

        </div>
        </div>

    );

}

export default App;
import React from "react";

function CourseDetails(){

    const courses=[
        {
            id:1,
            name:"React",
            duration:"45 Days"
        },
        {
            id:2,
            name:"Spring Boot",
            duration:"60 Days"
        },
        {
            id:3,
            name:"Angular",
            duration:"30 Days"
        }
    ];

    return(

        <div className="column">

            <h2>Course Details</h2>

            {

                courses.map(course=>(

                    <div key={course.id}>

                        <h3>{course.name}</h3>

                        <p>{course.duration}</p>

                    </div>

                ))

            }

        </div>

    );

}

export default CourseDetails;
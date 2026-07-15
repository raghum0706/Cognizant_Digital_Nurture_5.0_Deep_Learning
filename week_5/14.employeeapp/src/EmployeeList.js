import React from "react";
import EmployeeCard from "./EmployeeCard";

function EmployeeList() {

    const employees = [

        {
            id:1,
            name:"Raghu",
            designation:"Software Engineer"
        },

        {
            id:2,
            name:"Rahul",
            designation:"UI Developer"
        },

        {
            id:3,
            name:"Priya",
            designation:"QA Engineer"
        }

    ];

    return(
        <div>
            {
                employees.map(emp=>
                    <EmployeeCard
                        key={emp.id}
                        employee={emp}
                    />
                )
            }
        </div>
    );
}

export default EmployeeList;
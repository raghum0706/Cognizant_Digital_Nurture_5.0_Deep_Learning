import React from "react";

function App() {

    const offices = [

        {
            name: "Tech Park",
            rent: 55000,
            address: "Chennai",
            image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600"
        },

        {
            name: "DLF IT Park",
            rent: 75000,
            address: "Hyderabad",
            image: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=600"
        },

        {
            name: "Cyber City",
            rent: 45000,
            address: "Bangalore",
            image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600"
        }

    ];

    return (

        <div style={{ padding: "20px" }}>

            <h1>Office Space Rental App</h1>

            {
              
                offices.map((office, index) => (

                    <div
                        key={index}
                        style={{
                            border: "1px solid gray",
                            padding: "15px",
                            marginBottom: "20px",
                            borderRadius: "10px"
                        }}
                    >

                        <img
                            src={office.image}
                            alt={office.name}
                            width="400"
                        />

                        <h2>{office.name}</h2>

                        <p
                            style={{
                                color:
                                    office.rent < 60000
                                        ? "red"
                                        : "green"
                            }}
                        >
                            <b>Rent:</b> ₹{office.rent}
                        </p>

                        <p>

                            <b>Address:</b> {office.address}

                        </p>

                    </div>

                ))

            }
            
        </div>

    );

}

export default App;
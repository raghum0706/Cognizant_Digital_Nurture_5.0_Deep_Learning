import React from "react";

function User() {

    return (

        <div>

            <h2>Welcome User</h2>

            <h3>You can now book your flight tickets.</h3>
            <div style={{display: "grid",
                justifyItems: "center",
                alignItems: "center"
                }}>
            <table border="1" cellPadding="10">

                <thead>

                    <tr>

                        <th>Flight</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Fare</th>

                    </tr>

                </thead>

                <tbody>

                    <tr>

                        <td>AI101</td>
                        <td>Chennai</td>
                        <td>Delhi</td>
                        <td>₹4500</td>

                    </tr>

                    <tr>

                        <td>AI202</td>
                        <td>Bangalore</td>
                        <td>Mumbai</td>
                        <td>₹5200</td>

                    </tr>

                </tbody>

            </table>
            </div>
            <br></br>

            <button>Book Ticket</button>

        </div>

    );

}

export default User;
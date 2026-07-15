import React from "react";
import CohortDetails from "./CohortDetails";

function App() {

  const cohorts = [
    {
      id: 1,
      name: "INTADMDF10",
      status: "ongoing",
      coach: "Raghu",
      trainer: "Hari"
    },
    {
      id: 2,
      name: "ADMJAVA09",
      status: "completed",
      coach: "NIckesh",
      trainer: "Sameer"
    },
    {
      id: 3,
      name: "REACT11",
      status: "ongoing",
      coach: "Mohan",
      trainer: "Deric"
    },
    {
      id: 4,
      name: "SPRING08",
      status: "completed",
      coach: "Deric",
      trainer: "Anu"
    }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Cognizant Cohort Dashboard</h1>

      {
        cohorts.map((cohort) => (
          <CohortDetails
            key={cohort.id}
            cohort={cohort}
          />
        ))
      }

    </div>
  );
}

export default App;
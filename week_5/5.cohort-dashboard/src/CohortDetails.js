import React from "react";
import styles from "./CohortDetails.module.css";

function CohortDetails({ cohort }) {

    return (

        <div className={styles.box} style={{
                    backgroundColor:
                        cohort.status === "ongoing"
                            ? "green"
                            : "blue"
                }}>

            <h3>
                {cohort.name}
            </h3>
            <hr></hr>
            <dl>

                <dt>Status:</dt>
                <dd>{cohort.status}</dd>

                <dt>Coach:</dt>
                <dd>{cohort.coach}</dd>

                <dt>Trainer:</dt>
                <dd>{cohort.trainer}</dd>

            </dl>

        </div>

    );

}

export default CohortDetails;
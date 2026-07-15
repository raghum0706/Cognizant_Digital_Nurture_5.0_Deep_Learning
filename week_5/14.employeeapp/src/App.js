import React, { useState } from "react";

import EmployeeList from "./EmployeeList";
import ThemeContext from "./ThemeContext";

import "./App.css";

function App(){
    const [theme,setTheme]=useState("light");
    return(
        <ThemeContext.Provider value={theme}>
            <div className="App">
                <h1>Employee Management</h1>
                <button onClick={()=> setTheme(
                            theme==="light" ? "dark" : "light"
                        )}> Switch Theme
                </button>
                <EmployeeList/>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
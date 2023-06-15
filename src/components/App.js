
import React from "react";
import './../styles/App.css';
import Prop from "./Prop";

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <Prop 
                header = "Welcome to my website"
                children = "This is the content of my website."
                footer = "&#169; 2023 My Website. All rights reserved."
            />
    </div>
  )
}

export default App

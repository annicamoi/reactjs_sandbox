import React from "react";
import Box from "./Box";

const Main = () => {
    return ( 
        <main>
        <div>
        <Box name = "Annika"
        age = "32"
        title = "CEO" />
        <Box name = "Kati"
        age = "42"
        title = "designer" />
        <Box name = "Sammy"
        age = "35"
        title = "developer" />
        </div> 
        </main>
    );
};

export default Main;
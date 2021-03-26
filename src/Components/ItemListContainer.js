import React, { useState } from "react";
import ItemCount from "./ItemCount"

 
const Greeting = () => {
    return <> 
<ItemCount int ="0" min= "0"
max="10" onAdd={() =>console.log()}/>
</>
};

export default Greeting ;
 
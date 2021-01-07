import  { useState, useEffect } from "react";

async function fetchPicture(date, setPicture) { 
    let response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`
    );
    let json  =  await response.json() 
  
    setPicture(json);
}
function usePicture(date) {
    let [picture, setPicture] = useState();
    useEffect(() => {
        fetchPicture(date, setPicture);
    }, [date]);
    return picture ;
}
export default usePicture;
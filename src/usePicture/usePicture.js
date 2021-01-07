import { useState, useEffect } from "react";
import useFetch from "./useFetch";

function usePicture(date) {
    let { data, loading, error } = useFetch(
        `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`
    );
    return { data, loading, error };
}
export default usePicture;

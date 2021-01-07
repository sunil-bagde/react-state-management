import  { useState, useEffect } from "react";

function useFetch(url) { 
    let [data, setData] = useState({ loading: true, data: {}, error: null });

    async function request(url) {
        try {
            let response = await fetch(url);
            let json = await response.json(); 
            setData({
                loading: false,
                data: json,
                error: null,
            });
        } catch (error) {
            setData({
                loading: false,
                data: {},
                error,
            });
        }
    }

    useEffect(() => {
        request(url);
    }, [url]); 
    return data
}

export default useFetch;

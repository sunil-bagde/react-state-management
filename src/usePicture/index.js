import React, { useState } from "react";
import usePicture from "./usePicture";

let UsePictureApp = () => {
    const [date, setDate] = useState("2020-05-05");
 
    let { data: picture, loading } = usePicture(date);
 
    if (loading) {
        return <p>Loading...</p>;
    }
    let { title, explanation, hdurl } = picture;
    return (
        <div style={{ padding: 20, margin: 20 }}>
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            <h2>NASA picture of the day</h2>

            <h2>{title}</h2>
            <p>{explanation}</p>
            <img width={1200} height={1000} src={hdurl} alt={title} />
        </div>
    );
};

export default UsePictureApp;

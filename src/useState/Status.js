import React,{useState} from 'react'

let Status = ({onEnter}) => {
  const [message, setMessage] = useState("");
    return (
        <div>
            <input
            onChange={(e) => setMessage(e.target.value) }
            onKeyUp={(e) => {
              if(e.keyCode === 13) {
                onEnter(message);
                setMessage("");
              }
            }}
            type="text" name="message" id="message" value={message}  />
        </div>
    )
}

export default Status

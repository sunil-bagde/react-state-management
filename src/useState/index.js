import React , {useState} from 'react';
import Status from './Status'

function AppMessage() {
  const [messages, setMessages] = useState(["Message-1","Message-2"])

  return <div>
  <Status  onEnter={(message) => setMessages([message,...messages]) } />
    <ul>
     {messages.map((msg) =>  {
         return <li key={msg}>{msg}</li>
      })}
    </ul>
  </div>
}



export default AppMessage

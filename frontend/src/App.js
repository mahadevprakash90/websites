import React, { useEffect, useState } from "react";
import API from "./api";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    API.getMessages().then(setMessages).catch(console.error);
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>📬 Messages from Django API</h1>
      <ul>
        {messages.map((msg, i) => (
          <li key={i}>{msg}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

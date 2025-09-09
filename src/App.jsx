import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(`/api/hello`) // запрос на backend
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React + Vite + Express</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
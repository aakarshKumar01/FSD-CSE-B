import React, { useState } from "react";

const Work = () => {

  const [text, setText] = useState("");
  const [output, setOutput] = useState("");

  const handleRead = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8000/read");
      console.log(res)
      const data = await res.json();
      console.log(data)
      alert(data.content);
    } catch (err) {
      console.error(err);
      setOutput("Error reading file");
    }
  };

  const handleWrite = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8000/write", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });

      const data = await res.json();
      setOutput(data.message);
    } catch (err) {
      console.error(err);
      setOutput("Error writing file");
    }
  };

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px'}}>
      <form>
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text"
        />

        <br /><br />

        <button type="button" onClick={handleRead}>Read</button>
        <button type="button" onClick={handleWrite}>Write</button>
      </form>

      <h3>{output}</h3>
    </div>
  );
};

export default Work;

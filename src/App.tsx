import { useState, useEffect } from "react";
// import { invoke } from "@tauri-apps/api/tauri";
import { readText } from "@tauri-apps/api/clipboard";
import { appWindow } from "@tauri-apps/api/window";
// import { emit, listen } from "@tauri-apps/api/event";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  useEffect(() => {
    appWindow.listen("tauri://focus", async (e) => {
      console.log("focus e", e);
      const clipboardText = await readText();
      if (clipboardText) {
        setText(clipboardText);
      }
    });
  }, []);

  return (
    <div className="container">
      <h1>Here is the text from your clipboard!</h1>
      <p>{text}</p>
    </div>
  );
}

export default App;

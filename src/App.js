import "./App.css";
import React, { useState } from "react";
import Field from "./components/field.js";
import Languages from "./components/languages.js";
import Translate from "./components/translate.js";

const App = () => {
  const [language, setLanguage] = useState("fr");
  const [text, setText] = useState("");

  return (
    <div className="app-container">
      <Field label="Enter English" onChange={setText} value={text} />
      <Languages language={language} onLanguageChange={setLanguage} />
      <hr />
      <Translate text={text} language={language} />
    </div>
  );
};

export default App;

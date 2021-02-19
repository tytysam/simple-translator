import React, { useEffect, useState } from "react";
import axios from "axios";

const doTranslation = async (input, languageCode, cancelToken) => {
  try {
    const { data } = await axios.post(
      "https://translation.googleapis.com/language/translate/v2?key=AIzaSyBjDN8mhP2m81QjoAJ1AKihShRnFgoCvNM",
      {
        q: input,
        target: languageCode,
      },
      { cancelToken: cancelToken.token }
    );

    return data.data.translations[0].translatedText;
  } catch (err) {
    return "";
  }
};

const Translate = ({ language, text }) => {
  const [translated, setTranslated] = useState("test");

  useEffect(() => {
    if (!text) {
      return;
    }

    const cancelToken = axios.CancelToken.source();

    doTranslation(text, language, cancelToken).then(setTranslated);

    return () => {
      try {
        cancelToken.cancel();
      } catch (err) {}
    };
  }, [text, language]);

  return (
    <div>
      <label className="label">Output</label>
      <h1 className="title">{translated}</h1>
    </div>
  );
};

export default Translate;

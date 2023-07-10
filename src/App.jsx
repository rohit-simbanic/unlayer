import React, { useRef } from "react";
import "./App.css";

import EmailEditor from "react-email-editor";
import { unlayerSampleJSON } from "./unlayerSampleJSON";

const emailJSON = unlayerSampleJSON;

function App() {
  const emailEditorRef = useRef({ editor: {} });

  const onDesignLoad = (data) => {
    console.log("onDesignLoad", data);
    console.log(emailEditorRef.current);
  };

  const onLoad = () => {
    console.log("ref: ", emailEditorRef.current);
    emailEditorRef.current.editor.loadDesign(emailJSON);

    // This autosaves design after every change
  };

  const saveDesign = () => {
    emailEditorRef.current.editor.saveDesign((design) => {
      design.body.values["preheaderText"] = "Update later";
      console.log("saveDesign", design);
    });
  };

  return (
    <EmailEditor
      ref={emailEditorRef}
      onLoad={onLoad}
      projectId={144031}
      // projectId={1071}
    />
  );
}

export default App;

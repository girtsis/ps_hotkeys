import './App.css';
import React, {useEffect, useState, useCallback, useRef} from "react"
import { createReactEditorJS } from 'react-editor-js'
import { EDITOR_JS_TOOLS } from "./editorTools";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from './Components/Admin';
import ViewGuide from './Components/ViewGuide';
const ReactEditorJS = createReactEditorJS()

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Admin />} />
      <Route path="/view" element={<ViewGuide />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;

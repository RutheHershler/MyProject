import './App.css';
import React, { useState, useEffect, Suspense } from "react";
import ResponsiveAppBar from './components/TopNav';
import InputFileUpload from "./components/try"
const App = () => {
  return (
    <>
      <InputFileUpload />
      <ResponsiveAppBar />
    </>

  )
}

export default App;


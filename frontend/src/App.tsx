import "./styles/main.css";
import Layout from "./components/Layout";
import JokesComponent from "./components/Jokes";
import React, { useState } from "react";
import { apiJokesAxios } from "./axios/jokes/api-public";
import CreateJoke from "./components/CreateJoke";
function App() {
  return (
    <>
      <Layout>
        <>
          <CreateJoke />
          <JokesComponent />
        </>
      </Layout>
    </>
  );
}

export default App;

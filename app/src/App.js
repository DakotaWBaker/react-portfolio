import React from "react";
import Navbar from "./Navbar";
import Splash from "./Splash";
import { useState } from "react";
import Blog from "./Blog";

export default function App() {
  const [page, setPage] = useState("Home");
  if (page === "Home") {
    return (
      <>
        <Navbar setPage={setPage} page={page} />
        <Splash />
      </>
    );
  } else if (page === "Blog") {
    return (
      <>
        <Blog />
      </>
    );
  }
}

import React from "react";

import MainHeader from "../Components/Header/MainHeader";


export default function About() {
  return (
    <div>
<MainHeader/>
      
      <h3>About Us</h3>
      <p>
        A tiny VS Code extension made up of a few commands that generate and
        insert lorem ipsum text into a text file. To use the extension, open the
        command palette (F1 or cmd/ctrl+shift+p, type "lorem ipsum" and select
        to insert either a line or paragraph.
      </p>
    </div>
  );
}

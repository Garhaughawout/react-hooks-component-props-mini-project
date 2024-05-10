import React from "react";

export default function About({image, about}) {
  const imageplaceholder = "https://via.placeholder.com/215";
  
    return (
    <aside>
      <img src={image || imageplaceholder} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}
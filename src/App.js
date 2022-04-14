import "./App.css";
import React from "react";
import { NftGallery } from "react-nft-gallery";

function App() {
  return (
    <div
      className="App"
      sx={{ overflow: "hidden", backgroundColor: "white !important" }}
    >
      <NftGallery
        ownerAddress="z02.eth"
        openseaApiKey="efee489e792341bd80386e4aa45ee32b"
      />
    </div>
  );
}

export default App;

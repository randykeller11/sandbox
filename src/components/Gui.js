import React, { useState } from "react";
import useModelStore from "../stores/useModelStore";

function Gui() {
  const modelStore = useModelStore();
  const [gltf, setGltf] = useState("");
  return (
    <div className="gui">
      <input
        type="text"
        value={gltf}
        onChange={(e) => {
          setGltf(e.target.value);
        }}
      />
      <button
        onClick={() => {
          modelStore.add(gltf);
          setGltf("");
        }}
      >
        Add Model
      </button>
    </div>
  );
}

export default Gui;

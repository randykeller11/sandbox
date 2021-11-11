import "./App.css";
import React, { Suspense, useEffect } from "react";
import {
  useGLTF,
  useProgress,
  Html,
  OrbitControls,
  Sky,
} from "@react-three/drei";

import { Canvas } from "@react-three/fiber";

import Model from "./components/Model";
import Gui from "./components/Gui";
import useModelStore from "./stores/useModelStore";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

function App() {
  const modelStore = useModelStore();

  return (
    <div className="canvas">
      <Suspense fallback={null}>
        <Canvas camera={{ position: [0, 4, 6] }}>
          <Suspense fallback={<Loader />}>
            <Sky />
            <OrbitControls />
            <ambientLight intensity={0.9} />

            {Object.keys(modelStore.models).length > 0 &&
              Object.keys(modelStore.models).map((model, i) => (
                <Model index={i} />
              ))}
          </Suspense>
        </Canvas>
      </Suspense>
      <Gui />
    </div>
  );
}

export default App;

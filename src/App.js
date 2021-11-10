import "./App.css";
import React, { Suspense, useState } from "react";
import {
  useGLTF,
  useProgress,
  Html,
  OrbitControls,
  Sky,
} from "@react-three/drei";

import { Canvas } from "@react-three/fiber";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}
function Model(state, ...props) {
  const { scene } = useGLTF(state.location);

  return <primitive object={scene} scale={state.scale} {...props} />;
}

function App() {
  const [test, setTest] = useState(0);
  return (
    <div className="canvas">
      <Suspense fallback={null}>
        <Canvas camera={{ position: [0, 4, 6] }}>
          <Suspense fallback={<Loader />}>
            <Sky />
            <OrbitControls />
            <ambientLight intensity={0.9} />

            <Model
              location={
                "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/druid/model.gltf"
              }
              scale={[2, 2, 2]}
            />
          </Suspense>
        </Canvas>
      </Suspense>
      <div className="gui">
        <h1
          onClick={() => {
            setTest(test - 1);
          }}
        >
          ◀️
        </h1>
        <h1>{test}</h1>
        <h1
          onClick={() => {
            setTest(test + 1);
          }}
        >
          ▶️
        </h1>
      </div>
    </div>
  );
}

export default App;

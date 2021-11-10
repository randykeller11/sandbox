import React from "react";
import useModelStore from "../stores/useModelStore";
import { useGLTF } from "@react-three/drei";
function Model(state, ...props) {
  const modelStore = useModelStore();
  let storeTarget = modelStore.models.filter(
    (model) => model.index === state.index
  );
  console.log(storeTarget);
  const { scene } = useGLTF(storeTarget[0].location);

  return (
    <primitive
      object={scene}
      scale={storeTarget[0].scale}
      rotation={storeTarget[0].rot}
      position={storeTarget[0].pos}
      {...props}
    />
  );
}

export default Model;

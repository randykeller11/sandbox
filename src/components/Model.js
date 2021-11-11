import React, { useRef, useEffect, useState } from "react";
import useModelStore from "../stores/useModelStore";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
function Model(state, ...props) {
  const modelStore = useModelStore();
  let storeTarget = modelStore.models[state.index];
  const { scene } = useGLTF(storeTarget.url);
  const modelRef = useRef();
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    isFirstRender && setIsFirstRender(false);
    if (!isFirstRender) {
      modelRef.current.position.x = storeTarget.position.x;
      modelRef.current.position.y = storeTarget.position.y;
      modelRef.current.position.z = storeTarget.position.z;
      modelRef.current.rotation.x = storeTarget.rotation.x;
      modelRef.current.rotation.y = storeTarget.rotation.y;
      modelRef.current.rotation.z = storeTarget.rotation.z;
      modelRef.current.scale.x = storeTarget.scale.x;
      modelRef.current.scale.y = storeTarget.scale.y;
      modelRef.current.scale.z = storeTarget.scale.z;
    }
  }, [storeTarget]);
  //   useFrame(() => {
  //     isFirstRender && setIsFirstRender(false);
  //     if (!isFirstRender) {
  //       modelRef.current.position.x = storeTarget.position.x;
  //       modelRef.current.position.y = storeTarget.position.y;
  //       modelRef.current.position.z = storeTarget.position.z;
  //       modelRef.current.rotation.x = storeTarget.rotation.x;
  //       modelRef.current.rotation.y = storeTarget.rotation.y;
  //       modelRef.current.rotation.z = storeTarget.rotation.z;
  //       modelRef.current.scale.x = storeTarget.scale.x;
  //       modelRef.current.scale.y = storeTarget.scale.y;
  //       modelRef.current.scale.z = storeTarget.scale.z;
  //     }
  //   });

  return <primitive object={scene} ref={modelRef} {...props} />;
}

export default Model;

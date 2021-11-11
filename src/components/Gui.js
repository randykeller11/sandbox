import React, { useState, useEffect } from "react";
import useModelStore from "../stores/useModelStore";
import "./Gui.css";

function Gui() {
  const modelStore = useModelStore();
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [editType, setEditType] = useState("pos");
  const [componentState, setComponentState] = useState(0);
  const [localValue, setLocalValue] = useState({
    x: 3,
    y: 0,
    z: 0,
  });
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    isFirstRender && setIsFirstRender(false);
    if (!isFirstRender) {
      modelStore.edit(editType, localValue);
    }
  }, [localValue]);

  return (
    <div className="gui">
      {componentState === 0 && (
        <div className="mainMenu">
          <div className="mainMenu__top">
            <h3>🔽</h3>
            <button
              onClick={() => {
                setComponentState(1);
              }}
            >
              add model
            </button>
          </div>
          <div className="mainMenu__middle">
            <label for="model">Choose Model</label>
            <select
              id="models"
              name="models"
              onChange={(e) => {
                modelStore.setTarget(e.target.value);
                let newTarget = modelStore.models[e.target.value][editType];
                console.log(newTarget);
                setLocalValue({
                  x: newTarget.x,
                  y: newTarget.y,
                  z: newTarget.z,
                });
              }}
            >
              {Object.keys(modelStore.models).map((model) => (
                <option value={model}>{modelStore.models[model].name}</option>
              ))}
            </select>
          </div>
          <div className="mainMenu__editSelect">
            <select
              id="editType"
              name="editType"
              onChange={(e) => {
                setEditType(e.target.value);
                let newTarget =
                  modelStore.models[modelStore.target][e.target.value];
                console.log(newTarget);
                setLocalValue({
                  x: newTarget.x,
                  y: newTarget.y,
                  z: newTarget.z,
                });
              }}
            >
              <option value="pos">Position</option>
              <option value="rot">Rotation</option>

              <option value="scale">Scale</option>
            </select>
          </div>
          {editType != "scale" && (
            <>
              <div className="mainMenu__slider">
                <h3>X</h3>
                <input
                  value={localValue.x}
                  max={50}
                  min={-50}
                  type="range"
                  onChange={(e) => {
                    let target = modelStore.models[modelStore.target];
                    setLocalValue({ ...localValue, ["x"]: e.target.value });
                  }}
                />
              </div>
              <div className="mainMenu__slider">
                <h3>Y</h3>
                <input
                  value={localValue.y}
                  max={50}
                  min={-50}
                  type="range"
                  onChange={(e) => {
                    let target = modelStore.models[modelStore.target];
                    setLocalValue({ ...localValue, ["y"]: e.target.value });
                  }}
                />
              </div>
              <div className="mainMenu__slider">
                <h3>Z</h3>
                <input
                  value={localValue.z}
                  max={50}
                  min={-50}
                  type="range"
                  onChange={(e) => {
                    let target = modelStore.models[modelStore.target];
                    setLocalValue({ ...localValue, ["z"]: e.target.value });
                  }}
                />
              </div>
            </>
          )}
          {editType === "scale" && (
            <>
              <div className="mainMenu__slider">
                <h3>X</h3>
                <input
                  value={localValue.x}
                  max={10}
                  min={0}
                  type="range"
                  onChange={(e) => {
                    let target = modelStore.models[modelStore.target];
                    setLocalValue({ ...localValue, ["x"]: e.target.value });
                  }}
                />
              </div>
              <div className="mainMenu__slider">
                <h3>Y</h3>
                <input
                  value={localValue.y}
                  max={10}
                  min={0}
                  type="range"
                  onChange={(e) => {
                    let target = modelStore.models[modelStore.target];
                    setLocalValue({ ...localValue, ["y"]: e.target.value });
                  }}
                />
              </div>
              <div className="mainMenu__slider">
                <h3>Z</h3>
                <input
                  value={localValue.z}
                  max={10}
                  min={0}
                  type="range"
                  onChange={(e) => {
                    let target = modelStore.models[modelStore.target];
                    setLocalValue({ ...localValue, ["z"]: e.target.value });
                  }}
                />
              </div>
            </>
          )}
        </div>
      )}
      {componentState === 1 && (
        <div className="addModel">
          <h3>Name</h3>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <h3>URL</h3>
          <input
            type="text"
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
            }}
          />

          <button
            onClick={() => {
              modelStore.add(url, name);
              setUrl("");
              setName("");
              setComponentState(0);
            }}
          >
            Add Model
          </button>
        </div>
      )}
    </div>
  );
}

export default Gui;

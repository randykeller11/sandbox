import create from "zustand";

let useModelStore = create((set) => ({
  target: 0,
  total: 1,
  models: {
    0: {
      name: "Gandalf",
      index: 0,
      url:
        "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/druid/model.gltf",
      pos: { x: 3, y: 0, z: 0 },
      rot: { x: 0, y: 0, z: 0 },
      scale: { x: 1, y: 1, z: 1 },
    },
  },
  setTarget: (index) =>
    set((state) => ({
      target: Number(index),
    })),
  add: (url, name) =>
    set((state) => ({
      total: state.total + 1,
      models: {
        ...state.models,
        [state.total]: {
          name: name,

          url: url,
          pos: { x: 0, y: 0, z: 0 },
          rot: { x: 0, y: 0, z: 0 },
          scale: { x: 1, y: 1, z: 1 },
        },
      },
    })),
  edit: (type, axis, value) =>
    set((state) => ({
      models: {
        ...state.models,
        [state.target]: { ...state.models[state.target][type], [axis]: value },
      },
    })),
  delete: (index) =>
    set((state) => ({
      models: state.models.filter((model) => index != model.index),
    })),
  refresh: () =>
    set((state) => ({
      needsRefresh: false,
    })),
}));

export default useModelStore;

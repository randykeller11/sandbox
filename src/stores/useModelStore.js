import create from "zustand";

let useModelStore = create((set) => ({
  needsRefresh: false,
  total: 1,
  models: [
    {
      index: 0,
      location:
        "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/druid/model.gltf",
      pos: [3, 0, 0],
      rot: [0, 0, 0],
      scale: [1, 1, 1],
    },
  ],
  add: (newModel) =>
    set((state) => ({
      needsRefresh: true,
      total: state.total + 1,
      models: [
        ...state.models,
        {
          index: state.total,
          location: newModel,
          pos: [0, 0, 0],
          rot: [0, 0, 0],
          scale: [1, 1, 1],
        },
      ],
    })),
  edit: (edit) =>
    set((state) => ({
      models: state.models
        .filter((model) => edit.index != model.index)
        .push({
          index: edit.index,
          location: edit.location,
          pos: edit.pos,
          rot: edit.rot,
          scale: edit.scale,
        }),
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

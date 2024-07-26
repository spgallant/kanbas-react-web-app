import { createSlice } from "@reduxjs/toolkit";
// import { modules } from "../../Database"; //remove db reference, since moved to server

// const initialState = {
//   modules: modules,
// };


//updated state variable for empty modules since now populting modules
//   retrieved from server with findModulesForCourse fn
const initialState = {
  modules: [],
};


const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {


    //add new setModules fn to populate the modules state variable when module 
    //  info arrives from server
    setModules: (state, action) => {
      state.modules = action.payload;
    },


    addModule: (state, { payload: module }) => {
      const newModule: any = {
        // _id: new Date().getTime().toString(),
        _id: module._id,
        lessons: [],
        name: module.name,
        course: module.course,
      };
      // console.log("Modules in reducer", state.modules);
      // console.log("Added Module in reducer", newModule);
      state.modules = [...state.modules, newModule] as any;
    },

    deleteModule: (state, { payload: moduleId }) => {
      state.modules = state.modules.filter(
        (m: any) => m._id !== moduleId);
    },

    updateModule: (state, { payload: module }) => {
      state.modules = state.modules.map((m: any) =>
        m._id === module._id ? module : m
      ) as any;

    },
    editModule: (state, { payload: moduleId }) => {
      state.modules = state.modules.map((m: any) =>
        m._id === moduleId ? { ...m, editing: true } : m
      ) as any;
    },
    
  },
});



export const { addModule, deleteModule, updateModule, editModule, setModules } =
  modulesSlice.actions;

export default modulesSlice.reducer;
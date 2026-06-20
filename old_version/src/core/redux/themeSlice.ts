import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    useLightTheme: true,
  },
  reducers: {
    setLightTheme: (state,action:{type:string,payload:boolean}) => {
        state.useLightTheme=action.payload;
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { setLightTheme } = themeSlice.actions

export default themeSlice.reducer
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    trainer: {}
};
export const trainerSlice = createSlice({
    name: 'trainer',
    initialState,
    reducers: {
        setTrainer: (state, action) => {
            console.log(action.payload, 'payy');
            state.trainer = { ...action.payload };
        },
        clearTrainer: (state) => {
            state.trainer = {};
        }
    }
});
export const { setTrainer, clearTrainer } = trainerSlice.actions;
export default trainerSlice.reducer;

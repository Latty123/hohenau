import { createSlice } from '@reduxjs/toolkit';

const options = { prefix: 'app' };

const initialState = {
    theme: undefined,
    selectedStory: undefined,
    social: undefined,
    language: 'russian'
};

const appSlice = createSlice({
    name: options.prefix,
    initialState,
    reducers: {
        setTheme: (state, action) => {
            state.theme = action.payload;
        },
        setSelectedStory: (state, action) => {
            state.selectedStory = action.payload;
        },
        setSocial: (state, action) => {
            state.social = action.payload;
        },
        setLanguage: (state, action) => {
            state.language = action.payload;
        }
    },
});

export const { actions: appSliceActions, reducer: appSliceReducer } = appSlice;
export const { setTheme, setSelectedStory, setSocial, setLanguage } = appSliceActions;
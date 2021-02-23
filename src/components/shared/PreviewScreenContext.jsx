import React, { useReducer, createContext, useCallback } from 'react';

export const PreviewScreenContext = createContext();


const CHANGE_SCREEN_PREVIEW = "CHANGE_SCREEN_PREVIEW";
const TOGGLE_FORM_PREVIEW = "TOGGLE_FORM_PREVIEW";

const initialState = {
    'preview': 'desktop',
    'formToggled': false
}

export const PreviewScreenProvider = ({ children }) => {
    const reducer = (state, action) => {

        if (action.type === CHANGE_SCREEN_PREVIEW) {
            return { preview: action.payload, ...state }
        }

        if (action.type === TOGGLE_FORM_PREVIEW) {
            return { formToggled: action.payload, ...state,  }
        }

        return state;
    }

    const [previewState, dispatch] = useReducer(reducer, initialState);

    const changeScreenPreview = useCallback((previewScreen) => {
        dispatch({ type: CHANGE_SCREEN_PREVIEW, payload: previewScreen })
    }, [dispatch]);

    const toggleFormPreview = useCallback((togglePreview) => {
        dispatch({ type: TOGGLE_FORM_PREVIEW, payload: togglePreview })
    }, [dispatch]);


    const value = { previewState, changeScreenPreview, toggleFormPreview }
    return (
        <PreviewScreenContext.Provider value={value}>{children}</PreviewScreenContext.Provider>
    );
};
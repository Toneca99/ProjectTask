import React, { useReducer, createContext, useCallback } from 'react';

export const PreviewScreenContext = createContext();


const CHANGE_SCREEN_PREVIEW = "CHANGE_SCREEN_PREVIEW";
const EXPAND_FORM_PREVIEW = "EXPAND_FORM_PREVIEW";
const CLOSE_FORM_PREVIEW = "CLOSE_FORM_PREVIEW";
const SELECT_FORM = "SELECT_FORM";

const initialState = {
    preview: 'desktop',
    formExpanded: false,
    selectedForm: {form: null, src: ''}
}

export const PreviewScreenProvider = ({ children }) => {
    const reducer = (state, action) => {

        if (action.type === CHANGE_SCREEN_PREVIEW) {
            return {...state, preview: action.payload }
        }

        if (action.type === EXPAND_FORM_PREVIEW) {
            return {...state, formExpanded: true }
        }

        if (action.type === CLOSE_FORM_PREVIEW) {
            return {...state, formExpanded: false }
        }

        if (action.type === SELECT_FORM) {
            return {...state, selectedForm: {form: action.payload.form, src: action.payload.src} }
        }


        return state;
    }

    const [previewState, dispatch] = useReducer(reducer, initialState);

    const changeScreenPreview = useCallback((previewScreen) => {
        dispatch({ type: CHANGE_SCREEN_PREVIEW, payload: previewScreen })
    }, [dispatch])

    const expandFormPreview = useCallback(() => {
        dispatch({ type: EXPAND_FORM_PREVIEW })
    }, [dispatch])

    const closeFormPreview = useCallback(() => {
        dispatch({ type: CLOSE_FORM_PREVIEW })
    }, [dispatch])

    const selectForm = useCallback(({form , src}) => {
        dispatch({ type: SELECT_FORM, payload: {form: form, src: src}})
    })

    const value = { previewState, changeScreenPreview, expandFormPreview, closeFormPreview, selectForm }
    return (
        <PreviewScreenContext.Provider value={value}>{children}</PreviewScreenContext.Provider>
    );
};
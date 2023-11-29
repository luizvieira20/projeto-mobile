import { createSlice } from "@reduxjs/toolkit";

const initialValues = {
    docNome: null,
    docDados: null,
    docId: null,
    docImagem: null,
    docData: null,
}

export const pesquisaSlice = createSlice({
    name: 'pesquisa',
    initialState: initialValues,
    reducers: {
        reducerSetPesquisa: (state, action) => {
            state.docNome = action.payload.docNome
            state.docDados = action.payload.docDados
            state.docId = action.payload.docId
            state.docImagem = action.payload.docImagem
            state.docData = action.payload.docData
        }
    }

})

export const {reducerSetPesquisa} = pesquisaSlice.actions
export default pesquisaSlice.reducer
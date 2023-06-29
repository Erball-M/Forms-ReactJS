import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const sendData = createAsyncThunk('forms/sendData',
    async (_, { getState }) => {
        try {
            const { forms } = getState()
            const values = JSON.stringify(forms.initialValues)

            const response = await axios.post('URL', values)
            return response
        } catch (err) {
            console.log(err.message)
        }
    })

const initialState = {
    initialValues: {
        Main: {
            fieldPhoneNumber: '',
            fieldEmail: '',
        },
        Step1: {
            fieldNickname: '',
            fieldName: '',
            fieldSurname: '',
            fieldSex: '',
        },
        Step2: {
            fieldAdvantages: ['', '', ''],
            fieldCheckboxes: [],
            fieldRadio: '',
        },
        Step3: {
            fieldAbout: ''
        },
    },
    modalIsOpen: false,
    sendingSuccess: false,
    allowedPages: ['/'],
}

const formsSlice = createSlice({
    name: 'forms',
    initialState,
    reducers: {
        addAllowedPage: (state, action) => {
            state.allowedPages.push(action.payload)
        },
        setValues: (state, action) => {
            const { page, values } = action.payload
            if (!action.payload || typeof action !== 'object') return
            state.initialValues[page] = JSON.parse(JSON.stringify(values))
        },
        reset: (state) => {
            state.initialValues = {
                Main: {
                    fieldPhoneNumber: '',
                    fieldEmail: '',
                },
                Step1: {
                    fieldNickname: '',
                    fieldName: '',
                    fieldSurname: '',
                    fieldSex: '',
                },
                Step2: {
                    fieldAdvantages: ['', '', ''],
                    fieldCheckboxes: [],
                    fieldRadio: '',
                },
                Step3: {
                    fieldAbout: ''
                },
            }
            state.allowedPages = ['/']
        },
        toggleModal: (state, action) => {
            if (typeof action.payload === 'boolean') {
                state.modalIsOpen = action.payload
            } else {
                state.modalIsOpen = !state.modalIsOpen
            }
        },
    },
    extraReducers: {
        [sendData.pending]: () => { },
        [sendData.fulfilled]: (state, action) => {
            const response = action.payload
            if (response && response.data) {
                state.sendingSuccess = true
                state.modalIsOpen = true
            } else {
                state.sendingSuccess = false
                state.modalIsOpen = true
            }
        },
        [sendData.rejected]: (state, action) => {
            state.sendingSuccess = false
            state.modalIsOpen = true
            console.log(action.error.message)
        },
    }
})

export const {
    addAllowedPage,
    setValues,
    reset,
    toggleModal
} = formsSlice.actions
export default formsSlice.reducer
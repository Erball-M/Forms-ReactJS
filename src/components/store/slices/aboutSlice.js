import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    about: {
        name: 'Эрбол',
        surname: 'Мамбетжанов',
        contacts: [
            { href: 'Telegram', title: 'Telegram' },
            { href: 'GitHub', title: 'GitHub' },
            { href: 'LinkedIn', title: 'LinkedIn' }
        ]
    }
}

const aboutSlice = createSlice({
    name: 'about',
    initialState,
    reducers: {}
})

export const { } = aboutSlice.actions
export default aboutSlice.reducer
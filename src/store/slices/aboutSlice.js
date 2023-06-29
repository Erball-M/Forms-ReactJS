import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: 'Erball',
    surname: 'M',
    contacts: [
        { title: 'Telegram', href: '.' },
        { title: 'GitHub', href: '.' },
        { title: 'LinkedIn', href: '.' },
    ]
}

const about = createSlice({
    name: 'about',
    initialState,
    reducers: {}
})

export const { } = about.actions
export default about.reducer
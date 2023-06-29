import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: 'Erball',
    surname: 'M',
    contacts: [
        { title: 'Telegram', href: 'http://t.me/Erball' },
        { title: 'GitHub', href: 'https://github.com/Erball-M' },
        // { title: 'LinkedIn', href: 'https://www.linkedin.com/in/erbol-mambetzhanov-80ab58263/' },
    ]
}

const about = createSlice({
    name: 'about',
    initialState,
})

export default about
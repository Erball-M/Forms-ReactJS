import React from 'react'
import InputMask from 'react-input-mask'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { About, Button, TextField } from '../components/components'
import { setValues, addAllowedPage } from '../store/slices/formsSlice'
import { usePageFormik } from '../hooks/usePageFormik'
import Utils from '../utils/utils'

const MainPage = () => {
    const navigator = useNavigate()
    const dispatch = useDispatch()
    const formik = usePageFormik('Main')

    const handleNext = async () => {
        const isValid = await Utils.validateForm(formik)

        if (isValid) {
            dispatch(setValues({ page: 'Main', values: formik.values }))
            dispatch(addAllowedPage('/step/1'))
            navigator('/step/1')
        }
    }

    return (
        <>
            <About />
            <hr className='hr' />
            <form className='form' onSubmit={formik.handleSubmit}>
                <div className="form__content">
                    <InputMask {...formik.getFieldProps('fieldPhoneNumber')} mask="+7 (999) 999-99-99" maskChar="_">
                        {() => (
                            <TextField
                                id="fieldPhoneNumber"
                                type='tel'
                                value={formik.values.fieldPhoneNumber}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder="+7 (999) 999-99-99"
                                variant="pattern"
                                className="form__input"
                                error={formik.touched.fieldPhoneNumber && formik.errors.fieldPhoneNumber}
                            />
                        )}
                    </InputMask>
                    <TextField
                        id='fieldEmail'
                        value={formik.values['fieldEmail']}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder='mambetzhanov.erbol@gmail.com'
                        variant='pattern'
                        className='form__input'
                        error={formik.touched.fieldEmail && formik.errors.fieldEmail}
                    />
                </div>
                <div className='btns'>
                    <Button type='submit' onClick={handleNext}>Начать</Button>
                </div>
            </form>
        </>
    )
}

export { MainPage }
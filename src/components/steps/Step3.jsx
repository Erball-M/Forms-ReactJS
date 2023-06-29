import React from 'react'
import { StepsPagination, TextField } from '../components'
import { usePageFormik } from '../../hooks/usePageFormik'

const Step3 = () => {
    const formik = usePageFormik('Step3')

    return (
        <form className='form' onSubmit={formik.handleSubmit}>
            <div className="form__content fullWidth">
                <TextField
                    id='fieldAbout'
                    value={formik.values.fieldAbout}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder='Placeholder'
                    variant='textarea'
                    className='form__input'
                    error={formik.touched.fieldAbout && formik.errors.fieldAbout}
                />
            </div>
            <StepsPagination formik={formik} />
        </form>
    )
}

export { Step3 }
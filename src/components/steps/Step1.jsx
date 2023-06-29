import React, { useState } from 'react'
import { Select, StepsPagination, TextField } from '../components'
import { usePageFormik } from '../../hooks/usePageFormik'

const Step1 = () => {
    const formik = usePageFormik('Step1')
    const [sex, setSex] = useState(formik.values.fieldSex)

    const handleSelect = (value) => {
        formik.setFieldValue('fieldSex', value)
        setSex(value)
    }

    return (
        <form className='form' onSubmit={formik.handleSubmit}>
            <div className="form__content">
                <TextField
                    id='fieldNickname'
                    value={formik.values.fieldNickname}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder='Placeholder'
                    className='form__input'
                    error={formik.touched.fieldNickname && formik.errors.fieldNickname}
                />
                <TextField
                    id='fieldName'
                    value={formik.values.fieldName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder='Placeholder'
                    className='form__input'
                    error={formik.touched.fieldName && formik.errors.fieldName}
                />
                <TextField
                    id='fieldSurname'
                    value={formik.values.fieldSurname}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder='Placeholder'
                    className='form__input'
                    error={formik.touched.fieldSurname && formik.errors.fieldSurname}
                />
                <Select
                    id='fieldSex'
                    options={[{ title: 'Male', value: 'male' }, { title: 'Female', value: 'female' },]}
                    value={sex}
                    onChange={handleSelect}
                    defaultValue={formik.values.fieldSex || 'Не выбрано'}
                    className='form__input'
                    error={formik.touched.fieldSex && formik.errors.fieldSex}
                />
            </div>
            <StepsPagination formik={formik} />
        </form>
    )
}

export { Step1 }
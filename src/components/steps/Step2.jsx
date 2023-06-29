import React from 'react'
import { Button, AdvantageField, Checkbox, StepsPagination } from '../components'
import { usePageFormik } from '../../hooks/usePageFormik'

const Step2 = () => {
    const formik = usePageFormik('Step2')

    const handleAddAdvantage = () => {
        formik.setFieldValue('fieldAdvantages', [...formik.values.fieldAdvantages, ''])
    }

    const handleRemoveAdvantage = index => {
        const updatedAdvantages = [...formik.values.fieldAdvantages]
        updatedAdvantages.splice(index, 1)
        formik.setFieldValue('fieldAdvantages', updatedAdvantages)
    }
    const handleCheckboxChange = value => {
        const checkboxes = formik.values.fieldCheckboxes

        if (checkboxes.find(item => item === value)) {
            const updatedCheckboxes = checkboxes.filter(item => item !== value)
            formik.setFieldValue('fieldCheckboxes', updatedCheckboxes)
        } else {
            const updatedCheckboxes = [...checkboxes, value]
            formik.setFieldValue('fieldCheckboxes', updatedCheckboxes)
        }
    }

    const handleRadioChange = value => {
        formik.setFieldValue('fieldRadio', value)
    }

    return (
        <form className='form' onSubmit={formik.handleSubmit}>
            <div className="form__content">
                <fieldset className='fieldset advantages'>
                    <legend className='legend'>Advantages</legend>
                    {formik.values.fieldAdvantages.map((advantage, index) => {
                        const field = `field-advantages-${index + 1}`
                        return (
                            <AdvantageField
                                key={field}
                                index={index}
                                id={field}
                                name={`fieldAdvantages[${index}]`}
                                value={advantage}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder={`${field} PLACEHOLDER`}
                                error={
                                    formik.touched.fieldAdvantages &&
                                    formik.errors.fieldAdvantages &&
                                    formik.errors.fieldAdvantages[index]
                                }
                                className='form__input'
                                handleRemove={handleRemoveAdvantage}
                            />
                        )
                    })}
                    <Button type='button' variant='stroke' onClick={handleAddAdvantage}>
                        +
                    </Button>
                </fieldset>
                <fieldset className='fieldset checkboxes'>
                    <legend className='legend'>Checkbox group</legend>
                    {[1, 2, 3].map(item => (
                        <Checkbox
                            key={`checkbox${item}`}
                            id={`field-checkbox-group-option-${item}`}
                            type='checkbox'
                            checked={formik.values.fieldCheckboxes.includes(`checkbox${item}`)}
                            name='CheckboxGroup'
                            value={`checkbox${item}`}
                            onChange={handleCheckboxChange}
                            label={`Checkbox ${item}`}
                        />
                    ))}
                    {(formik.errors.fieldCheckboxes && formik.touched.fieldCheckboxes)
                        && <span className='input__errorMessage'>{formik.errors.fieldCheckboxes}</span>}
                </fieldset>
                <fieldset className='fieldset radios'>
                    <legend className='legend'>Radio group</legend>
                    {[1, 2, 3].map(item => (
                        <Checkbox
                            key={`option${item}`}
                            id={`field-radio-group-option-${item}`}
                            type='radio'
                            checked={formik.values.fieldRadio === `option${item}`}
                            name='RadioGroup'
                            value={`option${item}`}
                            onChange={handleRadioChange}
                            label={`Option ${item}`}
                        />
                    ))}
                    {(formik.errors.fieldRadio && formik.touched.fieldRadio)
                        && <span className='input__errorMessage'>{formik.errors.fieldRadio}</span>}
                </fieldset>
            </div>
            <StepsPagination formik={formik} />
        </form>
    )
}

export { Step2 }

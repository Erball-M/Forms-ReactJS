import * as Yup from 'yup'

const ValidationSchemas = {
    Main: Yup.object({
        fieldPhoneNumber: Yup.string()
            .matches(/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, 'Please enter a phone number')
            .required('Please enter a phone number'),
        fieldEmail: Yup.string()
            .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i, 'Invalid email address')
            .required('This field is required'),
    }),
    Step1: Yup.object({
        fieldNickname: Yup.string()
            .trim()
            .matches(/^[a-zA-Z0-9\s]+$/, 'Only letters and numbers are allowed')
            .max(30, 'Maximum 30 characters allowed')
            .required('This field is required'),
        fieldName: Yup.string()
            .matches(/^[a-zA-Z]+$/, 'Only letters are allowed')
            .max(50, 'Maximum 50 characters allowed')
            .required('This field is required'),
        fieldSurname: Yup.string()
            .matches(/^[a-zA-Z]+$/, 'Only letters are allowed')
            .max(50, 'Maximum 50 characters allowed')
            .required('This field is required'),
        fieldSex: Yup.string()
            .oneOf(['male', 'female'], 'Invalid value')
            .required('This field is required'),
    }),
    Step2: Yup.object({
        fieldAdvantages: Yup.array()
            .of(Yup.string()),
        fieldCheckboxes: Yup.array()
            .min(1, 'Please select at least one option'),
        fieldRadio: Yup.string()
            .required('Please select one option'),
    }),
    Step3: Yup.object({
        fieldAbout: Yup.string()
            .max(200, 'Maximum 200 characters allowed'),
    }),
}

export default ValidationSchemas
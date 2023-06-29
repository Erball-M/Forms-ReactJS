import { useSelector } from "react-redux"
import { useFormik } from "formik"
import ValidationSchemas from '../constants/validationSchema'

const usePageFormik = (page) => {
    const initialValues = useSelector(state => state.forms.initialValues)
    const formik = useFormik({
        initialValues: initialValues[page],
        validationSchema: ValidationSchemas[page],
    })

    return formik
}

export { usePageFormik }
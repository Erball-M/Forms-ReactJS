async function validateForm(formik) {
    const validationRes = await formik.validateForm()
    const isValid = Object.keys(validationRes).length === 0 ? true : false

    return isValid
}

export { validateForm }
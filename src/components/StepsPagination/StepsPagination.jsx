import React, { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { Steps, Button } from '../components'
import { addAllowedPage, setValues, sendData } from '../../store/slices/formsSlice'
import Utils from '../../utils/utils'

const StepsPagination = ({ formik }) => {
    const dispatch = useDispatch()
    const navigator = useNavigate()
    const params = useParams()
    const id = parseInt(params.id)

    const isNext = useMemo(() => id + 1 <= Object.keys(Steps).length, [id])
    const isPrev = useMemo(() => id - 1 > 0, [id])
    const isFinal = useMemo(() => id === Object.keys(Steps).length, [id])

    const handlePrev = () => {
        dispatch(setValues({ page: `Step${id}`, values: formik.values }))
        navigator(isPrev ? `/step/${id - 1}` : '/')
    }
    const handleNext = async () => {
        const isValid = await Utils.validateForm(formik)

        if (isValid) {
            dispatch(setValues({ page: `Step${id}`, values: formik.values }))
            dispatch(addAllowedPage(`/step/${id + 1}`))
            navigator(`/step/${id + 1}`)
        }
    }
    const handleSubmit = () => {
        dispatch(setValues({ page: `Step${id}`, values: formik.values }))
        dispatch(sendData())
    }

    return (
        <div className='btns'>
            <Button type='button' variant='stroke' onClick={handlePrev}>Назад</Button>
            {isNext && <Button type='submit' onClick={handleNext}>Далее</Button>}
            {isFinal && <Button type='submit' onClick={handleSubmit}>Отправить</Button>}
        </div >
    )
}

export { StepsPagination }
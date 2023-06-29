import React, { useEffect, useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ProgressBar, Steps } from '../../components/components'
import { usePageAccessibility } from '../../hooks/usePageAccessibility'
import cl from './StepPage.module.scss'

const StepPage = () => {
    const params = useParams()
    const id = parseInt(params.id)
    const Step = useMemo(() => Steps[+id], [id])
    const stepsNumber = useMemo(() => Object.keys(Steps).length, [])
    const navigator = useNavigate()

    const isAllowed = usePageAccessibility()
    useEffect(() => {
        if (!isAllowed) {
            navigator('/')
        }
    }, [isAllowed])

    return (
        <>
            <ProgressBar
                currentStep={id}
                stepsCount={stepsNumber}
                className={cl.progressBar}
            />
            <Step />
        </>
    )
}

export { StepPage }
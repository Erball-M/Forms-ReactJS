import React from "react";
import classNames from "classnames";
import { useProgressBar } from '../../hooks/useProgressBar'
import { CheckPoint } from "./UI/CheckPoint/CheckPoint";
import cl from './ProgressBar.module.scss'

const ProgressBar = ({
    currentStep,
    stepsCount,
    className
}) => {
    const handledCurrentStep = currentStep > stepsCount ? stepsCount : currentStep
    const [progressPercent, stepsArray] = useProgressBar(handledCurrentStep, stepsCount)

    return (
        <div className={classNames(cl.container, className)}>
            <div className={cl.bar}>
                <div className={cl.progressLine} style={{ width: `${progressPercent}%` }} />
                <div className={cl.checkPoints}>
                    {stepsArray.map(item => (<CheckPoint key={item} number={item} currentStep={handledCurrentStep} />))}
                </div>
            </div>
        </div>
    )
}

export { ProgressBar }
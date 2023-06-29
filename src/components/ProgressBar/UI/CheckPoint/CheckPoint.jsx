import React from 'react'
import { ReactComponent as CheckPointCurrent } from '../../../../images/checkPointCurrent.svg'
import { ReactComponent as CheckPointDone } from '../../../../images/checkPointDone.svg'
import { ReactComponent as CheckPointDisabled } from '../../../../images/checkPointDisabled.svg'
import cl from './CheckPoint.module.scss'

export const CheckPoint = ({ number, currentStep }) => {
    const parsedNumber = parseInt(number)
    let Ico = null

    if (parsedNumber == currentStep) {
        Ico = CheckPointCurrent
    } else if (parsedNumber > currentStep) {
        Ico = CheckPointDisabled
    } else if (parsedNumber < currentStep) {
        Ico = CheckPointDone
    }

    return (
        <div className={cl.checkPoint}>
            <div className={cl.point}>
                <Ico className={cl.ico} />
            </div>
            <span className={cl.number}>{parsedNumber}</span>
        </div>
    )
}

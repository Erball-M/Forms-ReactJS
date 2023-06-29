import { useMemo, useState } from "react"

const useProgressBar = (currentStep, stepsCount) => {
    const progressPercent = useMemo(() => {
        const res = ((currentStep - 1) / (stepsCount - 1) * 100)
        return res
    }, [currentStep, stepsCount])
    const stepsArray = useMemo(() => {
        const arr = []
        for (let i = 1; i <= stepsCount; i++) {
            arr.push(i)
        }
        return arr
    }, [stepsCount])
    return [progressPercent, stepsArray]
}

export { useProgressBar }
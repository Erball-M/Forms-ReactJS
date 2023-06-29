import React from 'react'
import { TextField, Button } from '../components'
import { ReactComponent as Bin } from '../../images/bin.svg'
import cl from './AdvantageField.module.scss'

const AdvantageField = ({
    index,
    handleRemove,
    ...props
}) => {
    return (
        <div className={cl.wrapper}>
            <TextField {...props} />
            <Button type='button' variant='ico' onClick={() => handleRemove(index)}>
                <Bin />
            </Button>
        </div>
    )
}

export { AdvantageField }
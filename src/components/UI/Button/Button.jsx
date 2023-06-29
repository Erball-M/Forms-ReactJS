import React, { memo } from 'react'
import classNames from 'classnames'
import cl from './Button.module.scss'

const Button = memo(({
    variant = 'default', //stroke, ico
    className,
    children,
    type,
    ...props
}) => {
    return (
        <button
            type={type || 'button'}
            className={classNames(cl.button, cl[variant], className)}
            {...props}
        >
            {children}
        </button>
    )
})

export { Button }
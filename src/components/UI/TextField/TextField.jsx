import React, { forwardRef } from 'react'
import classNames from 'classnames'
import cl from './TextField.module.scss'

const TextField = forwardRef(
    ({
        id,
        name,
        caption,
        variant,
        className,
        error,
        ...props
    }, ref) => {
        return (
            <label
                className={classNames(cl.label, className)}
            >
                {(caption || id) && <span className={cl.caption}>{caption || id}</span>}
                {
                    variant !== 'textarea'
                        ? <input
                            id={id}
                            name={name || id}
                            className={classNames(cl.textField, cl[variant])}
                            {...props}
                            ref={ref}
                        />
                        : <textarea
                            id={id}
                            name={name || id}
                            className={cl.textArea}
                            {...props}
                        />
                }
                {error && <span className='input__errorMessage'>{error}</span>}
            </label>
        )
    }
)

export { TextField }
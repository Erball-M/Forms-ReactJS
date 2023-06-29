import React from 'react'
import classNames from 'classnames'
import cl from './Option.module.scss'

const Option = ({ option }) => {
    return (
        <li
            data-value={option.value}
            className={cl.option}
        >
            {option.title}
        </li>
    )
}

export { Option }
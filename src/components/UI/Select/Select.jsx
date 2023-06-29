import React, { useEffect, useMemo, useState } from 'react'
import classNames from 'classnames'
import { Option } from './UI/Option/Option'
import { getLongestTitle } from '../../../utils/getLongestTitle'
import Utils from '../../../utils/utils'
import Triangle from '../../../images/triangle.svg'
import cl from './Select.module.scss'

const Select = ({
    id,
    options,
    value,
    onChange,
    defaultValue,
    caption,
    className,
    error,
}) => {
    const hadnledDefaultValue = options.find(option => option.value === value)
    const [selected, setSelected] = useState(hadnledDefaultValue || defaultValue)
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        if (!selected || (!selected && !defaultValue)) {
            setSelected(options[0])
        }
    }, [])

    const size = useMemo(() => {
        const longest = getLongestTitle(options)
        return Utils.getSize([...longest, defaultValue])
    }, [options])

    const activeHandler = () => {
        setIsActive(!isActive)
    }
    const selectHandler = (e) => {
        const target = e.target.closest('li')
        if (!target || target.dataset.disabled) return
        const newValue = options.find(item => item.value === target.dataset.value)
        onChange(newValue.value)
        setSelected(newValue)
        setIsActive(false)
    }

    return (
        <>
            <label className={classNames(cl.label, className)} id={id}>
                {(caption || id) && <span className={cl.caption}>{caption || id}</span>}
                <div className={classNames(cl.wrapper, className)} >
                    <div
                        className={cl.selected}
                        onClick={activeHandler}
                    >
                        <span
                            className={classNames(cl.title, selected === defaultValue && cl.disabled)}
                            style={{ width: `${size.width}px` }}
                        >
                            {selected?.title || defaultValue || selected}
                        </span>
                        <div className={cl.triangle}>
                            <img src={Triangle} alt="trinagle" className={cl.img} />
                        </div>
                    </div>
                    {isActive && <ul className={cl.options} onClick={selectHandler}>
                        {options.map(option => (<Option key={option.value} option={option} />))}
                    </ul>}
                </div>
            </label>
            {error && <span className='input__errorMessage'>{error}</span>}
        </>
    )
}

export { Select }
import React, { useMemo } from 'react'
import classNames from 'classnames'
import RadioIco from '../../../images/radio.svg'
import RadioCheckedIco from '../../../images/radioChecked.svg'
import CheckboxIco from '../../../images/checkbox.svg'
import CheckboxCheckedIco from '../../../images/checkboxChecked.svg'
import cl from './Checkbox.module.scss'

const Checkbox = ({
    id,
    type = 'checkbox',
    checked,
    name,
    value,
    onChange,
    className,
    label,
}) => {
    const handleCheck = () => onChange(value)

    const [ico, icoDone] = useMemo(() => {
        if (type === 'radio') {
            return ([RadioIco, RadioCheckedIco])
        } else {
            return ([CheckboxIco, CheckboxCheckedIco])
        }
    }, [type])

    return (
        <label className={classNames(cl.wrapper, className)} >
            <input
                id={id}
                type={type}
                checked={checked}
                name={name}
                value={value}
                onChange={handleCheck}
                className={cl.hidden}
            />
            <div className={cl.checkmark}>
                <img src={checked ? icoDone : ico} alt={checked ? 'checked' : 'unchecked'} />
            </div>
            <span className={cl.label}>{label}</span>
        </label>
    )
}

export { Checkbox }
import React, { Children, useEffect } from 'react'
import classNames from 'classnames'
import { Button } from '../../components'
import CloseIco from '../../../images/CloseIco.svg'
import cl from './Modal.module.scss'

const Modal = ({
    title,
    children,
    isOpen,
    setIsOpen,
    isCloselable,
    className,
}) => {
    const toggleHandler = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : ''
    }, [isOpen])

    if (!isOpen) return null
    return (
        <div className={cl.wrapper}>
            <div className={classNames(cl.modal, className)}>
                <div className={cl.header}>
                    {title && <h3 className={classNames(cl.title, !isCloselable && cl.center)}>{title}</h3>}
                    {isCloselable && <Button variant='ico' onClick={toggleHandler}>
                        <img src={CloseIco} />
                    </Button>}
                </div>
                <div className={cl.body}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export { Modal }
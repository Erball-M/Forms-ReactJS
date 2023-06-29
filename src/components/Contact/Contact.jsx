import React from 'react'
import classNames from 'classnames'
import { ReactComponent as DirIco } from '../../images/dir.svg'
import cl from './Contact.module.scss'

const Contact = ({
    contact,
    className,
}) => {
    const { href, title } = contact

    return (
        <a className={classNames(cl.link, className)} target='_blank' href={href}>
            <DirIco />
            <span className={cl.title}>{title}</span>
        </a>
    )
}

export { Contact }
import React from 'react'
import classNames from 'classnames'
import { useSelector } from 'react-redux'
import { Contact } from '../components'
import cl from './About.module.scss'

const About = ({ className }) => {
    const { name, surname, contacts } = useSelector(state => state.about)

    return (
        <div className={classNames(cl.about, className)}>
            <div className={cl.avatar}>
                <p className={cl.avatar__words}>
                    {name[0]}{surname[0]}
                </p>
            </div>
            <div className={cl.body}>
                <h2 className={cl.fullName}>{name} {surname}</h2>
                <div className={cl.contacts}>
                    {contacts.map(item => (<Contact key={item.title} contact={item} />))}
                </div>
            </div>
        </div>
    )
}

export { About }
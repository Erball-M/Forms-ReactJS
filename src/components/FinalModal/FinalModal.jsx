import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import classNames from "classnames"
import { Modal, Button } from "../components"
import { toggleModal, reset } from '../../store/slices/formsSlice'
import DoneIco from '../../images/done.svg'
import CanceledIco from '../../images/canceled.svg'
import cl from './FinalModal.module.scss'

const FinalModal = () => {
    const dispatch = useDispatch()
    const navigator = useNavigate()
    const sendingSuccess = useSelector(state => state.forms.sendingSuccess)
    const modalIsOpen = useSelector(state => state.forms.modalIsOpen)

    const toggleHandler = boolean => dispatch(toggleModal(boolean))
    const sendedHandler = () => {
        dispatch(reset())
        dispatch(toggleModal(false))
        navigator('/')
    }

    return (
        <Modal
            isOpen={modalIsOpen}
            setIsOpen={toggleHandler}
            isCloselable={!sendingSuccess}
            title={sendingSuccess ? 'Форма успешно отправлена' : 'Ошибка'}
        >
            <div className={cl.ico}>
                <img className={cl.img} src={sendingSuccess ? DoneIco : CanceledIco} />
            </div>
            <div className={classNames(cl.btns, !sendingSuccess && cl.flexEnd)}>
                <Button
                    id={sendingSuccess ? 'button-to-main' : 'button-close'}
                    className={cl.btn}
                    onClick={sendingSuccess ? sendedHandler : toggleHandler}
                >
                    {sendingSuccess ? 'На главную' : 'Закрыть'}
                </Button>
            </div>
        </Modal >
    )
}

export { FinalModal }
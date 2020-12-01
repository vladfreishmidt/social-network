import s from './Messages.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = `/chats/${props.id}`;
    let shortName = props.name.slice(0, 14).concat('..');

    if (props.name.length > 15) {
        return (
            <div className={s.dialog}>
                <NavLink to={path} activeClassName={s.activeChat}>{shortName}</NavLink>
            </div>
        );
    }

    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.activeChat}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    );
}

const Messages = () => {

    let dialogsData = [
        { id: 1, name: 'Sarah' },
        { id: 2, name: 'Elon' },
        { id: 4, name: 'Rossario' },
        { id: 5, name: 'Palla Manka' },
        { id: 6, name: 'Abdul Durah Jah Miz Vancor Zrrs' },
        { id: 7, name: 'Vladyslav Freishmidt' }
    ];

    let MessagesData = [
        { id: 1, message: 'Hi! My names is Sarah' },
        { id: 2, message: 'Hi! My names is Elon' },
        { id: 3, message: 'Hi! My names is Jim' },
        { id: 4, message: 'Hi! My names is Rossario' },
        { id: 5, message: 'Hi! My names is Palla Manka' },
        { id: 6, message: 'Hi! My names is Abdul Durah Jah Miz Vancor Zrrs' },
    ];

    let dialogElements = dialogsData.map(dialog => {
        return <DialogItem id={dialog.id} name={dialog.name} />
    });

    let MessageElements = MessagesData.map(message => {
        return <Message id={message.id} message={message.message} />
    });

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>

            <div className={s.messages}>
                {MessageElements}
            </div>
        </div>
    );
}

export default Messages;
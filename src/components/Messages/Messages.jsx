import s from './Messages.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = `/chats/${props.id}`;
    let shortName = props.name.slice(0, 15).concat('..');

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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem id='1' name='Sarah' />
                <DialogItem id='2' name='Elon' />
                <DialogItem id='3' name='Jim' />
                <DialogItem id='4' name='Rossario' />
                <DialogItem id='5' name='Palla Manka' />
                <DialogItem id='6' name='Abdul Durah Jah Miz Vancor Zrrs' />
                <DialogItem id='7' name='Vladyslav Freishmidt' />
            </div>

            <div className={s.messages}>
                <Message message="hi there baby!" />
                <Message message="Oh wow! You are beautiful!" />
                <Message message="Thanks you darling!" />
                <Message message="Yeah! We are forever young!" />

            </div>
        </div>
    );
}

export default Messages;
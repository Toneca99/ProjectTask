import React from 'react';
import classnames from 'classnames';
import Icon from 'components/shared/Icon';
import style from './styles/LeftSidebarLink.module.scss'

const LeftSidebarLink = ({ icon, title, onClick, selected }) => {
    const linkStyle = classnames(style.link, {[style.selected]: selected });
    return (
        <li className={linkStyle} onClick={onClick}>
            <div className={style.borderLine} />
            <Icon styleIcon={style.icon} name={icon} width="2.5rem" height="2.5rem" />
            {title}
        </li>
    );
};

export default LeftSidebarLink;
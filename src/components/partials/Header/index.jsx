import React from 'react';
import Icon from 'components/shared/Icon';
import Logo from 'static/images/Logo.svg'
import style from './styles/Header.module.scss';

const Header = () => {
    return (
        <header>
            <article className={style.leftSide}>
                <img className={style.logo} src={Logo} alt="SMSBump Logo" />
                <div className={style.headerItem}>
                    <Icon name="pen" width="15px" height="15px" />
                    <span>Form 1</span>
                </div>
            </article>
            <article className={style.rightSide}>
                <div className={style.draftButton}>
                    <span>Draft</span>
                    <Icon styleIcon={style.arrow} name="arrow-down" width="10px" height="10px" />
                </div>
                <div className={style.exit}>
                    <Icon name="exit" width="15px" height="21px" />
                    <span>Exit</span>
                </div>
            </article>
        </header>
    );
}

export default Header;
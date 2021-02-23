import React, { useState, useEffect } from 'react';
import { PreviewScreenContext } from 'components/shared/PreviewScreenContext';
import { navLinks } from 'constants/config';
import LeftSidebarLink from 'components/partials/LeftSidebarNav/LeftSidebarLink';
import style from './styles/LeftSidebar.module.scss'

const LeftSidebarLinks = () => {
const { closeFormPreview, expandFormPreview } = React.useContext(PreviewScreenContext);
    const [button, selectButton] = useState(1);
    const themeButtonIndex = 0;

    useEffect(() => {
        if (themeButtonIndex === button) {
            expandFormPreview()
        } else {
            closeFormPreview()
        }

    }, [button])

    return (
        <div className={style.navItems}>
            {navLinks.map((item, key) => (
                <LeftSidebarLink
                    key={key}
                    icon={item.icon}
                    title={item.title}
                    selected={key === button}
                    onClick={() => selectButton(key)}
                />
            ))}
        </div>
    )
};

export default LeftSidebarLinks;
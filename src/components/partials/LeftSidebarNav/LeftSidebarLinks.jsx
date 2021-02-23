import React, { useState, useEffect } from 'react';
import { PreviewScreenContext } from 'components/shared/PreviewScreenContext';
import { navLinks } from 'constants/config';
import LeftSidebarLink from 'components/partials/LeftSidebarNav/LeftSidebarLink';
import style from './styles/LeftSidebar.module.scss'

const LeftSidebarLinks = () => {
    const [button, selectButton] = useState(1);
    const { toggleFormPreview, previewState } = React.useContext(PreviewScreenContext);
    const themeButtonIndex = 0;
    console.log(button)

    useEffect(() => {
        if (themeButtonIndex === button) {
            toggleFormPreview(!previewState.formToggled)
        } else {
            toggleFormPreview(false)
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
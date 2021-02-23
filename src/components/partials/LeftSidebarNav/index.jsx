import React from 'react';
import classnames from 'classnames';
import Icon from 'components/shared/Icon';
import LeftSidebarLinks from 'components/partials/LeftSidebarNav/LeftSidebarLinks';
import { PreviewScreenContext } from 'components/shared/PreviewScreenContext';
import style from './styles/LeftSidebar.module.scss';


const LeftSidebar = () => {
    const { previewState, changeScreenPreview } = React.useContext(PreviewScreenContext);
    const previewScreenTypes = ['desktop', 'pad', 'phone'];

    return (
        <nav className={style.container}>
            <div className={style.previewFormIcons}>
                {previewScreenTypes.map((previewIcon, key) => (
                    <Icon
                        key={key}
                        styleIcon={classnames(style.previewIcon, {[style.selected]: previewState.preview === previewIcon})}
                        onClick={() => changeScreenPreview(previewIcon)}
                        name={previewIcon}
                        width="2rem"
                        height="2rem"
                    />
                ))}
            </div>
            <LeftSidebarLinks />
            <div className={style.nextFormButton}>
                <span>Next Form 1/4</span>
                <Icon styleIcon={style.arrowNext} name="right-arrow" width="15px" height="15px" />
            </div>
        </nav>
    );
};

export default LeftSidebar;
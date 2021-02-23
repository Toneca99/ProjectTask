import React from 'react';
import Icon from 'components/shared/Icon';
import { PreviewScreenContext } from 'components/shared/PreviewScreenContext';
import style from './styles/SubHeader.module.scss'

const SubHeader = () => {
    const { previewState } = React.useContext(PreviewScreenContext);

    return (
        <div className={style.container}>
            <div className={style.toggleButtons}>
                <span>1.Design</span>
                <span>2.Behaviour</span>
            </div>
            <div className={style.previewButtons}>
                <span>Form {previewState.selectedForm.form + 1}</span>
                <span>Success</span>
            </div>
            <div>
                <div className={style.actionButton}>
                    <Icon name="undo" width="14px" height="17px" />
                    <span>Undo</span>
                </div>
                <div className={style.actionButton}>
                    <Icon name="redo" width="14px" height="17px" />
                    <span>Redo</span>
                </div>
                <div className={style.deleteButton}>
                    <Icon styleIcon={style.trashIcon} name="trash" width="14px" height="19px" />
                    <span>Delete Element</span>
                </div>
            </div>
        </div>
    );
}

export default SubHeader;
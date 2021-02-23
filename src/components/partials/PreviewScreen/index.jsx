import React, { useContext } from 'react';
import classnames from 'classnames';
import { PreviewScreenContext } from 'components/shared/PreviewScreenContext';
import style from './styles/PreviewScreen.module.scss';

const PreviewScreen = () => {
    const { previewState } = useContext(PreviewScreenContext);
    const contentStyle = classnames(style.content, {[style.tablet]: previewState.preview === 'pad', [style.mobile]: previewState.preview === 'phone'});
    const isFormSelected = !!previewState.selectedForm.src;
    return (
        <main className={style.container}>
            <div className={contentStyle}>
                {isFormSelected && <img className={style.previewImage} src={previewState.selectedForm.src} />}
            </div>
        </main>
    );
}

export default PreviewScreen;
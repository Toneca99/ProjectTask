import React, { useContext } from 'react';
import classnames from 'classnames';
import style from './styles/PreviewScreen.module.scss';
import { PreviewScreenContext } from 'components/shared/PreviewScreenContext';

const PreviewScreen = () => {
    const { previewState } = useContext(PreviewScreenContext);
    const contentStyle = classnames(style.content, {[style.tablet]: previewState.preview === 'pad', [style.mobile]: previewState.preview === 'phone'});
    return (
        <main className={style.container}>
            <div className={contentStyle}>

            </div>
        </main>
    );
}

export default PreviewScreen;
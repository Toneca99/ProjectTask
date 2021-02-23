import React from 'react';
import classnames from 'classnames';
// import Form1 from 'static/images/Forms-Previews/HowDidGo.svg';
import { PreviewScreenContext } from 'components/shared/PreviewScreenContext';
import Form1 from 'static/images/Forms-Previews/CommerceExpert.svg';
import style from './styles/FormPreview.module.scss';

const FormPreview = () => {
    const { previewState } = React.useContext(PreviewScreenContext);
    const containerStyle = classnames(style.container, {[style.toggled]: !!previewState.formToggled});
    return (
        <div className={containerStyle}>
            <article className={style.article}>
                <img className={style.imgPreview} src={Form1} width="120px" height="120px" />
                <p>This Form has 2 <span>steps</span></p>
            </article>
            <article className={style.article}>
                <img className={style.imgPreview} src={Form1} width="120px" height="120px" />
                <p>This Form has 2 <span>steps</span></p>
            </article>
            <article className={style.article}>
                <img className={style.imgPreview} src={Form1} width="120px" height="120px" />
                <p>This Form has 2 <span>steps</span></p>
            </article>
            <article className={style.article}>
                <img className={style.imgPreview} src={Form1} width="120px" height="120px" />
                <p>This Form has 2 <span>steps</span></p>
            </article>
            <article className={style.article}>
                <img className={style.imgPreview} src={Form1} width="120px" height="120px" />
                <p>This Form has 2 <span>steps</span></p>
            </article>
            <article className={style.article}>
                <img className={style.imgPreview} src={Form1} width="120px" height="120px" />
                <p>This Form has 2 <span>steps</span></p>
            </article>
        </div>
    );
}

export default FormPreview;
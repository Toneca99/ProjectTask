import React from 'react';
import classnames from 'classnames';
import { forms } from 'constants/config';
import { PreviewScreenContext } from 'components/shared/PreviewScreenContext';
import style from './styles/FormPreview.module.scss';

const FormPreview = () => {
    const { previewState, selectForm } = React.useContext(PreviewScreenContext);
    const containerStyle = classnames(style.container, { [style.expanded]: previewState.formExpanded === true });

    const setFomSelected = (form, index) => () => {
        selectForm({form: index, src: form.src})
    }
    const selectedForm = previewState.selectedForm.form && previewState.selectedForm.form;


    return (
        <div className={containerStyle}>
            {forms.map((form, key) => (
                <article className={style.article} onClick={setFomSelected(form, key)}>
                    <img className={style.imgPreview} src={form.src} />
                    {selectedForm === key &&
                        <span className={style.selected}>Selected</span>
                    }
                    <p>This Form has {form.steps} <span>steps</span></p>
                </article>
            ))}
        </div>
    );
}

export default FormPreview;
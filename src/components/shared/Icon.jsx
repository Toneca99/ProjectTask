import React from 'react';
import IconSprite from 'static/IconSprite.svg';

const Icon = ({ name, width, height, styleIcon, onClick, styleSvg }) => (
    <div onClick={onClick} className={styleIcon}>
        <svg className={styleSvg} width={width} height={height}>
            <use xlinkHref={`${IconSprite}#${name}`} />
        </svg>
    </div>
);

export default Icon;
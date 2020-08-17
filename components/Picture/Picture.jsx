import React from 'react';
import T from 'prop-types';
import cn from 'classnames';

import css from './Picture.module.css';

const propTypes = {
    link: T.string,
    className: T.string,
    children: T.node,
    clicked: T.func
};

export const Picture = (props) => {
    const { className: additionalClassName } = props;

    const classNames = cn(css.root, {
        [additionalClassName]: additionalClassName
    });
    return <div className={classNames} onClick={props.clicked} style={{backgroundImage: `url(./images/${props.link})`}}>
        {props.children}
    </div>;
};

Picture.propTypes = propTypes;
import React from 'react';

import css from './Logo.module.css';

export const Logo = () => {
    return (
        <div className={css.root}>
            <div className={css.logo} />
        </div>
    );
};
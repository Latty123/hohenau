import React from 'react';
import { Language } from '../Language/Language';
import { Social } from '../Social/Social';
import { Logo } from '../Logo/Logo';

import css from './Header.module.css';

export const Header = () => {
    return (
        <>
            <div className={css.root}>
                <Language />
                <div className={css.icons}>
                    <Logo/>
                    <Social />
                </div>
            </div>
        </>

    );
};
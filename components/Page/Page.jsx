import React from 'react';
import T from 'prop-types';

import css from './Page.module.css';
import {Header} from "../Header/Header";
import {Logo} from "../Logo/Logo";
import {Social} from "../Social/Social";

const propTypes = {
    children: T.node,
};

export const Page = (props) => {
    return (
        <div className={css.root}>
            <div className={css.top}>
                <Header />
            </div>
            <div className={css.subHeader}>
                <Logo/>
                <Social />
            </div>
            <div className={css.text}>
                <div className={css.title}>Welcome to Hohenau</div>
                <div className={css.subtitle}>The Place of Freedom and Serenity</div>
            </div>
            <div className={css.page}>
                {props.children}
            </div>
        </div>
    );
};

Page.propTypes = propTypes;

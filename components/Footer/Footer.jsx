import React from 'react';
import cn from 'classnames';

import css from './Footer.module.css';

export const Footer = () => {
    return (
        <div className={css.root}>
            <div className={css.block}>
                <div className={cn(css.icon, css.location)} />
                <div className={css.text}>
                    <div>Locate us:</div>
                    <a className={css.link} rel="noopener noreferrer" target='_blank' href={'https://www.google.ru/maps/place/%D0%9E%D1%8D%D0%BD%D0%B0%D1%83/@-27.0831586,-55.6654931,14z/data=!4m5!3m4!1s0x9457fa8cdefa5663:0x7a2e2db91c017c6!8m2!3d-27.0892633!4d-55.6412079'}>Hohenau-Obligado, Itapua,&nbsp;Paraguay&nbsp;{'>'}</a>
                </div>
            </div>
            <div className={css.block}>
                <div className={cn(css.icon, css.contact)} />
                <div className={css.text}>
                    <div>Contact us:</div>
                    <div className={css.firstLine}>Phone</div>
                    <div>+595 (992) 123 456</div>
                    <div className={css.firstLine}>Email</div>
                    <a className={css.link} href={'mailto:ya_em_borsch@gmail.com'}>ya_em_borsch@gmail.com&nbsp;{'>'}</a>
                </div>
            </div>
        </div>
    );
};
import React from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router'

import { setTheme } from '../../system/App.duck';

import css from './Nav.module.css';

export const Nav = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const clickHandle = (e) => {
        dispatch(setTheme(e.target.id));
        router.push(e.target.id).then();
        const smoothScroll = (height, step) => {
            let i = step || 0;
            if (i < height) {
                setTimeout(() => {
                    window.scrollTo(0, i);
                    smoothScroll(height, i + 10);
                }, 10);
            }
        };
        smoothScroll(e.target.getBoundingClientRect().top + window.pageYOffset - 31, window.pageYOffset);
    };

    return (
        <div className={css.root}>
            <div className={css.navBar}>
                <ul className={css.list}>
                    <li className={css.point}>
                        <div className={css.pic}>
                            <div id='fotos' className={css.foto} onClick={clickHandle} />
                        </div>
                        <div className={css.hint}>Fotos</div>
                    </li>
                    <li className={css.point}>
                        <div className={css.pic}>
                            <div id= 'persons' className={css.people} onClick={clickHandle} />
                        </div>
                        <div className={css.hint}>People</div>
                    </li>
                    <li className={css.point}>
                        <div className={css.pic}>
                            <div id= 'immigrate' className={css.immigrate} onClick={clickHandle} />
                        </div>
                        <div className={css.hint}>Immigrate</div>
                    </li>
                    <li className={css.point}>
                        <div className={css.pic}>
                            <div id= 'answers' className={css.answers} onClick={clickHandle} />
                        </div>
                        <div className={css.hint}>All answers</div>
                    </li>
                </ul>
            </div>
            <div className={css.frontier} />
        </div>
    );
};
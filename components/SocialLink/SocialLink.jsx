import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import T from 'prop-types';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { socials } from './Social.constants';
import { setSocial } from '../../system/App.duck';

import css from './SocialLink.module.css';

const propTypes = {
    type: T.oneOf(['facebook', 'instagram']),
};

export const SocialLink = (props) => {
    const dispatch = useDispatch();
    const socialFromStore = useSelector(state => state.app.social);
    const [socialLocal, setSocialLocal] = useState(socialFromStore);
    const classes = cn(css.social, css[props.type]);

    useEffect(() => {
        setSocialLocal(socialFromStore);
    }, [socialFromStore]);

    const clickHandler = () => {
        if (socialLocal === props.type) {
            dispatch(setSocial(undefined));
        } else dispatch(setSocial(props.type));
    };

    return (
        <>
            <div className={css.root}>
                <div className={classes} onClick={clickHandler} />
            </div>
            {socialFromStore === props.type && (<div>
                <div className={css.dropdown}>
                    <ul>
                        {socials[props.type].links.map((item, index) => {
                            return (
                            <li className={css.listItem} key={index}>
                                <div className={cn(css.icon, css[props.type])} />
                                <a className={css.link} onClick={clickHandler} href={item.url} rel="noopener noreferrer" target='_blank'>{item.name}</a>
                            </li>)
                        })}
                    </ul>
                </div>
            </div>
            )}
        </>

    );
};

SocialLink.propTypes = propTypes;
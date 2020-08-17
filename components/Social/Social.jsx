import React from 'react';
import { SocialLink } from '../SocialLink/SocialLink';

import css from './Social.module.css';

export const Social = () => {
    return (
        <div className={css.root}>
            <SocialLink type={'facebook'} />
            <SocialLink type={'instagram'} />
        </div>
    );
};
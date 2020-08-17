import React, { useState } from 'react';
import cn from 'classnames';

import css from './Language.module.css';

export const Language = () => {
    const [opened, setOpened] = useState(false);
    const [language, setLanguage] = useState('English');
    const handleClick = () => {
        setOpened(!opened);
    };

    const click = (e) => {
        setLanguage(e.target.id);
    };

    const classNames = cn(css.dropdown, {[css.opened] : opened});

    return (
        <div className={css.root}>
            <div className={css.wrapperDropdown} onClick={handleClick}>
                <span>{language}</span>
                <ul onClick={click} className={classNames}>
                    <li id={'Russian'}>Russian</li>
                    <li id={'Spanish'}>Spanish</li>
                    <li id={'German'}>German</li>
                </ul>
            </div>
        </div>
    );
};
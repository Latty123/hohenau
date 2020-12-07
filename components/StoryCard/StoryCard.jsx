import React from 'react';
import T from 'prop-types';

import { Picture } from '../Picture/Picture';
import { stories } from '../../content/Content.constants';

import css from './StoryCard.module.css';

const propTypes = {
    story: T.object,
    type: T.oneOf(['fotos', 'immigrate', 'answers', 'persons']),
    clicked: T.func
};

export const StoryCard = (props) => {
    const article = props.type !== 'fotos' ?
        props.story.article
        : stories.persons.filter(item => item.id === props.story.personId)[0]?.personName;

    const clickHandle = (e) => {
        props.clicked(e, props.story);
    };

    return (
        <Picture className={css.root} link={props.story.url} clicked={clickHandle}>
            <div className={css.shadow}>
                <div className={css.line} />
                <div className={css.title}>{props.story.title}</div>
                {props.type !== 'answers' && <div className={css.subtitle}>{article}</div>}
            </div>
        </Picture>
    );
};

StoryCard.propTypes = propTypes;
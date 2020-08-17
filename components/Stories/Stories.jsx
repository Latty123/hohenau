import React from 'react';
import { useDispatch } from 'react-redux';
import T from 'prop-types';

import { StoryCard } from '../StoryCard/StoryCard';
import { stories } from './Stories.constants';
import { setSelectedStory } from '../../system/App.duck';

import css from './Stories.module.css';

const propTypes = {
    type: T.oneOf(['fotos', 'immigrate', 'answers', 'persons']),
};

export const Stories = (props) => {
    const dispatch = useDispatch();
    const clickHandler = (e, story) => {
        dispatch(setSelectedStory(story));
    };

    return (
        <div className={css.root}>
            {stories[props.type] ? stories[props.type].map(story => <StoryCard key={Math.random()} clicked={clickHandler} type={props.type} story={story} />) : null}
        </div>
    );
};

Stories.propTypes = propTypes;
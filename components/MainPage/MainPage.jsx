import React from 'react';
import T from 'prop-types';
import cn from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import Carousel from '@brainhubeu/react-carousel';

import { setSelectedStory } from '../../system/App.duck';

import { Picture } from '../Picture/Picture';
import { Page } from '../Page/Page';
import { Nav } from '../Nav/Nav';
import { Stories } from '../Stories/Stories';
import { Footer } from '../Footer/Footer';

import css from './MainPage.module.css';

const propTypes = {
    theme: T.oneOf(['fotos', 'immigrate', 'answers', 'persons']),
};

export const MainPage = (props) => {
    const dispatch = useDispatch();
    const selectedStory = useSelector(state => state.app.selectedStory);

    const handleClick = (e) => {
        const { path } = e.nativeEvent;
        const arrows = Array.from(document.getElementsByClassName('BrainhubCarousel__arrows'));
        const clickArea = Array.from(document.getElementsByClassName(css.clickArea));
        const check = arrows.filter(item => path.includes(item)).concat(clickArea.filter(item => path.includes(item)));
        if (!check.length) dispatch(setSelectedStory(undefined));
    };

    const className = selectedStory ? css.common : '';
    return (
        <div className={className}>
            {selectedStory && props.theme === 'fotos' && <div className={css.shadow} onClick={(e) => handleClick(e)}>
                <div className={css.modal}>
                    <div className={css.cross} />
                    <div className={css.clickArea}>
                        <img src={`./images/${selectedStory.url}`} className={css.pic} alt={''} />
                    </div>
                </div>
            </div>}
            {selectedStory && props.theme !== 'fotos' && <div className={css.shadow} onClick={handleClick}>
                <div className={cn(css.modal, css.modalStory)}>
                    <div className={cn(css.cross, css.crossStory)} />
                    <div className={css.wrapper}>
                        <div className={css.clickArea}>
                            <div className={css.story}>
                                <img src={`./images/${selectedStory.url}`} className={css.picStory} alt={''} />
                                <div className={css.title}>{selectedStory.title}</div>
                                <div className={css.article}>{selectedStory.article}</div>
                                <div className={css.carousel}>
                                    <Carousel offset={40} draggable={false} arrows>
                                        {selectedStory.carousel.length && selectedStory.carousel.map(item => {
                                            return <img key={item} className={css.carouselItem} src={`./images/${item}`} alt={''} />
                                        })}
                                    </Carousel>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>}
            <div className={css.picWrapper}><Picture link={'main.jpg'}/></div>
            <Page>
                <nav><Nav /></nav>
                <main><Stories type={props.theme} /></main>
                <footer><Footer /></footer>
            </Page>
        </div>
    );
};

MainPage.propTypes = propTypes;

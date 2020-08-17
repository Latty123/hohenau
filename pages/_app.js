import React from 'react';
import T from 'prop-types';

import { wrapper } from '../system/store';

import '../styles/global.css';
import '@brainhubeu/react-carousel/lib/style.css';

const propTypes = {
    Component: T.any,
    pageProps: T.any
};


const MyApp = ({Component, pageProps}) => (
    <Component {...pageProps} />
);

export default wrapper.withRedux(MyApp);

MyApp.propTypes = propTypes;
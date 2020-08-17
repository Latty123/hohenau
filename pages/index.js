import { useEffect } from 'react';
import Router from 'next/router';

/**
 * @return {null}
 */
export default function Home() {

    useEffect(() => {
        const {pathname} = Router;
        if(pathname === '/' ){
            Router.push('/fotos').then();
        }
    }, []);

    return null;
}

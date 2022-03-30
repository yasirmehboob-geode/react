import './PageLoader.css';
import React from 'react';
import pageLoading from './../../assets/img/page-loading-3.gif';

export function PageLoader(props) {
    return (
        <div id='loading' className={props.loading ? 'loading' : 'loading hide'}>
            <img className='loading-image' src={pageLoading} alt="Loading..." />
        </div>
    )
}
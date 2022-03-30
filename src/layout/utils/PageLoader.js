import './PageLoader.css';
import React from 'react';
import pageLoading from './../../assets/img/page-loading-3.gif';

export function PageLoader(props) {
    return (
        <div id='loading' className={props.loading ? 'loading' : 'loading hide'}>
            <img id='loading-image' className={props.loading ? 'loading-image' : 'loading-image hide'} src={pageLoading} alt="Loading..." />
        </div>
    )
}
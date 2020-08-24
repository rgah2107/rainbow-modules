import React from 'react';
import PropTypes from 'prop-types';

const Done = (props) => {
    const { className, style } = props;
    return (
        <svg
            className={className}
            style={style}
            fill="currentColor"
            width="32px"
            height="32px"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <title>done</title>
            <g id="pages" stroke="none" strokeWidth="1" fillRule="evenodd">
                <path
                    d="M16,0 C24.836556,0 32,7.163444 32,16 C32,24.836556 24.836556,32 16,32 C7.163444,32 1.8189894e-12,24.836556 1.8189894e-12,16 C1.8189894e-12,7.163444 7.163444,0 16,0 Z M16,1.52664089 C8.00658448,1.52664089 1.52664089,8.00658448 1.52664089,16 C1.52664089,23.9934155 8.00658448,30.4733591 16,30.4733591 C23.9934155,30.4733591 30.4733591,23.9934155 30.4733591,16 C30.4733591,8.00658448 23.9934155,1.52664089 16,1.52664089 Z M21.0624976,11.6735836 C21.5061637,11.226266 22.2114525,11.1876609 22.7091007,11.5766053 L22.7091007,11.5766053 L22.827255,11.6812071 C23.3175468,12.171499 23.3221887,12.9667128 22.8367117,13.4573361 L22.8367117,13.4573361 L14.3123317,22.0713411 C14.0134961,22.3334719 13.5686181,22.308302 13.3105488,22.0062639 L13.3105488,22.0062639 L8.66677997,17.3343511 C8.22332886,16.8882124 8.18773246,16.1819012 8.586374,15.6728156 L8.586374,15.6728156 L8.68120712,15.5664168 C9.17133001,15.0762939 9.96410582,15.0729328 10.4470677,15.5597896 L10.4470677,15.5597896 L13.7617657,18.9012218 C13.7936416,18.9330978 13.8619876,18.9330978 13.8931405,18.9019478 L13.8931405,18.9019478 Z"
                    id="done"
                />
            </g>
        </svg>
    );
};

Done.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};
Done.defaultProps = {
    className: undefined,
    style: undefined,
};

export default Done;
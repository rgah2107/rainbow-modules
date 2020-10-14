import React from 'react';
import PropTypes from 'prop-types';

const Avatar = (props) => {
    const { className, style } = props;
    return (
        <svg className={className} style={style} width="54px" height="54px" viewBox="0 0 54 54">
            <defs>
                <circle id="path-1" cx="26.5410608" cy="26.5410608" r="26.5410608" />
            </defs>
            <g id="Variant-3" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="avatar" transform="translate(0.000000, 0.000280)">
                    <mask id="mask-2" fill="white">
                        <use xlinkHref="#path-1" />
                    </mask>
                    <use id="Mask" fill="#F0F2F6" fillRule="nonzero" xlinkHref="#path-1" />
                    <path
                        d="M35.4462686,47.0469152 L35.4406737,47.0469152 C34.8697087,46.614705 34.2718879,46.2303317 33.6421758,45.8834446 C33.6259505,45.8728142 33.6100049,45.8621838 33.588744,45.8568686 C30.6105503,44.2130712 28.5932898,41.0426908 28.5932898,37.3975786 L24.0834775,37.376038 C24.0834775,41.0320604 22.0499916,44.2183864 19.0452218,45.8565888 C19.0452218,45.8565888 19.0399066,45.8565888 19.0345914,45.861904 C18.3992844,46.2087912 17.791113,46.5984797 17.214553,47.0253746 C15.892216,48.0095776 14.7350476,49.2023703 13.791783,50.5552531 C12.0700199,53.0247021 40.748146,53.6028351 39.3177644,51.2808221 C38.3049086,49.6366006 36.9884475,48.1995484 35.4462686,47.0469152 Z"
                        id="Path"
                        fill="#ECC19C"
                        fillRule="nonzero"
                        mask="url(#mask-2)"
                    />
                    <path
                        d="M41.5730225,59.267133 L11.0606636,59.267133 C11.0606636,54.2501381 13.4782431,49.8043881 17.2142733,47.0236961 C17.7908332,46.5968012 18.3990047,46.2071127 19.0340319,45.8602256 C19.0396269,45.8549104 19.0449421,45.8549104 19.0449421,45.8549104 C19.5358993,45.5827159 20.0055956,45.2730352 20.4378058,44.9208329 C21.9322179,46.4527311 24.0191355,47.4027543 26.3301311,47.4027543 C28.6358114,47.4027543 30.7174139,46.4527311 32.2115462,44.9261481 C32.6384412,45.2783504 33.1031021,45.5880311 33.5884643,45.8549104 C33.6097251,45.8602256 33.6259505,45.870856 33.6418961,45.8814864 C34.2716081,46.2283735 34.8694289,46.6127468 35.4403939,47.044957 L35.4459889,47.044957 C39.1660735,49.8256489 41.5730225,54.2607685 41.5730225,59.267133 Z"
                        id="Path"
                        fill="currentColor"
                        fillRule="nonzero"
                        mask="url(#mask-2)"
                    />
                    <path
                        d="M14.6075844,14.6367481 L14.6075844,26.6200196 C14.6075844,34.7259883 21.7235261,41.2969815 26.3172627,41.2969815 C30.9104398,41.2969815 38.0269409,34.7259883 38.0269409,26.6200196 L38.0269409,14.6367481 L14.6075844,14.6367481 Z"
                        id="Path"
                        fill="#ECC19C"
                        fillRule="nonzero"
                        mask="url(#mask-2)"
                    />
                    <path
                        d="M36.1193415,12.4312174 C33.5672035,9.23565973 29.6929779,7.19266245 25.3594066,7.19266245 C17.6604708,7.19266245 11.4251749,13.6190261 11.4251749,21.543998 C11.4251749,25.7502841 13.1783536,29.5324727 15.9777886,32.1553869 C15.256599,30.3454194 14.8537624,28.3166893 14.8537624,26.1743816 C14.8537624,22.7315269 15.9000187,19.5784908 17.63921,17.153638 C19.4844257,17.9738582 22.4749283,18.2706704 25.7549699,17.8183185 C29.0070366,17.3729602 31.7782171,16.2984493 33.3406079,15.0188835 C36.1898379,17.5354936 38.0420473,21.5935134 38.0420473,26.1743816 C38.0420473,28.5214646 37.561161,30.727275 36.698699,32.6642479 C39.4486186,31.5259546 41.4706348,27.4682146 41.4706348,22.6394899 C41.4706348,17.4717111 39.1518063,13.208916 36.1193415,12.4312174 Z"
                        id="Path"
                        fill="#494846"
                        fillRule="nonzero"
                        mask="url(#mask-2)"
                    />
                </g>
            </g>
        </svg>
    );
};

Avatar.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

Avatar.defaultProps = {
    className: undefined,
    style: undefined,
};

export default Avatar;
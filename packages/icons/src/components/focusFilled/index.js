import React from 'react';
import PropTypes from 'prop-types';

const FocusFilled = (props) => {
    const { className, style } = props;
    return (
        <svg className={className} style={style} width="20px" height="20px" viewBox="0 0 20 20">
            <g id="Variant-3" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                    id="dispatch/new-ride-V-2-1-Copy-3"
                    transform="translate(-1450.000000, -210.000000)"
                    fill="currentColor"
                    fillRule="nonzero"
                >
                    <g id="Group-2" transform="translate(744.000000, 0.000000)">
                        <g id="Group-32" transform="translate(8.000000, 12.000000)">
                            <g id="Group-11" transform="translate(688.000000, 188.000000)">
                                <path
                                    d="M20,10 C20.46,10 20.8333333,10.3733333 20.8333333,10.8333333 L20.8333333,10.8333333 L20.8333333,12.5491667 C24.30375,12.935 27.065,15.69625 27.4508333,19.1666667 L27.4508333,19.1666667 L29.1666667,19.1666667 C29.6266667,19.1666667 30,19.54 30,20 C30,20.46 29.6266667,20.8333333 29.1666667,20.8333333 L29.1666667,20.8333333 L27.4508333,20.8333333 C27.065,24.30375 24.30375,27.065 20.8333333,27.4508333 L20.8333333,27.4508333 L20.8333333,29.1666667 C20.8333333,29.6266667 20.46,30 20,30 C19.54,30 19.1666667,29.6266667 19.1666667,29.1666667 L19.1666667,29.1666667 L19.1666667,27.4508333 C15.69625,27.065 12.935,24.30375 12.5491667,20.8333333 L12.5491667,20.8333333 L10.8333333,20.8333333 C10.3733333,20.8333333 10,20.46 10,20 C10,19.54 10.3733333,19.1666667 10.8333333,19.1666667 L10.8333333,19.1666667 L12.5491667,19.1666667 C12.935,15.69625 15.69625,12.935 19.1666667,12.5491667 L19.1666667,12.5491667 L19.1666667,10.8333333 C19.1666667,10.3733333 19.54,10 20,10 Z M20,14.1666667 C16.7833333,14.1666667 14.1666667,16.7833333 14.1666667,20 C14.1666667,23.2166667 16.7833333,25.8333333 20,25.8333333 C23.2166667,25.8333333 25.8333333,23.2166667 25.8333333,20 C25.8333333,16.7833333 23.2166667,14.1666667 20,14.1666667 Z M20,17.0833333 C21.6079167,17.0833333 22.9166667,18.3916667 22.9166667,20 C22.9166667,21.6083333 21.6079167,22.9166667 20,22.9166667 C18.3920833,22.9166667 17.0833333,21.6083333 17.0833333,20 C17.0833333,18.3916667 18.3920833,17.0833333 20,17.0833333 Z"
                                    id="Combined-Shape"
                                />
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};

FocusFilled.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

FocusFilled.defaultProps = {
    className: undefined,
    style: undefined,
};

export default FocusFilled;

import React from 'react';
import PropTypes from 'prop-types';

const Trash = (props) => {
    const { className, style } = props;
    return (
        <svg
            className={className}
            style={style}
            width="12px"
            height="12px"
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <g id="modules" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                    id="rainbow-ConfirmModal-delete"
                    transform="translate(-813.000000, -239.000000)"
                    fill="currentColor"
                    fillRule="nonzero"
                >
                    <path
                        d="M819.426803,239 C820.136686,239 820.712159,239.575473 820.712159,240.285356 L820.712159,240.285356 L820.712159,240.713816 L823.711305,240.713816 C823.947941,240.713816 824.139791,240.905615 824.139791,241.142251 C824.139791,241.378887 823.947967,241.570711 823.711331,241.570711 L823.711331,241.570711 L823.24559,241.570711 L822.425975,250.607188 C822.405741,250.828485 822.219715,250.99759 821.997515,250.996665 L821.997515,250.996665 L815.142276,250.996665 C814.920075,250.997565 814.734025,250.82846 814.713816,250.607188 L814.713816,250.607188 L813.894176,241.570711 L813.42846,241.570711 C813.191849,241.570711 813,241.378912 813,241.142276 C813,240.90564 813.191824,240.713816 813.42846,240.713816 L813.42846,240.713816 L816.427632,240.713816 L816.427632,240.285356 C816.427632,239.575473 817.003105,239 817.712987,239 L817.712987,239 Z M822.385255,241.570711 L814.756669,241.570711 L815.533456,250.139741 L821.606335,250.139741 L822.385255,241.570711 Z M816.397205,242.427632 C816.633816,242.410837 816.839272,242.589029 816.856067,242.825665 L816.856067,242.825665 L817.284527,248.823983 L817.284527,248.823983 C817.301071,249.061799 817.123004,249.266452 816.886946,249.282847 L816.886946,249.282847 L816.856092,249.282847 C816.630854,249.283423 816.443623,249.109473 816.427632,248.884812 L816.427632,248.884812 L815.999172,242.886494 C815.982377,242.649883 816.160569,242.444427 816.397205,242.427632 Z M818.569883,242.427607 C818.806519,242.427607 818.998343,242.619431 818.998343,242.856067 L818.998343,242.856067 L818.998343,248.854385 C818.998343,249.091021 818.806519,249.282845 818.569883,249.282845 C818.333247,249.282845 818.141423,249.091021 818.141423,248.854385 L818.141423,248.854385 L818.141423,242.856067 C818.141423,242.619431 818.333247,242.427607 818.569883,242.427607 Z M820.742561,242.427607 C820.979197,242.444427 821.157414,242.649858 821.140619,242.886469 L821.140619,242.886469 L820.712159,248.884787 C820.696167,249.109448 820.508937,249.283397 820.283699,249.282822 L820.283699,249.282822 L820.251113,249.282669 C820.01513,249.265322 819.837891,249.059941 819.855238,248.823958 L819.855238,248.823958 L820.283699,242.82564 C820.300494,242.589004 820.505925,242.410812 820.742561,242.427607 Z M819.426803,239.856895 L817.712987,239.856895 C817.476351,239.856895 817.284527,240.04872 817.284527,240.285356 L817.284527,240.285356 L817.284527,240.713816 L819.855264,240.713816 L819.855264,240.285356 C819.855264,240.04872 819.663439,239.856895 819.426803,239.856895 L819.426803,239.856895 Z"
                        id="trash"
                    />
                </g>
            </g>
        </svg>
    );
};

Trash.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};
Trash.defaultProps = {
    className: undefined,
    style: undefined,
};

export default Trash;
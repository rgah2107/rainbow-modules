import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Application from 'react-rainbow-components/components/Application';
import { FirebaseProvider } from 'rainbow-firebase-hooks';
import ReduxContainer from '../ReduxContainer';
import I18nContainer from '../I18nContainer';

const RainbowFirebaseApp = (props) => {
    const { 
        app,
        theme,
        locale,
        translations,
        children,
        reducers,
    } = props;
    const firebaseContext = useMemo(() => ({ app }), [app]);
    return (
        <Application theme={theme} locale={locale}>
            <ReduxContainer reducers={reducers}>
                <FirebaseProvider value={firebaseContext}>
                    <I18nContainer locale={locale} messages={translations[locale]}>
                        {children}
                    </I18nContainer>
                </FirebaseProvider>
            </ReduxContainer>
        </Application>
    );
}

RainbowFirebaseApp.propTypes = {
    app: PropTypes.object.isRequired,
    translations: PropTypes.object,
    reducers: PropTypes.object,
};

RainbowFirebaseApp.defaultProps = {
    reducers: {},
    translations: {},
};

export default RainbowFirebaseApp;

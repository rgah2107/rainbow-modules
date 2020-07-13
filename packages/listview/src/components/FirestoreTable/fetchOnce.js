import React from 'react';
import PropTypes from 'prop-types';
import Table from 'react-rainbow-components/components/Table';
import { useCollectionOnce } from '@rainbow-modules/firebase-hooks';

const FirestoreTableFetchOnce = (props) => {
    const { children, collection, query, ...rest } = props;
    const [data, isLoading] = useCollectionOnce({ path: collection, query });
    return (
        <Table {...rest} keyField="id" data={data} isLoading={isLoading}>
            {children}
        </Table>
    );
};

FirestoreTableFetchOnce.propTypes = {
    collection: PropTypes.string.isRequired,
    query: PropTypes.func,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
};

FirestoreTableFetchOnce.defaultProps = {
    query: undefined,
    children: [],
};

export default FirestoreTableFetchOnce;

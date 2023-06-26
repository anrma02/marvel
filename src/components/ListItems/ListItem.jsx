/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types, no-unused-vars
function ListItem({ name, thumbnail }) {
    return (
        <ul>
            <li className="text-black p-2">{name}</li>
        </ul>
    );
}

ListItem.prototype = {
    name: PropTypes.node.string,
};

export default ListItem;

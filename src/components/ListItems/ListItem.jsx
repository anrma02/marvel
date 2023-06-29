/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types, no-unused-vars
function ListItem({ name, id }) {
    return (
        <Link to={`/comics/issue/${id}`}>
            <ul>
                <li className="text-black p-2 cursor-pointer">{name}</li>
            </ul>
        </Link>
    );
}

ListItem.prototype = {
    name: PropTypes.node.string,
};

export default ListItem;

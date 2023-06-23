import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function MenuItem({ title, to }) {
    return (
        <NavLink
            className={'h-full text-[#cecece]  text-lg px-[18px] mx-auto cursor-pointer uppercase font-extrabold   '}
            to={to}
        >
            <span className=" h-full flex items-center border-b-2 border-solid border-b-transparent box-border hover:border-b-[#e62429] hover:text-white   ">
                {title}
            </span>
        </NavLink>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
};

export default MenuItem;

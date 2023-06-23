import PropTypes from 'prop-types';
import Header from '../Components/Header/Header';

function DefaultLayout({ children }) {
    return (
        <div className="container relative">
            <Header />

            <div className="flex-1 bg-slate-800 min-h-screen  "> {children}</div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;

import PropTypes from 'prop-types';
import Header from '~/layout/Components/Header';
import Slice from '../Components/Slide/Slide';
function DefaultLayout({ children }) {
    return (
        <div className="flex flex-col items-center ">
            <div className="container">
                <Header />
                <div className="flex">
                    <Slice />
                    <div className="flex-1">{children}</div>
                </div>
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;

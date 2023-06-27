import PropTypes from 'prop-types';
import Header from '../Components/Header/Header';
import { SearchProvider } from '~/Context/SearchProvider';


function DefaultLayout({ children }) {
    
    return (
        <SearchProvider>
            <div className="container relative">
                <Header />
                <div className="flex-1 bg-slate-800 min-h-screen">{children}</div>
            </div>
        </SearchProvider>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;

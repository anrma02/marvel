import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './ProperWrapper.module.scss';

const cx = classNames.bind(styles);
// eslint-disable-next-line react/prop-types
function PopperWrapper({ children }) {
    return <div className={cx('wrapper')}>{children}</div>;
}
PopperWrapper.prototype = {
    children: PropTypes.node.isRequired,
};

export default PopperWrapper;

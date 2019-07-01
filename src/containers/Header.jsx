import { connect } from 'react-redux';
import Header from '../components/Header.jsx';

export const mapStateToProps = ({ money }) => ({
    money
});

export default connect(mapStateToProps)(Header);
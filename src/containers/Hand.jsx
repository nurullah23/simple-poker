import { connect } from 'react-redux';
import Hand from '../components/Hand.jsx';

const mapStateToProps = state => state.form;
const mapDispatchToProps = { textAction, submitAction };

export default connect(mapStateToProps, mapDispatchToProps)(Hand);
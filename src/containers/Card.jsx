import { connect } from 'react-redux';
import Card from '../components/Card.jsx';

const mapStateToProps = state => state.form;
const mapDispatchToProps = { textAction, submitAction };

export default connect(mapStateToProps, mapDispatchToProps)(Card);
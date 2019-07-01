import { connect } from 'react-redux';
import Chips from '../components/Chips.jsx';
import { addChip } from '../actions/actions';

export const mapStateToProps = ({ money }) => ({
    money
});

export const mapDispatchToProps = ({
    onClick: addChip
});

export default connect(mapStateToProps, mapDispatchToProps)(Chips);
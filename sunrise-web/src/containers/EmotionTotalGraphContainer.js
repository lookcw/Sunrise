import { connect } from 'react-redux';
import EmotionTotalGraph from '../components/EmotionTotalGraph';

const mapStateToProps = state => {
  return {
    emoscore: state.emotions.reduce((acc, y) => {
        return y.date > acc.date ? y : acc;
    }, {date: new Date(0)})
  };
}

const mapDispatchToProps = dispatch => {
  return {};
}

const EmotionTotalGraphContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EmotionTotalGraph)

export default EmotionTotalGraphContainer;
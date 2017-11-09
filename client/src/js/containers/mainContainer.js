import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Main from "./../components/main";

const mapStateToProps = (state) => {
  return {

  }
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Main);

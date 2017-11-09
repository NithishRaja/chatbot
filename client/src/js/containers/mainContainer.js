import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Main from "./../components/main";
import updateConversationStatus from "./../actions/updateConversationStatus";

const mapStateToProps = (state) => {
  return {
    conversationStatus: state.conversationStatus
  }
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({updateConversationStatus}, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Main);

import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Main from "./../components/main";
import startConversation from "./../actions/startConversation";
import newMessage from "./../actions/newMessage";

const mapStateToProps = (state) => {
  return {
    messageList: state.messageList
  }
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({startConversation, newMessage}, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Main);

import { connect } from "react-redux";
import LoginLayout from "../sections/login";
import { login } from "../redux/auth";

const mapActionsToProps = { login };

export default connect(null, mapActionsToProps)(LoginLayout);

import { Component } from "react";
import { PropTypes } from 'prop-types';
import { createUser } from "../services/UserApi";
import Loading from "../components/Loading";
import "../styles/Login.css";

const MIN_NAME = 3


class Login extends Component {
    constructor() {
        super()

        this.state = {
            name: "",
            userLoggingIn: false,
        }
        this.onNameInputChange = this.onNameInputChange.bind(this);
    }

    createUserAndRedirect = async () => {
        const { history } = this.props
        const { name } = this.state

        this.setState({ userLoggingIn: true, })

        await createUser({ name })
        
        history.push("/search")
    }

    onNameInputChange  = (e) => {
        const name = e.target.value
        this.setState({name})
    }
   
  render() {
    const { name, userLoggingIn } = this.state;
    const loginButtonDisabled = name.length < MIN_NAME

    if (userLoggingIn) {
      return (
        <div className="page-loading-login">
          <Loading />
        </div>
      );
    }

    return (
      <div className="login-page">
        <div className="logo">
          <h1 className="logo-title">
            <span className="span-logo1">React</span>
            <span className="span-logo">Tunes</span>
          </h1>
           <img className="logo-image" src="https://s3.amazonaws.com/wordpress-cdn.eadbox.com/2017/09/18170051/musicas_sem_copyright.png" alt=""/>
        </div>
        <div className="login-box">
          <form className="login-form" onSubmit={ this.createUserAndRedirect }>
            <h1 className="login-title">Login</h1>

            <input
              type="text"
              className="login-name-input"
              placeholder="Coloque seu email"
              onChange={ this.onNameInputChange }
            />

            <button
              type="submit"
              className="button-login"
              disabled={ loginButtonDisabled }
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}
Login.propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };
  

export default Login
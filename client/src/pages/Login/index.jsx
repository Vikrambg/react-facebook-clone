import './Login.css'

const Login = () => {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo"> LamaSocial </h3>
                    <span className="loginDesc">
                        Connect with friends and the world around you on LamaSocial
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input type="text" className="loginInput" placeholder="Email" />
                        <input type="text" className="loginInput" placeholder="Password" />
                        <button className="loginButton">Login</button>
                        <span className="loginForgot">Forgot Password</span>
                        <button className="loginRegisterButton">Create a new Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
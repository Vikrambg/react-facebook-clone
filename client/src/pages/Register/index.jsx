import './Register.css'

const Register = () =>{
    return (
        <div className="register">
            <div className="registerWrapper">
                <div className="registerLeft">
                    <h3 className="loginLogo"> LamaSocial </h3>
                    <span className="loginDesc">
                        Connect with friends and the world around you on LamaSocial
                    </span>
                </div>
                <div className="registerRight">
                    <div className="registerBox">
                        <input type="text" className="loginInput" placeholder="Full Name" />
                        <input type="text" className="loginInput" placeholder="Email" />
                        <input type="text" className="loginInput" placeholder="Password" />
                        <button className="registerButton">Create Account</button>
                        <span className="loginForgot">Forgot Password</span>
                        <button className="registerLoginButton">Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
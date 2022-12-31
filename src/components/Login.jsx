import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";

class Login extends Component {
	clientId =
		"785122931249-jq77rqgu48s4r7uc63hjuteqa34pm93f.apps.googleusercontent.com";
	constructor(props) {
		const initClient = () => {
			gapi.client.init({
				clientId: this.clientId,
				scope: "",
			});
		};
		gapi.load("client:auth2", initClient);

		super(props);
	}

	validate() {
		let username = document.querySelector("#username");
		let password = document.querySelector("#password");
		//check in db
		console.log("db checked");
		return true;
	}

	onSuccess = (res) => {
		this.props.onLoginSuccess(res.profileObj);
	};
	onFailure = (err) => {
		console.log("failed:");
	};

	render() {
		return (
			<div className="login-form">
				<form>
					<h1>Login</h1>
					<div className="content">
						<div className="input-field">
							<input
								id="username"
								type="email"
								placeholder="Email"
								autoComplete="nope"
							></input>
						</div>
						<div className="input-field">
							<input
								id="password"
								type="password"
								placeholder="Password"
								autoComplete="new-password"
							></input>
						</div>
						<a href="#" className="link">
							Forgot Your Password?
						</a>
					</div>
					<div className="action">
						<button>Register</button>
						<button>Sign in</button>
					</div>
					<div className="glog">
						<GoogleLogin
							clientId={this.clientId}
							buttonText="Sign in with Google"
							onSuccess={this.onSuccess}
							onFailure={this.onFailure}
							theme="dark"
							cookiePolicy={"single_host_origin"}
							isSignedIn={true}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default Login;

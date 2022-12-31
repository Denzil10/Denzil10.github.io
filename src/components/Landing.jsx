import React from "react";
import Select from "./Select";
import { GoogleSignIn } from "react-google-login";

class Landing extends React.Component {
	render() {
		var loginbtn = (
			<a className="btn btn-primary btn-hire-me" href="#">
				Login
			</a>
		);

		let data = this.props.profileData;
		if (typeof data != undefined) {
			if (Object.keys(data).length > 0) {
				let first_name = data.name.split(" ");
				first_name = first_name[0];
				loginbtn = (
					<div id="profile-box">
						<i class="fa-solid fa-user"></i> {first_name}
					</div>
				);
				console.log(loginbtn);
			}
		}

		// var year_box = "";
		// var year = this.state.data;
		// if (year) {
		// 	if (typeof year != undefined) {
		// 		year_box = <div id="year_box">{this.state.data}</div>;
		// 	}
		// }

		return (
			<div id="landing" className="yeo-slogan">
				<div className="container yeo-header">
					<div className="columns">
						<div className="column col-12">
							<header className="navbar">
								<section className="navbar-section">
									<a className="navbar-brand logo" href="./">
										<img
											className="logo-img"
											src="./images/logo.svg"
											alt=""
										/>
										<span>Dev Space</span>
									</a>
								</section>
								<section className="navbar-section hide-xs">
									<a className="btn btn-link" href="#">
										Forum
									</a>
									<a className="btn btn-link" href="#">
										Inbox
									</a>
									{loginbtn}
								</section>
							</header>
						</div>
					</div>
				</div>
				<div className="container slogan">
					<div className="columns">
						<div className="column col-7 col-sm-12">
							<div className="">
								<span className="slogan-bold h1">
									Your dream
								</span>
								<span className="slogan-bold h1">
									Your team
								</span>
								<span className="slogan-bold">
									Hackathons, mini projects, cult events
								</span>
								<p>
									Find the right people or help them find you
								</p>
								<a
									className="btn btn-primary col-md-6 custom-btn"
									href="#select"
									onClick={this.props.onLogin}
								>
									Build that team now
								</a>
							</div>
						</div>
						<div className="column col-4 hide-sm">
							<img
								className="slogan-img"
								src="./images/yeo-feature-1.svg"
								alt=""
							/>
						</div>
					</div>
				</div>

				<div id="select" className="container d-flex flex-row">
					<Select />
				</div>
			</div>
		);
	}
}

export default Landing;

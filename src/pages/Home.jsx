import React, { useEffect, useState } from "react";
import Layout from "../components/Layout.jsx";
import Landing from "../components/Landing.jsx";
import Login from "../components/Login.jsx";

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			login: 0,
			profileData: {},
		};
	}

	render() {
		if (this.state.login == 1) {
			return (
				<Layout title="Home / teamfinder">
					<Landing
						login={this.state.login}
						profileData={this.state.profileData}
					/>
					<Login
						onLoginSuccess={(data) => {
							console.log("successful login ");
							this.setState({
								login: 2,
								profileData: data,
							});
						}}
					/>
				</Layout>
			);
		} else {
			return (
				<Layout title="Home / teamfinder">
					<Landing
						//always do data manipultaion before setting state
						profileData={this.state.profileData}
						onLogin={() => {
							this.setState({
								login: 1,
							});
						}}
					/>
				</Layout>
			);
			// }
		}
	}
}

export default Home;

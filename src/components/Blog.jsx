import { React, Component, useEffect } from "react";
import Axios from "axios";

export default class Blog extends Component {
	state = {
		data: [],
	};

	componentDidMount() {
		Axios.get("http://localhost:5000/blog/fetch").then((response) => {
			this.setState({
				data: response.data,
			});
		});
	}

	render() {
		// making react element using object
		// const child = this.state.data.map((el, index) => {
		// 	return <div key={index}></div>;
		// });
		const { data } = this.state;
		console.log("data" + JSON.stringify(data));

		return (
			<div
				id="forum_display"
				className="self-center flex flex-col items-center justify-center bg-black col-md-12"
			>
				<div className="row1 flex flex-row justify-around bg-white font-bold capitalize p-2">
					<div className="col1 w-1/7">event</div>
					<div className="col1 w-2/7">desc</div>
					<div className="col1 w-1/7">author</div>
					<div className="col1 w-1/7">date</div>
					<div className="col1 w-1/7">team</div>
					<div className="col1 w-2/7">join</div>
				</div>
				<div className="row1 flex flex-row justify-around bg-white p-2">
					<div className="col1 w-1/7">SIH</div>
					<div className="col1 w-2/7"></div>
					<div className="col1 w-1/7">Denzil</div>
					<div className="col1 w-1/7">22/1</div>
					<div className="col1 w-1/7">Denzil Samarth Shaun</div>
					<div className="btn btn-success ">request to join</div>
				</div>
				{data.map((data) => (
					<div className="row1 flex flex-row justify-around bg-white p-2">
						<div className="col1 w-1/7">{data.event}</div>
						<div className="col1 w-2/7">
							I know node.js with mongoDB
						</div>
						<div className="col1 w-1/7">Yash</div>
						<div className="col1 w-1/7">15/1</div>
						<div className="col1 w-1/7">-</div>
						<div className="btn btn-success">invite to team</div>
					</div>
				))}
			</div>
		);
	}
}

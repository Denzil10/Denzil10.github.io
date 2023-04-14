import React from "react";
import axios from "axios";
import { Component } from "react";

class Form extends React.Component {
	postOnForum = () => {
		let data = this.props.profileData;
		console.log(data);
		// if (typeof data != undefined) {
		// 	if (Object.keys(data).length > 0) {
		// 		let namee = data.name;
		// 	}
		// }
		let box = document.querySelector("#post_box");

		axios.post("http://localhost:5000/forum/post", {
			msg: `${box.value}`,
			name: `${data.name}`,
			event: `${this.props.event}`,
		});
	};

	render() {
		return (
			<div>
				<form action="">
					<label className="title">Post on forum</label>
					<label>Describe your skills in 5-15 words</label>
					<textarea
						id="post_box"
						rows="10"
						maxlength="100"
						placeholder="React, HTML, CSS
                                    SQL 
                                    Invictus finalist"
					/>
					<button
						className="btn btn-success mt-4"
						onClick={this.postOnForum}
					>
						Post
					</button>
					<button className="btn btn-success mt-4">
						Or, just get added to participant list
					</button>
				</form>
			</div>
		);
	}
}

export default Form;

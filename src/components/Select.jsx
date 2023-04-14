import React from "react";
import Options from "./Options.jsx";
import Form from "./Form.jsx";

class Select extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			event: "",
			last_data: this.data["preference"],
			level: 0,
			final_opt: "",
		};
	}

	// Optiontree
	data = {
		preference: {
			"Looking for team": {
				"Request to join a team": -1,
				"Post your availability": [
					"Just add yourself to participating list",
					"Mention your skills and post on forum",
				],
			},
			"Forming a team": {
				"Send invite": -1,
				"Post for hiring": [
					"Add your team to participating list",
					"Mention your requirements and post on forum",
				],
			},
		},
		event: ["ETH India", "Kickstart", "Cult Treasure Hunt"],
	};

	findFinal(curr) {
		let final = "";
		if (curr == "Request to join a team") {
			final = "team_list";
		} else if (curr == "Send invite") {
			final = "player_list";
		} else if (curr == "Post your availability") {
			final = "resume_form";
		} else {
			final = "hire_form";
		}
		this.setState({
			final_opt: final,
		});
		return final;
	}

	onEventFn = (e) => {
		let c = e.target.innerText;

		if (this.state.level == 0) {
			//first click so note the event
			this.setState({
				event: c,
			});
		}

		//events done
		if (this.state.level == 1) {
			// start updating json object once initial event is over
			let new_data = this.state.last_data[c];
			this.setState({
				last_data: new_data,
			});
		}

		// update level and event
		let next_level = this.state.level + 1;
		this.setState({
			current: c,
			level: next_level,
		});

		//stores final options
		if (this.state.level == 2) {
			this.findFinal(c);
		}
	};

	render() {
		//SHOW USER ALL OPTIONS
		let num;
		let level = this.state.level;
		//all variables that need changing needs to be in fns like render otherwise it wont get updated in class
		let curr = this.state.current;
		//this.curr means keeping curr outside gives error

		console.log(this.state.final_opt);

		//display event list
		if (level < 3) {
			if (this.state.level == 0) {
				num = this.data["event"].length;
				return (
					<Options
						total={num}
						data={this.data["event"]}
						onEvent={this.onEventFn}
					/>
				);
			} else {
				let temp = Object.keys(this.state.last_data);
				num = temp.length;
				return (
					<Options total={num} data={temp} onEvent={this.onEventFn} />
				);
			}
		}

		// PROVIDE FORMS
		else {
			return (
				<Form
					profileData={this.props.profileData}
					event={this.state.event}
				/>
			);
		}
	}
}

export default Select;

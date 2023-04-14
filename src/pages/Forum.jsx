import React from "react";
import Layout from "../components/Layout";
import Blog from "../components/Blog";

class Forum extends React.Component {
	render() {
		return (
			<Layout title="Forum /teamfinder">
				<div className="container flex justify-center items-center h-screen">
					<Blog />
				</div>
			</Layout>
		);
	}
}

export default Forum;

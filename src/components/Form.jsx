import React from "react";
import { Component } from "react";

class Form extends React.Component {
    render() {
        return (
            <div>
                <form action="">
                    <label className="title">Post on forum</label>
                    <label>Describe your skills in 5-15 words</label>
                    <textarea
                        rows="10"
                        maxlength="100"
                        placeholder="React, HTML, CSS
                                    SQL 
                                    Invictus finalist"
                    />
                    <button className="btn btn-success mt-4">Post</button>
                    <button className="btn btn-success mt-4">
                        Or, just get added to participant list
                    </button>
                </form>
            </div>
        );
    }
}

export default Form;

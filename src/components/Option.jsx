import { Button } from "react-bootstrap";

function Option(props) {
    return (
        <button className="btn btn-success" onClick={props.onEvent}>
            {props.value}
        </button>
    );
}

export default Option;

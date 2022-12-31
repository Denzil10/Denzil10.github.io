import React from "react";
import Option from "./Option.jsx";

class Options extends React.Component {
    renderSquare(e, onEventFn) {
        return <Option value={e} key={e} onEvent={onEventFn} />;
    }

    render() {
        var n = this.props.total;
        const rows = [];
        for (let i = 0; i < n; i++) {
            rows.push(
                this.renderSquare(this.props.data[i], this.props.onEvent)
            );
        }
        return <div className="option-row">{rows}</div>;
    }
}

export default Options;

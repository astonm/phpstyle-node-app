class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    incr() {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        return (
            <button onClick={this.incr.bind(this)}>{this.state.count}</button>
        );
    }
}

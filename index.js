module.exports = ({ include, write, redirect, session }) => {
    if (!session.email) {
        return redirect("/login.js");
    }

    include("header.js");

    write(`
<h2>Hello World!</h2>

You are logged in as ${session.email}.

<div>
<b>Check out this cool React counter:</b>

<span id="counter"></span>
</div>

<p><a href="/logout.js">Logout</a></p>
<script src="https://unpkg.com/react@16/umd/react.production.min.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js" crossorigin></script>
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
<script type="text/babel">
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
    }

    incr() {
        this.setState({count: this.state.count + 1});
    }

    render() {
        return (
            <button onClick={this.incr.bind(this)}>{this.state.count}</button>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('counter'));
</script>
    `);

    include("footer.js");
};

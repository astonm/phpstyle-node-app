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
<script src="/static/counter.js" type="text/babel"></script>
<script type="text/babel">
    ReactDOM.render(<Counter />, document.getElementById("counter"));
</script>
    `);

    include("footer.js");
};

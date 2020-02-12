module.exports = ({ include, write, redirect, session }) => {
    if (!session.email) {
        return redirect("/login.js");
    }

    include("header.js");

    write(`
<h2>Hello World!</h2>

You are logged in as ${session.email}.

<p><a href="/logout.js">Logout</a></p>
    `);

    include("footer.js");
};

module.exports = ({ include, write, redirect, request, session }) => {
    var error = null;
    if (request.email) {
        if (request.password == "opensesame") {
            session.email = request.email;
            return redirect("/");
        } else {
            error = "Wrong password!";
        }
    }

    include("header.js");

    write(`<h2>Login</h2>`);

    if (error) {
        write(`<p><b>${error}</b></p>`);
    }

    write(`
<form action="/login.js" method="POST">
    <div>
        <label>
            Email:
            <input type="text" name="email" value="${request.email || ""}">
        </label>
    </div>
    <div>
        <label>
            Password:
            <input type="password" name="password">
        </label>
    </div>
    <input type="submit">
</form>
    `);

    include("footer.js");
};

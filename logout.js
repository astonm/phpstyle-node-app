module.exports = ({ write, session }) => {
    session.email = "";

    write(`
        <p>You are logged out. <a href="/">Go home</a></p>
    `);
};

/*
    Object => Object
    Inserts a user's validated details (email, encrypted password) into the database
*/
const signUp = (req, res) => {
    const { email, password } = req.body;
    // insert into database
    res.send({
        // send message to user
    });
};

export default signUp;

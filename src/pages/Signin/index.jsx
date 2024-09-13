function Signin(){
    return(
        <div>
            <h1>Login</h1>
            <form>
                <label to="Username">Username</label>
                <input name="Username"></input>

                <label to="Password">Password</label>
                <input name="Password"></input>
            </form>
        </div>
    );
}

export {Signin}
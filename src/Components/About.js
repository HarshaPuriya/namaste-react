import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
        <div>
            <h1>About</h1>
            <UserClass/>
        </div>
        <div>
            LoggedIn User
            <UserContext.Consumer>
                {({loggedInUser}) => (
                    <h1 className="font-bold text-xl">{loggedInUser}</h1>
                )}
            </UserContext.Consumer>
        </div>
        </div>
    )
}

export default About;
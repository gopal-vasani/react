import { Link } from "react-router-dom";

function Nav() {

    return (
        <div>
            <Link to="{/Todo}">Todo</Link>
            <Link to="{/Timer}">Timer</Link>
        </div>
    )
}

export default Nav;
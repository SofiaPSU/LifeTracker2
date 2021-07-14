import './navbar.css';
export default function Navbar(){
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <a href="/">
                            Hīrā
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/give">
                            Give
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            Tips
                        </a>
                    </li>
                    <button className="login">
                        <a href="/login">
                            Log In
                        </a>
                    </button>
                    <button className="register">
                        <a href="/register">
                            Register
                        </a>
                    </button>
                </ul>
            </nav>
        </div>
    )
}
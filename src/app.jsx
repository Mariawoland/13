import { Outlet, Link } from "react-router-dom";

const App = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">მთავარი</Link>
                    </li>
                    <li>
                        <Link to="/kontaqti">კონტაქტი</Link>
                    </li>
                    <li>
                        <Link to="/shesaxeb">ჩვენს შესახებ</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default App;
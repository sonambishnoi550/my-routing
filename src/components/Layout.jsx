import { Outlet, Link } from "react-router-dom";

export default function Layout() {
    return (
        <div className="p-5 max-w-[1240px] mx-auto">
            <nav className="mb-5 space-x-4 flex justify-between items-center">
                <Link className="text-blue-600 " to="/">Home</Link>
                <Link className="text-blue-600" to="/about">About</Link>
                <Link className="text-blue-600 text-center" to="/users">Users</Link>
            </nav>
            <Outlet /> 
        </div>
    );
}

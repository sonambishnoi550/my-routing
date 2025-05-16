import { Link, Outlet } from "react-router-dom";

const users = [
    { id: 1, name: "Sonam" },
    { id: 2, name: "Virender" },
    { id: 3, name: "Rahul" },
];

export default function Users() {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-3">Users List</h1>
            <ul className="mb-3">
                {users.map(user => (
                    <li key={user.id} className="mb-1">
                        <Link to={`${user.id}`} className="text-blue-500 hover:underline">
                            {user.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <Outlet /> {/* Nested dynamic route for user profile */}
        </div>
    );
}

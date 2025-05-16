import { useParams } from "react-router-dom";

const users = {
    1: "Sonam",
    2: "Virender",
    3: "Rahul",
};

export default function UserProfile() {
    const { userId } = useParams();
    return (
        <div>
            <h2 className="text-xl font-semibold">User Profile</h2>
            <p>User ID: {userId}</p>
            <p>Name: {users[userId] || "Unknown User"}</p>
        </div>
    );
}

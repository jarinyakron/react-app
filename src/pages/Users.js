import { useEffect, useState } from "react";

function Users() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setUser(data))
            .catch(err => console.error("Error fetching users:", err));
    }, []);

    const listUser = user.map((u) => (
        <tr key={u.id} className="hover:bg-pink-100">
            <td className="px-5 py-5 text-sm border-b border-gray-200">{u.id}</td>
            <td className="px-5 py-5 text-sm border-b border-gray-200">{u.name}</td>
            <td className="px-5 py-5 text-sm border-b border-gray-200">{u.email}</td>
            <td className="px-5 py-5 text-sm border-b border-gray-200">{u.address.street}</td>
            <td className="px-5 py-5 text-sm border-b border-gray-200">{u.address.city}</td>
        </tr>
    ));

    return (
        <div className="min-h-screen bg-pink-50 p-10">
            <h1 className="text-3xl font-bold text-pink-600 mb-6">รายชื่อผู้ใช้</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded-lg">
                    <thead>
                        <tr>
                            <th className="px-5 py-3 bg-pink-200 text-pink-600 text-left">ID</th>
                            <th className="px-5 py-3 bg-pink-200 text-pink-600 text-left">Name</th>
                            <th className="px-5 py-3 bg-pink-200 text-pink-600 text-left">Email</th>
                            <th className="px-5 py-3 bg-pink-200 text-pink-600 text-left">Street</th>
                            <th className="px-5 py-3 bg-pink-200 text-pink-600 text-left">City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listUser}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Users;

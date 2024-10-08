import { useEffect, useState } from "react";
import { useAuth } from "../AuthProvider";
import axios from "axios";

function Account() {
    const { user } = useAuth();
    const [account, setAccount] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [editedName, setEditedName] = useState('');
    const [editedEmail, setEditedEmail] = useState('');
    const [editedPicture, setEditedPicture] = useState(null);

    const getAccount = () => {
        axios.get("http://localhost:4000/account", {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }).then(res => {
            setAccount(res.data);
            setEditedName(res.data[0]?.name || '');
            setEditedEmail(res.data[0]?.email || '');
            setEditedPicture(res.data[0]?.picture || '');
        }).catch(err => {
            console.log(err);
        });
    };

    useEffect(() => {
        getAccount();
    }, [user.token]);

    const handleSave = () => {
        const formData = new FormData();
        formData.append("name", editedName);
        formData.append("email", editedEmail);
        if (editedPicture) {
            formData.append("picture", editedPicture);
        }

        axios.put("http://localhost:4000/update-account", formData, {
            headers: {
                Authorization: `Bearer ${user.token}`,
                "Content-Type": "multipart/form-data"
            }
        }).then(() => {
            getAccount();
            setShowModal(false);
        }).catch(err => {
            console.log(err);
        });
    };

    const name = account[0]?.name;
    const email = account[0]?.email;
    const picture = account[0]?.picture;

    return (
        <>
            <div className="min-h-screen bg-pink-100 flex flex-col items-center p-10">
                <h1 className="text-4xl font-bold text-pink-600 mb-4">บัญชีผู้ใช้</h1>
                {JSON.stringify(account)}
                <div className="p-10 bg-white rounded-lg shadow-lg">
                    <h1 className="text-xl font-bold text-pink-600">ชื่อ: {name}</h1>
                    <h1 className="text-xl font-bold text-pink-600">อีเมล: {email}</h1>
                    <h1 className="text-xl font-bold text-pink-600">รูปโปรไฟล์:</h1>
                    {picture ? (
                        <img
                            src={`http://localhost:4000/${picture}`}
                            alt="Profile"
                            className="w-32 h-32 rounded-full object-cover border-4 border-pink-300"
                        />
                    ) : (
                        <div className="w-32 h-32 flex items-center justify-center bg-gray-200 rounded-full">
                            <span className="text-gray-500">N/A</span>
                        </div>
                    )}
                    <div className="my-3 flex justify-center">
                        <button onClick={() => setShowModal(true)} className="p-2 bg-pink-500 text-white rounded hover:bg-pink-400">แก้ไขข้อมูล</button>
                        
                        {/* Modal */}
                        {showModal && (
                            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
                                <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                                    <h2 className="text-lg font-bold mb-4">แก้ไขโปรไฟล์</h2>

                                    {/* Name Field */}
                                    <div className="mb-4">
                                        <label className="block text-gray-700">ชื่อ</label>
                                        <input
                                            type="text"
                                            value={editedName}
                                            onChange={(e) => setEditedName(e.target.value)}
                                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                                        />
                                    </div>

                                    {/* Email Field */}
                                    <div className="mb-4">
                                        <label className="block text-gray-700">อีเมล</label>
                                        <input
                                            type="email"
                                            value={editedEmail}
                                            onChange={(e) => setEditedEmail(e.target.value)}
                                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                                        />
                                    </div>

                                    {/* Picture Field */}
                                    <div className="mb-4">
                                        <label className="block text-gray-700">รูปโปรไฟล์</label>
                                        <input
                                            type="file"
                                            onChange={(e) => setEditedPicture(e.target.files[0])}
                                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                                        />
                                    </div>

                                    {/* Buttons */}
                                    <div className="flex justify-end space-x-4">
                                        <button
                                            onClick={() => setShowModal(false)}
                                            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                                        >
                                            ยกเลิก
                                        </button>
                                        <button
                                            onClick={handleSave}
                                            className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600"
                                        >
                                            บันทึก
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Account;

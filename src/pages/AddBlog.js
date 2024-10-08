import { useState } from "react";
import { useAuth } from "../AuthProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddBlog() {
    const { user } = useAuth();
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [detail, setDetail] = useState("");
    const [category, setCategory] = useState("");

    const listCategory = [
        { id: 1, cateName: "ความรู้" },
        { id: 2, cateName: "บันเทิง" },
    ];

    const handleAddPost = async (event) => {
        event.preventDefault();
        const blogpost = {
            title: title,
            detail: detail,
            category: category,
        };
        try {
            const response = await axios.post("http://localhost:4000/create-post", blogpost, {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            });
            alert(response.data.message);
            navigate('/myblog');
        } catch (error) {
            console.error("Error", error);
        }
    };

    return (
        <div className="max-w-xl mx-auto p-6 bg-pink-200 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-center text-pink-700">เพิ่มโพสต์ใหม่</h2>
            <form onSubmit={handleAddPost} className="bg-white rounded-lg p-6 shadow-md">
                <div className="mb-4">
                    <label className="block text-pink-600 text-lg font-semibold mb-2">ชื่อเรื่อง</label>
                    <input
                        className="w-full p-3 border border-pink-300 rounded focus:outline-none focus:ring focus:ring-pink-400"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-pink-600 text-lg font-semibold mb-2">รายละเอียด</label>
                    <textarea
                        className="w-full h-24 border border-pink-300 rounded p-3 focus:outline-none focus:ring focus:ring-pink-400"
                        value={detail}
                        onChange={(e) => setDetail(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-pink-600 text-lg font-semibold mb-2">ประเภท</label>
                    <select
                        className="w-full p-3 border border-pink-300 rounded focus:outline-none focus:ring focus:ring-pink-400"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    >
                        <option value="">--เลือกประเภท--</option>
                        {listCategory.map((cate) => (
                            <option key={cate.id} value={cate.cateName}>{cate.cateName}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <button
                        type="submit"
                        className="w-full p-3 rounded bg-pink-500 hover:bg-pink-400 text-white font-bold transition duration-200"
                    >
                        บันทึก
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AddBlog;

import React from 'react';

function About() {
    return (
        
        <div className="max-w-md mx-auto mt-10 p-6 bg-pink-100 rounded-lg shadow-lg">
            <div className="flex items-center justify-center mb-6">
                <img 
                    className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
                    src="https://scontent-bkk1-2.xx.fbcdn.net/v/t39.30808-6/409040296_1097071981624370_7967259641230728259_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=1NjZSTsbxBkQ7kNvgHjSHe1&_nc_ht=scontent-bkk1-2.xx&_nc_gid=AFNemYPrnfTsQr95bfzZpRV&oh=00_AYBbDww2Uqbo5u-iXJ1_DwW8Fdp7P_zPIIEb7dDrNgJyOA&oe=670AB5B9"
                    alt="Profile" 
                />
            </div>
            <div className="text-center">
                <h2 className="text-3xl font-bold text-pink-600 mb-2">Jarinyakron Phuphiwkham</h2>
                <p className="text-pink-500 text-lg">ประวัติส่วนตัว</p>
            </div>
            <div className="mt-4">
                <p className="text-center text-pink-600 text-lg">
                    อายุ 20 ปี สาขา คอมพิวเตอร์  คณะวิศวกรรมศาสตร์ มหาวิทยาลัยกาฬสินธุ์
                </p>
            </div>
            <div className="flex justify-center mt-6 space-x-6">
                <a 
                    href="https://instagram.com" 
                    className="text-pink-400 hover:text-pink-500 transition-colors"
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-instagram text-3xl"></i>
                </a>
                <a 
                    href="https://pinterest.com" 
                    className="text-red-400 hover:text-red-500 transition-colors"
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-pinterest text-3xl"></i>
                </a>
                <a 
                    href="https://tiktok.com" 
                    className="text-black hover:text-gray-800 transition-colors"
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-tiktok text-3xl"></i>
                </a>
            </div>
        </div>
    );
}

export default About;

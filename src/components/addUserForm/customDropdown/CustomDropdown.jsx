import { useState, useEffect, useRef } from "react";

const CustomDropdown = ({ channels, selectedChannel, setSelectedChannel, handleDeleteChannel }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-4 py-2 border rounded-lg bg-white shadow-md text-right focus:outline-none"
            >
                {selectedChannel || "انتخاب کانال تلگرام"}
            </button>

            {isOpen && (
                <div className="absolute w-full mt-1 bg-white border rounded-lg shadow-lg z-10">
                    {channels.map((channel) => (
                        <div
                            key={channel._id}
                            className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                            {/* انتخاب کانال */}
                            <span onClick={() => { setSelectedChannel(channel.name); setIsOpen(false); }}>
                                {channel.name}
                            </span>

                            {/* دکمه حذف کانال */}
                            <button
                                onClick={() => handleDeleteChannel(channel._id)}
                                className="bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-700"
                            >
                                حذف
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CustomDropdown;

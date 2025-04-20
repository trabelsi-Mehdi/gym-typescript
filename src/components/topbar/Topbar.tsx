// src/components/topbar/Topbar.tsx
import { BellIcon } from "@heroicons/react/24/outline";
import Avatar from "@/assets/avatar.png"; 

const Topbar = () => {
  return (
    <div className="flex justify-between items-center bg-white px-6 py-4 shadow-sm">
      <input
        type="text"
        placeholder="Search..."
        className="px-4 py-2 border rounded-lg w-1/3"
      />
      <div className="flex items-center gap-4">
        <BellIcon className="h-6 w-6 border border-gray-300   text-black cursor-pointer bg-white rounded-full hover:bg-gray-200   " />
        <img src={Avatar} alt="avatar" className="h-9 w-9 rounded-full " />
        <span className="text-sm font-medium">Musharof</span>
      </div>
    </div>
  );
};

export default Topbar;

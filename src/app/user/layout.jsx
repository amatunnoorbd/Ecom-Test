import UserDashboard from '@/components/Shared/UserDashboard';
import { FaUserLarge } from "react-icons/fa6";

const UserLayout = ({ children }) => {
    return (
        <div className="flex min-h-screen mx-[5.5%] mt-4 gap-3">
            <UserDashboard />

            <div className="flex-1">
                <div className='ml-5 flex items-center gap-2'>
                    <h1 className='flex items-center justify-center h-12 w-12 bg-gray-500 rounded-full'><FaUserLarge className='text-white text-3xl' /></h1>
                    <h2 className="text-3xl font-bold">Hello User</h2>
                </div>
                {children}
            </div>

        </div>
    );
};

export default UserLayout;

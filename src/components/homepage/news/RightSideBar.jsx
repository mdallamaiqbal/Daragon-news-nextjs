import { FaGithub, FaGoogle } from "react-icons/fa";


const RightSideBar = () => {
    return (
        <div>
            <h2 className="text-lg font-bold mb-4">Login with</h2>
            <div className="flex flex-col gap-2">
            <button className="btn border border-blue-500 text-blue-500"><FaGoogle />Login with google</button>
            <button className="btn"><FaGithub />Login with github</button>
            </div>
        </div>
    );
};

export default RightSideBar;
import Link from "next/link";


const NotFound = () => {
    return (
        <div className="h-[80vh] flex gap-5 justify-center items-center flex-col">
            <h3 className="font-bold text-5xl text-purple-500">This page is not found</h3>
           <Link href={'/'}>
            <button className="btn bg-purple-500 text-white">Back to Home</button>
           </Link>
        </div>
    );
};

export default NotFound;
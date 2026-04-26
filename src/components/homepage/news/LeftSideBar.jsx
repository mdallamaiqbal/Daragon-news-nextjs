import Link from "next/link";


const LeftSideBar = ({categories,activeId}) => {
    return (
        <div>
            <h3 className="font-bold text-lg ">All Categories</h3>
            <ul className="flex flex-col gap-3 mt-6">
                {
                    categories?.data?.news_category?.map((category) => {
                        return <li className={`${activeId === category.category_id && "bg-slate-100"}  rounded-md font-bold text-center text-md`} key={category.category_id}>
                        <Link href={`/category/${category.category_id}`} className="block p-2">{category.category_name}</Link>
                        </li>
                    })
                }
            </ul>
        </div>
    );
};

export default LeftSideBar;
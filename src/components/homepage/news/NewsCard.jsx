import Image from "next/image";
import Link from "next/link";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye, FaStar } from "react-icons/fa";


const NewsCard = ({ news }) => {
    return (
        <div className="card bg-base-100  shadow-sm">
            <div className="card-body">
                <div className="flex justify-between items-center p-4 bg-slate-100">
                    <div className="flex gap-1 items-center">
                        <div>
                            <Image src={news.author?.img} className="rounded-full" height={40} width={40} alt={news.author?.name} />
                        </div>
                        <div>
                            <h2 className="font-semibold">{news.author?.name}</h2>
                            <p className="text-xs">{news.author?.published_date}</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <CiShare2 className="text-xl" />
                        <CiBookmark className="text-xl" />
                    </div>
                </div>
                <h2 className="card-title">{news.title}</h2>
                <figure>
                <Image
                    src={news.image_url}
                    width={300} height={300}
                    className="w-full"
                    alt={news.title} />
            </figure>
            <p className="line-clamp-3">{news.details}</p>
            <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <h2 className="flex items-center gap-1"><FaStar className="text-yellow-500 text-lg" /> {news.rating.number}</h2>
                   <h2 className="flex items-center gap-1"><FaEye className="text-lg" /> {news.total_view}</h2>
                </div>
             <Link href={`/news/${news._id}`}>
             <button className="btn">See Details</button>
             </Link>
            </div>
            </div>
            
        </div>
    );
};

export default NewsCard;
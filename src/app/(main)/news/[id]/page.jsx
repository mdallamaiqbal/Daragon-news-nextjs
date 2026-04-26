import { getNewsDetailsById } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaArrowLeft} from "react-icons/fa";

export const generateMetadata=async({params})=>{
  const {id} = await params;
  const news = await getNewsDetailsById(id);
  return{
    title: news?.title,
    description: news?.details
  }
}
const NewsDetailsPage =async ({params}) => {
    const {id} = await params;
    const news = await getNewsDetailsById(id)
    return (
        <div className="max-w-4xl mx-auto my-8">
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
            <p >{news.details}</p>
            <Link href={`/category/${news.category_id}`}><button className="btn bg-purple-500 text-white"><FaArrowLeft /> See other news for this categories</button></Link>
            </div>
            
        </div>
        </div>
    );
};

export default NewsDetailsPage;
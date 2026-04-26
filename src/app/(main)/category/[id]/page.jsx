import LeftSideBar from '@/components/homepage/news/LeftSideBar';
import NewsCard from '@/components/homepage/news/NewsCard';
import RightSideBar from '@/components/homepage/news/RightSideBar';
import { getCategories, getNewsByCategoryId } from '@/lib/data';
import React from 'react';

const NewsCategoryPage = async ({ params }) => {
    const { id } = await params;
    const categories = await getCategories();
    const news = await getNewsByCategoryId(id);
    
    return (
        <div className="container mx-auto my-10 grid grid-cols-12 gap-4">
            <div className="col-span-3 ">
                <LeftSideBar categories={categories} activeId={id} />
            </div>
            <div className="col-span-6 ">
                <h3 className='font-bold text-lg mb-4'>News by Category</h3>
                <div className="space-y-4">
                    {
                     news.length > 0 ?   (news.map(n => {
                            return <NewsCard key={n._id} news={n} />
                        }))
                    : (<h2 className='text-center text-4xl font-bold'>No news found</h2>)
                    }
                </div>
            </div>
            <div className="col-span-3">
                <RightSideBar />
            </div>

        </div>
    );
};

export default NewsCategoryPage;
import { compareAsc, format } from "date-fns";
import logo from '@/assets/logo.png'
import Image from 'next/image';

const Header = () => {
    return (
        <div className='text-center py-8 space-y-2'>
            <Image src={logo} className='mx-auto' width={300} height={200} alt='logo'/>
            <p className='text-lg text-gray-500'>Journalism Without Fear or Favour</p>
            <p className='text-xl font-medium'>{format(new Date(), "EEEE, MMMM dd, yyyy") }</p>
        </div>
    );
};

export default Header;
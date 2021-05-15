import Image from 'next/image';
import Link from 'next/link';
import { DeviceMobileIcon} from "@heroicons/react/outline";
const Hero = () => {
    return (
        <section className="w-11/12 mx-auto h-h-nav flex flex-col justify-center sm:grid grid-cols-2 gap-2 content-center  ">
          <div className="sm:mx-5">
          <Image
            src='/heroimg.jpg'
            alt='logo'
            width={600}
            height={400}
          />
              </div>  
              <div className="sm:self-center">
              <h3 className="text-2xl text-purple-800 font-semibold py-5 sm:text-3xl">ಕನ್ನಡಿಗರಿಗೆ IT Job-Ready

ಮಾಡುವ ಅಭಿಯಾನ</h3>
<div className="mt-3">
              <Link href="/courses"><a className="bg-regal-red px-3 py-3 shadow-xl rounded text-gray-100 font-semibold mt-3 sm:px-5 py-4 text-lg ">View Our Courses</a></Link>
              <a href="/" className="ml-4 px-3 py-3 border border-purple-800 rounded shadow-xl sm:ml-6">

            
                  Download</a>
              </div>
              </div>
        </section>
    )
}

export default Hero

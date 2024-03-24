import bannerImg from '../../assets/images/user.png'

export default function Banner() {
  return (
    <div className='flex flex-col lg:flex-row justify-between items-center pt-3 lg:pt-6'>
        <div className='w-full lg:w-4/12'>
            <h1 className="text-[#1A1919] text-4xl lg:text-7xl font-extrabold" style={{lineHeight: '100px'}}>One Step Closer To Your <span className="text-[#9873FF]">Dream Job</span></h1>
            <p className="text-[#757575] text-base lg:text-lg font-medium mt-6">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
            <button className="py-2 lg:py-5 px-4 lg:px-7 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] rounded-lg text-white text-xl font-extrabold mt-8">Get Started</button>
        </div>
        <div>
            <img src={bannerImg} alt="" />

        </div>
    </div>
  )
}

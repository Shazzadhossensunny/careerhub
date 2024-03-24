import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { Link } from "react-router-dom";
export default function Job({job}) {
    const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary} = job
  return (
    <>
     <div className="border border-[#E8E8E8] rounded-lg p-10">
        <img src={logo} alt="" />
        <h3 className="text-[#474747] text-2xl font-extrabold mt-8">{job_title}</h3>
        <p className="text-[#757575] text-xl font-semibold mt-2">{company_name}</p>
        <div className="flex gap-4 mt-4 items-center">
            <p className="border border-[#7E90FE] py-2 px-5 rounded text-[#9873FF] text-base font-extrabold">{remote_or_onsite}</p>
            <p className="border border-[#7E90FE] py-2 px-5 rounded text-[#9873FF] text-base font-extrabold">{job_type}</p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 mt-4 items-start md:items-center">
            <p className="flex items-center text-xl text-[#757575] font-semibold gap-2"><IoLocationOutline></IoLocationOutline>{location}</p>
            <p className="flex items-center text-xl text-[#757575] font-semibold gap-2"><HiOutlineCurrencyDollar></HiOutlineCurrencyDollar>{salary}</p>
        </div>
        <Link to={`/job/${id}`} className="mt-6 py-2 px-5 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] rounded inline-block text-white text-xl font-extrabold">View Details</Link>
    </div>
    </>

  )
}

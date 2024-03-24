import { useLoaderData, useParams } from "react-router-dom";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { MdOutlineSubtitles, MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { saveJobApplication } from "../../utility/localStorage";

export default function JobDetails() {
  const jobs = useLoaderData();
  const { id } = useParams();
  const job = jobs.find((job) => job.id == id);
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    job_title,
    contact_information,
  } = job;

  const handleApplyJob = () => {
    saveJobApplication(job)
  }
  return (
    <div className="container mx-auto">
      <div className="text-center py-12">
        <h2 className="text-[#1A1919] text-3xl font-extrabold">Job Details</h2>
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-6">
        <div className="w-full lg:w-9/12 space-y-6">
          <p className="text-[#757575] font-medium">
            <strong className="text-[#1A1919] font-extrabold">
              Job Description:
            </strong>
            {job_description}
          </p>
          <p className="text-[#757575] font-medium">
            <strong className="text-[#1A1919] font-extrabold">
              Job Responsibility:
            </strong>
            {job_responsibility}
          </p>
          <h3 className="text-[#1A1919] font-extrabold">
            Educational Requirements:
          </h3>
          <p className="text-[#757575] font-medium">
            {educational_requirements}
          </p>
          <h3 className="text-[#1A1919] font-extrabold">Experiences:</h3>
          <p className="text-[#757575] font-medium">{experiences}</p>
        </div>
        <div className="w-full lg:w-3/12">
          <div className="rounded-lg bg-gradient-to-r from-[#7E90FE1A] to-[#9873FF1A] p-7">
            <h3 className="text-[#1A1919] text-xl font-extrabold">
              Job Details
            </h3>
            <div className="divider"></div>
            <div className="flex items-center gap-2">
              <HiOutlineCurrencyDollar
                size={20}
                className="text-[#9873FF]"
              ></HiOutlineCurrencyDollar>
              <p className=" text-[#757575]">
                <strong className="text-[#1A1919] font-extrabold">
                  Salary :{" "}
                </strong>
                {salary} (Per Month)
              </p>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <MdOutlineSubtitles
                size={20}
                className="text-[#9873FF]"
              ></MdOutlineSubtitles>
              <p className=" text-[#757575]">
                <strong className="text-[#1A1919] font-extrabold">
                  Job Title :{" "}
                </strong>
                {job_title}
              </p>
            </div>
            <h3 className="text-[#1A1919] text-xl font-extrabold mt-8">
              Contact Information
            </h3>
            <div className="divider"></div>
            <div className="flex items-center gap-2">
              <FiPhone size={20} className="text-[#9873FF]"></FiPhone>
              <p className=" text-[#757575]">
                <strong className="text-[#1A1919] font-extrabold">
                  Phone :{" "}
                </strong>
                {contact_information.phone}{" "}
              </p>
            </div>
            <div className="flex items-center gap-2 my-4">
              <MdOutlineEmail
                size={20}
                className="text-[#9873FF]"
              ></MdOutlineEmail>
              <p className="text-[#757575]">
                <strong className="text-[#1A1919] font-extrabold">
                  Email :{" "}
                </strong>
                {contact_information.email}{" "}
              </p>
            </div>
            <div className="flex items-start gap-2">
              <SlLocationPin
                size={20}
                className="text-[#9873FF]"
              ></SlLocationPin>
              <p className=" text-[#757575]">
                <strong className="text-[#1A1919] font-extrabold">
                  Address :{" "}
                </strong>
                {contact_information.address}{" "}
              </p>
            </div>
          </div>
          <div className="mt-6">
            <button onClick={handleApplyJob} className="w-full py-2 lg:py-5 px-4 lg:px-7 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] rounded-lg text-white text-xl font-extrabold text-center">Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

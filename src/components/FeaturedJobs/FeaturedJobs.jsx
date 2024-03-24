import { useEffect, useState } from "react";
import Job from "../Job/Job";

export default function FeaturedJobs() {
    const [jobs, setJobs] = useState([])
    const [open, setOpen] = useState(4)

    const handleOpen = (e) => {
      e.preventDefault()
       setOpen(open === 4 ? jobs.length : 4)
    }


    useEffect(()=>{
      fetch('/jobs.json')
      .then(res => res.json())
      .then(data => setJobs(data))
    },[])
  return (
    <div className="mt-10 lg:mt-32">
      <div className="space-y-4 text-center">
        <h2 className="text-[#1A1919] text-3xl lg:text-5xl font-extrabold">
          Featured Jobs
        </h2>
        <p className="text-[#757575] text-base font-medium">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">

       {
        jobs.slice(0, open).map((job)=> <Job key={job.id} job={job}></Job>)
       }

      </div>
      <div className="mt-10 text-center">
        <button onClick={handleOpen} className="py-3 lg:py-5 px-4 lg:px-7 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] rounded inline-block text-white text-xl font-extrabold">{open === 4 ? 'See All Jobs' : 'See Less'}</button>
    </div>
    </div>
  );
}

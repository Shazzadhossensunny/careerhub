import { useEffect } from "react";
import { useState } from "react";
import { getStoredJobApplication } from "../../utility/localStorage";
import AppliedJobsList from "../../components/AppliedJobsList/AppliedJobsList";

export default function AppliedJobs() {
  const [jobs, setJobs] = useState([]);
  const [displayJob, setDisplayJob] = useState([]);
  useEffect(() => {
    const storedJobs = getStoredJobApplication();
    setJobs(storedJobs);
    setDisplayJob(storedJobs)
  }, []);

  const handleFilter = (e) => {
    if(e.target.value === "all"){
      setDisplayJob(jobs)
    }
    else if(e.target.value === 'remote'){
      const remoteJobs = jobs.filter((job) => job.remote_or_onsite === 'Remote')
      setDisplayJob(remoteJobs)

    }
    else if(e.target.value === 'onsite'){
      const onsiteJobs = jobs.filter((job) => job.remote_or_onsite === 'Onsite')
      setDisplayJob(onsiteJobs)
    }
  }

  return (
    <div className="container mx-auto">
      <div className="text-center py-12">
        <h2 className="text-[#1A1919] text-3xl font-extrabold">Applied Jobs</h2>
      </div>
      <div>
      <div className="flex justify-end">
      <select className="select select-bordered max-w-xs" onChange={handleFilter}>
        <option selected value='all'>All</option>
        <option value='remote'>Remote</option>
        <option value='onsite'>Onsite</option>
      </select>
      </div>
        <div className="mt-8 grid grid-cols-1 gap-6">
          {displayJob.map((job) => (
            <AppliedJobsList key={job.id} job={job}></AppliedJobsList>
          ))}
        </div>
      </div>
    </div>
  );
}

import toast from "react-hot-toast";

const  getStoredJobApplication = () => {
    const storedJobApplication = localStorage.getItem('job-application')
    if(storedJobApplication){
        return JSON.parse(storedJobApplication)
    }
    return [];

}

const saveJobApplication = job => {
    const storedJobApplication = getStoredJobApplication();
    const exists = storedJobApplication.find((j)=> j.id === job.id);
    if(!exists){
        storedJobApplication.push(job);
        localStorage.setItem('job-application', JSON.stringify(storedJobApplication))
        return toast('SuccessFully Applied Job')
    }
    else{
        return toast('ALready Applied This Job')
    }

}

export { getStoredJobApplication, saveJobApplication}
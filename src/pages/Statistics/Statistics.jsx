import Banner from "../../components/Banner/Banner";
import FeaturedJobs from "../../components/FeaturedJobs/FeaturedJobs";
import JobCategory from "../../components/JobCategory/JobCategory";

export default function Statistics() {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#7E90FE0D] to-[#9873FF0D]">
        <div className="container mx-auto">
          <Banner></Banner>
        </div>
      </div>
      <div className="container mx-auto">
        <JobCategory></JobCategory>
      </div>
      <div className="container mx-auto">
        <FeaturedJobs></FeaturedJobs>
      </div>

    </div>
  );
}

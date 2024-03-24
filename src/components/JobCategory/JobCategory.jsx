import { useEffect, useState } from "react"
import CategoryList from "../CategoryList/CategoryList";

export default function JobCategory() {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
     fetch('/categories.json')
     .then(res => res.json())
     .then(data => setCategories(data))
    },[])
  return (
    <div className="mt-10 lg:mt-32">
        <div className="space-y-4 text-center">
            <h2 className="text-[#1A1919] text-3xl lg:text-5xl font-extrabold">Job Category List</h2>
            <p className="text-[#757575] text-base font-medium">Explore thousands of job opportunities with all the information you need. Its your future</p>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {
            categories.map((category) => <CategoryList key={category.id} category={category}></CategoryList>)
          }
        </div>
    </div>
  )
}

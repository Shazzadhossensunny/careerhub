export default function CategoryList({category}) {
    const {logo, category_name, availability} = category
  return (
    <div className="rounded-lg p-10 bg-gradient-to-r from-[#7E90FE1A] to-[#9873FF1A]">
        <img src={logo} alt="" />
        <h3 className="text-[#474747] text-xl font-extrabold mt-8">{category_name}</h3>
        <p className="text-[#A3A3A3] text-base font-medium mt-2">{availability}</p>

    </div>
  )
}

import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="container mx-auto p-10 lg:gap-10 xl:gap-20 mt-10 lg:mt-32 py-10 lg:py-32">
        <div className=" grid grid-cols-1 lg:grid-cols-5 lg:gap-10 xl:gap-20">
        <aside>
        <h3 className="text-white text-3xl font-extrabold">CareerHub</h3>
        <p className="text-[#FFFFFFB2] mt-5">
          There are many variations of passages of Lorem Ipsum , but the
          majority have suffered alteration in some form.
        </p>
        <div className="flex text-white gap-4 text-2xl mt-5 cursor-pointer">
          <FaFacebook></FaFacebook>
          <AiFillTwitterCircle></AiFillTwitterCircle>
          <FaInstagramSquare></FaInstagramSquare>
        </div>
      </aside>
      <nav>
        <h6 className="text-white text-xl">Company</h6>
        <div className="flex flex-col mt-3 space-y-4 text-[#FFFFFFB2]">
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Work</a>
          <a className="link link-hover">Latest News</a>
          <a className="link link-hover">Careers</a>
        </div>
      </nav>
      <nav>
        <h6 className="text-white text-xl">Product</h6>
        <div className="flex flex-col mt-3 space-y-4 text-[#FFFFFFB2]">
          <a className="link link-hover">Prototype</a>
          <a className="link link-hover">Plans & Pricing</a>
          <a className="link link-hover">Customers</a>
          <a className="link link-hover">Integrations</a>
        </div>
      </nav>

      <nav>
        <h6 className="text-white text-xl">Services</h6>
        <div className="flex flex-col mt-3 space-y-4 text-[#FFFFFFB2]">
          <a className="link link-hover">Help Desk</a>
          <a className="link link-hover">Sales</a>
          <a className="link link-hover">Become a Partner</a>
          <a className="link link-hover">Developers</a>
        </div>
      </nav>

      <nav>
        <h6 className="text-white text-xl">Services</h6>
        <div className="flex flex-col mt-3 space-y-4 text-[#FFFFFFB2]">
          <p className="link link-hover">524 Broadway , NYC</p>
          <a className="link link-hover">+1 777 - 978 - 5570</a>
        </div>
      </nav>

        </div>
        <div className="border border-[#9873FF33] my-6 lg:my-12"></div>
        <div className="text-[#FFFFFF66] text-sm font-semibold flex justify-between items-center">
            <p>@2024 CareerHub. All Rights Reserved</p>
            <p>Design by Sunny</p>
        </div>

    </footer>
  );
}

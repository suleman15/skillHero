import React from "react"
import { Navbar } from "../components/Navbar"
const coursesData = [
    {
        title:"ES6",
  desc:"Learn about es6",
  category:"programming",
  author:"Atif",
  price: 20,
    },
    {
        title:"CSS",
  desc:"Learn about CSS",
  category:"programming",
  author:"Abu Bakar",
  price: 15,

    },
    {
        title:"JavaScript",
  desc:"Learn about JavaScript",
  category:"programming",
  author:"Sylvie",
  price: 50,

    },
    {
        title:"React",
  desc:"Learn about React",
  category:"programming",
  author:"Saqlain",
  price: 40,

    },
    {
        title:"Rust",
  desc:"Learn about Rust",
  category:"programming",
  author:"Faizan",
  price: 30,

    }
]
const Courses = ()=>{
    return <React.Fragment>
        <Navbar/>
       <div className="my-10">
    <div className="flex gap-3 p-4">
    {
        coursesData.map((course,index)=>
        <div key={index} className="border-[2px] p-5 rounded-lg hover:scale-105 transition-all">
            <div>
             <img className="w-20" src={`https://api.dicebear.com/7.x/icons/svg?seed=${course.title}`} alt="Logo"/>
            </div>
            <div className="text-center">
                {course.title}
            </div>
            <div className="text-[10px]">
                {course.desc}
            </div>
            <div className="text-center my-1">
                <span className="w-[50px] h-[50px] rounded-lg bg-yellow-500 p-1">
                {course.price} $
                </span>
            </div>
       
        </div>
        )
    }
    </div>
       </div>
    </React.Fragment>
}
export default Courses
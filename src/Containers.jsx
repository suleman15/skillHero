import React from "react"
export const Containers = ()=>{
    return <React.Fragment>
        <div className="flex flex-col gap-1  p-3">
                <div className="lg:flex flex-row  gap-1">
                        <div className=" w-full lg:w-1/2 bg-blue-400 h-20 my-1"></div>
                        <div className=" w-full lg:w-1/2 bg-blue-400 h-20 my-1"></div>
                </div>

                <div className="flex gap-2">
                        <div className="w-full bg-yellow-400 h-20"></div>
                </div>
                <div className="lg:flex gap-2">
                        <div className="lg:w-1/3 w-full  bg-green-400 h-20 my-1"></div>
                        <div className="lg:w-1/3 w-full bg-green-400 h-20 my-1"></div>
                        <div className="lg:w-1/3 w-full bg-green-400 h-20 my-1"></div>
                </div>
                <div className="lg:flex md:flex sm:flex-wrap ">
                        <div className="lg:w-1/4 md:w-1/2 sm:w-full bg-red-400 h-20 my-1"></div>
                        <div className="lg:w-1/4 md:w-1/2 sm:w-full bg-red-400 h-20 my-1"></div>
                        <div className="lg:w-1/4  md:w-1/2 sm:w-full bg-red-400 h-20 my-1 "></div>
                        <div className="lg:w-1/4  md:w-1/2 sm:w-full bg-red-400 h-20 my-1"></div>
                </div>    
        </div>
    </React.Fragment>
}
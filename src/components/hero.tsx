export const Hero = () => {
    return (
        <section className="mt-[100px] md:mt-[180px] flex flex-col  gap-10 p-[20px] md:p-[50px]">
        <h3 className="text-gray-200 font-bold text-3xl md:text-5xl text-center">Play With <span className="text-green-500">Kwara</span> Youth</h3>
        <p className="text-lg md:text-2xl text-gray-200 text-center md:pr-5 md:pl-5">An inclusive event that brings together young people from all the 16 local governments. A Day Event full of lasting memories</p>
        <div className="md:flex-row flex-col flex gap-5 md:items-center md:justify-center mt-5">
        <button className="bg-green-500 text-white px-10 py-3 rounded-full ">Join us now</button>
        <button className=" text-white px-10 py-3 rounded-full border border-green-500 ">Learn More</button>
        </div>
      </section>
    )
}
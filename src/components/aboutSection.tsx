import subHeroImg from "../assets/slide8.jpg"

export const AboutUs = () =>{
    return(
<section className="p-10 flex justify-between items-center md:flex-row flex-col">
  <div className="flex-1">
    <div className="flex gap-5 text-center items-center mb-5 md:pl-10">
      <p className="text-green-600 text-lg">About us</p>
      <p className="w-[100px] h-[4px] bg-green-600 border-top-rounded"></p>
    </div>

    <h3 className="font-bold text-5xl md:pl-10">Who Are We..?</h3>
    <p className="md:p-[50px] text-2xl mt-5">
      By choosing eco-rides, you're opting for vehicles that prioritize the environment,
      like our electric Kekes, which produce zero emissions and 
      significantly reduce your carbon footprint.
    </p>
    <button className="pl-10 md:ml-10  mb-5 mt-5 bg-green-700 text-white px-10 py-3 rounded-full hover:bg-green-900">Join us now</button>
  </div>

  <div className="flex-1">
    <img src={subHeroImg} alt="" className="w-full" />
  </div>
</section>
    )
}
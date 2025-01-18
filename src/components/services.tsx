import img1 from "../assets/slide15.jpg"
import img from "../assets/slide16.jpg"
import img2 from "../assets/slide17.jpg"

export const Services = () =>{
    return(
        <section className="md:flex-row flex flex-col item-center justify-center gap-4 p-3 ">
            <div className="relative">
                <img src={img} alt={''} 
                className="w-full h-auto  rounded-3xl "
                />
             <div className="absolute pl-4 pr-4 pt-8 inset-0 bg-opacity-50 bg-gray-900 rounded-3xl">
                    <h3 className="text-white font-bold text-3xl">Play With Kwara Youth</h3>
                    <p className="text-xl text-white">An inclusive event that brings together young people from all the 16 local governments
                    </p>
            </div>              
            </div>
            <div className="relative ">
                <img src={img2} alt={''} 
                className="w-full h-full rounded-3xl"
                />
                <div className="absolute pl-4 pr-4  pt-8 inset-0 bg-opacity-50 bg-gray-900 rounded-3xl">
                    <h3 className="text-white font-bold text-3xl">A Day Event full of lasting memories</h3>
                    <p className="text-xl text-white">Through exciting games like football, table tennis, ludo and all, we aim to foster unity and friendship among kwara youths.      </p>
                </div>
                
            </div>
            <div className="relative">
                <img src={img1} alt={''} 
                className="w-full h-full  rounded-3xl"
                />
             <div className="absolute pl-4 pr-4  pt-8 inset-0 bg-opacity-50 bg-gray-900 rounded-3xl">
                    <h3 className="text-white font-bold text-3xl">Are you a sport Enthusiast or just looking for a great time..?</h3>
                    <p className="text-xl text-white">Play with kwara youth is more than just an event, it's a movement to unite kwara's young people and create one kwara together
                    </p>
            </div>
                
            </div>
        </section>
    )
}
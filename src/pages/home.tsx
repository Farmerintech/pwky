import { Services } from "../components/services"
import Slider from "../components/slider"

export const Home = () => {
    return(
        <section className="overflow-hidden ">
            <div className="-mt-10 md:mt-0 relative h-[75vh] md:h-[55vh] lg:h-[100vh]">
              <Slider/>
            </div>
            <div className="md:-mt-20">
              <Services/>
          </div>
        </section>
    )
}
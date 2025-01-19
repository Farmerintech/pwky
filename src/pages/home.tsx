import { Services } from "../components/services"
import Slider from "../components/slider"

export const Home = () => {
  // document.body.classList.add()
    return(
        <section className="overflow-hidden ">
            <div className="relative h-[75vh] md:h-auto">
              <Slider/>
            </div>
            <div className="mt-10 md:mt-0 md:p-5">
              <Services/>
          </div>
        </section>
    )
}
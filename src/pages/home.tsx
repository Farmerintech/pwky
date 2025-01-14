import Slider from "../components/slider"

export const Home = () => {
    return(
        <section className="overflow-x-hidden ">
            <div className="relative h-[75vh] md:h-[55vh] lg:h-[100vh]">
              <Slider/>
            </div>
            <div className="md:-mt-20 mt-10   p-5">
                <p>hi</p>
          </div>
        </section>
    )
}
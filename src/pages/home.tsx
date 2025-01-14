import Slider from "../components/slider"

export const Home = () => {
    return(
        <section className="overflow-x-hidden ">
            <div className="relative h-[75vh] md:h-[65vh] lg:h-[100vh]">
              <Slider/>
            </div>
            <div className="mt-20 md:-mt-20 lg:mt-20 md:mt-5 p-5">
                <p>hi</p>
          </div>
        </section>
    )
}
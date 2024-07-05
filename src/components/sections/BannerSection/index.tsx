import Banner from "../../../assets/BannerImage.jpg";

export function BannerSection(){
    return(
        <section>
            <h1 className="title one">A melhor pizza da cidade</h1>
            <img src={Banner} alt="Pizza de lombo." />
            <div></div>
        </section>
    )
}
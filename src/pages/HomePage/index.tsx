import { AboutSection } from "../../components/sections/AboutSection";
import { BannerSection } from "../../components/sections/BannerSection";
import { CtaSection } from "../../components/sections/CtaSection";
import { RecipesSection } from "../../components/sections/RecipesSection";

export function HomePage(){
    return(
        <>
            <BannerSection />
            <RecipesSection />
            <AboutSection />
            <CtaSection />
        </>
    )
}
import { AboutSection } from "../../components/sections/AboutSection";
import { BannerSection } from "../../components/sections/BannerSection";
import { CtaSection } from "../../components/sections/CtaSection";
import { FormSection } from "../../components/sections/FormSection";
import { RecipesSection } from "../../components/sections/RecipesSection";

export function HomePage(){
    return(
        <>
            <BannerSection />
            <RecipesSection />
            <AboutSection />
            <CtaSection />
            <FormSection />
        </>
    )
}
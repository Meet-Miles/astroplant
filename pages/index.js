import Carousel from "../components/Carousel";
import MainLayout from "../components/layouts/MainLayout";
import Section from "../components/Section";
import CommunitySection from "../components/sections/CommunitySection";
import CTASection from "../components/sections/CTASection";
import HeroSection from "../components/sections/HeroSection";
import MainPartnersSection from "../components/sections/MainPartnersSection";
import PlatformSection from "../components/sections/PlatformSection";
import { getFeaturedArticles } from "../services/community-api";
import { getAchievements, getHome } from "../services/sanity";

/*const Loader = dynamic(
  () => import("react-preloaders").then((loaders) => loaders.Cube),
  {
    ssr: false,
  }
);*/

export default function Home({ data, achievements, featuredArticles }) {
  return (
    <div className={"bg-gradient"}>
      <MainLayout
        pageName={"Home"}
        pageDescription={
          "AstroPlant, growing a new generation of urban and space farmers."
        }
        featuredArticles={featuredArticles}
      >
        {/*<Loader
        color={"var(--main-color)"}
        time={1000}
        animation="slide"
        background="linear-gradient(321deg, rgba(28,19,31,1) 0%, rgba(20,15,43,1) 100%)"
      />*/}
        <HeroSection
          title={data.heroTitle}
          description={data.heroDescription}
          image={data.planetImage}
          videoUrl={data.video}
        />
        <MainPartnersSection
          title={data.partnersTitle}
          partners={data.partners}
          link={data.partnersLink}
        />
        <CommunitySection
          title={data.communityTitle}
          description={data.communityDescription}
          images={data.communityImages}
          link={data.communityLink}
        />
        <Section id="achievements">
          <Carousel content={achievements} />
        </Section>
        <PlatformSection
          title={data.platformTitle}
          description={data.platformDescription}
          image={data.platformImage}
          links={data.platformLinks}
        />
        <CTASection
          title={data.ctaTitle}
          description={data.ctaDescription}
          image={data.ctaImage}
          ctas={data.ctas}
        />
      </MainLayout>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      data: await getHome(),
      achievements: await getAchievements(),
      featuredArticles: await getFeaturedArticles(),
    },
    revalidate: 3000,
  };
}

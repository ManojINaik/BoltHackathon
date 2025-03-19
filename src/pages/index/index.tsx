import React, { lazy, Suspense, useRef } from "react";
import { Navbar } from "src/components";
import { Layout } from "src/components/base";
import { useNavColour } from "src/utils/hooks/useNavColour";

const Hero = lazy(() => import("src/sections/Hero"));
const About = lazy(() => import("src/sections/About"));
const Stats = lazy(() => import("src/sections/Stats"));
const TalkingPoints = lazy(() => import("src/sections/TalkingPoints"));
const Testimonials = lazy(() => import("src/sections/Testimonials"));
const Leaders = lazy(() => import("src/sections/Leaders"));
const Sponsors = lazy(() => import("src/sections/Sponsors"));
const Footer = lazy(() => import("src/sections/Footer"));

const IndexPage: React.FC = () => {
  const leadersRef = useRef<HTMLDivElement>(null);

  const NAV = useNavColour(leadersRef);

  return (
    <Layout>
      <Navbar colour={NAV} />
      <Suspense fallback={<div />}>
        <Hero />
      </Suspense>
      <Suspense fallback={<div />}>
        <About />
      </Suspense>
      <Suspense fallback={<div />}>
        <Stats />
      </Suspense>
      <Suspense fallback={<div />}>
        <TalkingPoints />
      </Suspense>
      <Suspense fallback={<div />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<div />}>
        <div ref={leadersRef}>
          <Leaders />
        </div>
      </Suspense>
      <Suspense fallback={<div />}>
        <Sponsors />
      </Suspense>
      <Suspense fallback={<div />}>
        <Footer />
      </Suspense>
    </Layout>
  );
};

export default IndexPage;

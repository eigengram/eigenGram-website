// import { buttonVariants } from "@/components/ui/button";

// import Link from "next/link";

// export default async function Home() {
 
//   return <div>
//     <h1 className='text-4xl'>Home</h1>
//     <Link className ={buttonVariants()} href='/dashboard'>Open my dashboard</Link>
    
//   </div>;
// }
// import { AuroraBackgroundDemo } from "@/components/AuroraBackground";
import { ImageFold } from "@/components/back-ground";
// import { ImageFold1 } from "@/components/back-ground1";
import { ImageFold2 } from "@/components/back-ground2";
// import { ImageFold3 } from "@/components/back-ground3";
import { ImageFold5 } from "@/components/back-ground5";
import { BackgroundBeamsWithCollisionDemo } from "@/components/BackgroundBeamDemo";
import { CompareDemo } from "@/components/comparedemo2";
import  {Footer}  from "@/components/Footer";
// import TrustedPartners from "@/components/Logos";
import {  EigengramFold} from "@/components/LogoSection";
import  { ImageCarouselFold } from "@/components/carousel";
import { Timeline } from "@/components/ui/Timeline";
import { IncubatedAndTrustedFolds } from "@/components/ui/TrustedBy";
// import Image from "next/image";
// import { AnimatedTestimonialsDemo } from "@/components/AnimatedTestimonialDemo";
// import CustomSection from "@/components/CustomSection";
interface TimelineEntry {
  title: string;         // The title of each timeline entry
  content: React.ReactNode; // The detailed content, can be any JSX or text
}

const timelineData: TimelineEntry[] = [
  {
    title: "Alzhiemer",
    content: (
<div className="p-4 md:p-6 bg-gray-50 dark:bg-gray-900 shadow rounded-lg">
  <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed md:leading-loose">
    I began working on the project, researching the core requirements, and
    building the foundational architecture.
  </p>
</div>


    ),
  },
  {
    title: "Mpox (MonkeyPox)",
    content: (
      <div className="p-4 md:p-6 bg-gray-50 dark:bg-gray-900 shadow rounded-lg">
  <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed md:leading-loose">
  Repurposed drugs to find cure for possible pandemic. Analyzing Homolog of E9-A20-D4 of Vaccinia Virus to find novel pathways of drug discovery

  </p>
</div>

    ),
  },
  {
    title: "Kawasaki/ MISC-C/ Dengue",
    content: (
      <div className="p-4 md:p-6 bg-gray-50 dark:bg-gray-900 shadow rounded-lg">
  <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed md:leading-loose">
  Analyzing the biomarkers across biochemistry, inflammatory, cardiac and blood panels to identify differentiating markers in respective shock syndrome.

  </p>
</div>

    ),
  },
  {
    title: "Pancreatic Cancer",
    content: (
      <div className="p-4 md:p-6 bg-gray-50 dark:bg-gray-900 shadow rounded-lg">
  <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed md:leading-loose">
  Identifying the top driver genes in Pancreatic Cancer that can be used as potential targets for Drug Discovery

  </p>
</div>

    ),
  },
  {
    title: "Anti–Myeloid Leukemia",
    content: (
      <div className="p-4 md:p-6 bg-gray-50 dark:bg-gray-900 shadow rounded-lg">
  <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed md:leading-loose">
  Discovered scfv sequence that will potentially bind with CAR-NK for targeted therapies against Anti Myeloid Leukemia

  </p>
</div>

    ),
  },
  {
    title: "Breast Cancer",
    content: (
      <div className="p-4 md:p-6 bg-gray-50 dark:bg-gray-900 shadow rounded-lg">
  <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed md:leading-loose">
  Developed suite of AI applications from lesion segmentation to cancer detection across ultrasound images and histopathological slides
  </p>
</div>

    ),
  },
  

];

export default function Home() {
  return (
    <div> <ImageFold/>
          <BackgroundBeamsWithCollisionDemo />
         
          <EigengramFold/>
        
        
          <CompareDemo/>
          <Timeline data={timelineData}/>
          <ImageFold2/>
          <ImageCarouselFold/>
          {/* <AnimatedTestimonialsDemo/> */}
         
         
          {/* <CustomSection
          title="AI-centric solutions"
          subtitle="for human-centric medicine"
          description={`From the emergency department to primary care, we handle EHR documentation, 
            allowing clinicians to stay fully engaged with their patients. Our ambient AI captures the 
            conversation in the exam room and generates accurate, complete, and easy-to-read medical notes.`}
          buttonText="Explore Products"
          buttonLink="/products"
          imageSrc="image/image4.jpg" // Replace with your image path
          primaryColor="#4F46E5" // Custom title color
          buttonColor="#4F46E5" // Custom button color
        /> */}

         
          <IncubatedAndTrustedFolds/>
          {/* <TrustedPartners/> */}
          <ImageFold5/>
          <Footer/>
          
          {/* <AuroraBackgroundDemo/> */}
         
          
          
          {/* <ImageFold1/> */}

      {/* <ImageFold5/> */}
  
{/*       
      <ImageFold3/> */}


{/* <SloganSection/> */}

{/* <SloganSection/> */}


{/* <SloganSection/> */}
{/* // <CompareDemo/> */}
{/* <SloganSection/> */}

{/* <SloganSection/> */}




    </div>
    
  );
}

import Head from "next/head";
import { SiC, SiDocker, SiGooglecloud, 
         SiJava, 
         SiJavascript, 
         SiKubernetes,
         SiMongodb,
         SiMysql,
         SiPostgresql,
         SiPrometheus,
         SiPython,
         SiReact,
         SiSpringboot,
         SiVuedotjs
} from "react-icons/si";
import ingunn from "../public/portfolio2.jpeg";
import microservice from "../public/microservice2.jpg";
import dashboard from "../public/dashboard.jpg";
import baerekraft from "../public/baerekraft2.jpeg";
import telegrambot from "../public/telegram-bot.png";

import Image from "next/image";
import PortfolioBox from "../components/portfoliobox";
import NavbarEl from "../components/navbarEl";
import SocialIcons from "../components/socialIcons";
import Techbox from "../components/techbox";
export default function Home() {

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white-500" >
        <div className="bg-rose-100 md:px-20 lg:px-40 px-1">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <ul className="flex items-center">

                <li>
                  <NavbarEl name="Projects" linksTo="my-projects"></NavbarEl>
                </li>
                <li>
                  <NavbarEl name="Toolbox" linksTo="my-toolbox"></NavbarEl>
                </li>
             
            </ul>
          </nav>
          <div className="mx-auto rounded-full w-50 h-50 relative overflow-hidden md:mt-20 md:h-72 md:w-72 h-36 w-36" id="home" >
              <Image src={ingunn} layout="fill" objectFit="cover" />
            </div>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-indigo-700 font-medium md:text-6xl">
              Hi, I'm Ingunn.
            </h2>
            <p className="text-md py-5 leading-8 text-gray-800 max-w-xl mx-auto md:text-xl">
            I'm an incubating Software Engineer currently pursuing a Master of Computer Science at TU Berlin. You can find me at the bouldering gym or in the nearest lake.
            </p>
            <SocialIcons></SocialIcons>
            
          </div>
        </section>
        </div>
        <div className="md:px-20 lg:px-40 px-10" id="my-projects">
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 text-indigo-700">Projects</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              Over the years, I've built numerous student and personal projects. Here you can find some of my favourites and all the most recent ones.
            </p>
          </div>

          <div className="flex flex-col flex-wrap sm:flex-row gap-10 py-10">
          
            <PortfolioBox
              title={"Elastic Scaling of a Microservice Application"}
              aboutProject={"Implemented Prometheus metric collection for our bottleneck microservices, and autoscaling with KEDA."}
              imagePath={microservice}
              icons={[SiGooglecloud, SiKubernetes, SiPrometheus]}
              link="https://git.tu-berlin.de/cnae-group-8/robot-shop-performance-scalability"
            ></PortfolioBox>

            <PortfolioBox
              title={"Mensa Telegram Bot"}
              aboutProject={"Fetches the weekly menu from the Mensa (German cafeteria) and sends it to you once a week."}
              imagePath={telegrambot}
              icons={[SiPython]}
              link="https://github.com/ingunnaf/mensa_bot"
            ></PortfolioBox>

            <PortfolioBox
              title={"6G Dashboard - Backend"}
              aboutProject={"Built the backend for a dashboard that allows monitoring 6G components and their communication."}
              imagePath={dashboard}
              icons={[SiJava, SiSpringboot, SiDocker]}
              link="https://git.tu-berlin.de/sandro/iosl_ss23"
            ></PortfolioBox>
            
            <PortfolioBox
              title={"Sustainability Portal - Backend"}
              aboutProject={"A Sustainability Portal developed for the Norwegian Brønnøysundsregistrene - showcasing public data about sustainability in the fish farming industry in Norway."}
              imagePath={baerekraft}
              icons={[SiPython, SiPostgresql, SiDocker]}
              link="https://github.com/brreg/sommercamp2022"
            ></PortfolioBox>

          </div>
          
        </section>
        </div>

        <div id="my-toolbox" className="md:px-20 lg:px-40 px-10 mb-10">
        <section>
            <h3 className="text-3xl py-1 text-indigo-700">Toolbox</h3>
            <p className="text-md py-2 leading-8 text-gray-800">I've used numerous languages and tools in my projects, but these are the ones I am most proficient with.</p>
          
          <div className="familiar-technologies flex flex-wrap sm:flex-row">

            <Techbox name="Java & Springboot" icon={SiSpringboot}></Techbox>
            <Techbox name="Python & Flask" icon={SiPython}></Techbox>
            <Techbox name="Postgresql" icon={SiPostgresql}></Techbox>
            <Techbox name="Mongodb" icon={SiMongodb}></Techbox>
            <Techbox name="Docker" icon={SiDocker}></Techbox>
            <Techbox name="Kubernetes" icon={SiKubernetes}></Techbox>

          </div>

          <p className="less-familiar-technologies text-md py-2 leading-8 text-gray-800">I also use these sometimes, but with a higher frequency of Stackoverflow visits and ChatGPT queries.</p>
          <div className="flex flex-wrap sm:flex-row">

            <Techbox name="C" icon={SiC}></Techbox>
            <Techbox name="React" icon={SiReact}></Techbox>
            <Techbox name="Vue" icon={SiVuedotjs}></Techbox>
            <Techbox name="MySQL" icon={SiMysql}></Techbox>
            <Techbox name="Javascript" icon={SiJavascript}></Techbox>
            <Techbox name="Google Cloud" icon={SiGooglecloud}></Techbox>

          </div>
        </section>
        </div>

        <div className="footer bg-rose-100 md:px-20 lg:px-40 px-10 ">
          <section>
            <div className=" flex justify-center gap-16 py-3 ">
              <h3 className="text-lg font-medium pt-8 pb-2 text-indigo-700">Get in touch via email or go to my socials with the links below.</h3>    
            </div>
            <SocialIcons></SocialIcons>
          </section>
        </div>
        
      </main>
    </div>
  );
}

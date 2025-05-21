import ArticleHeader from "@/app/components/article/ArticleHeader";
import ArticleImage from "@/app/components/article/ArticleImage";
import Checklist from "@/app/components/article/Checklist";
import Coding from "@/app/components/article/Coding";
import InlineLink from "@/app/components/article/InlineLink";
import Keywords from "@/app/components/article/Keywords";
import Paragraph from "@/app/components/article/Paragraph";
import ProjectInfo from "@/app/components/article/ProjectInfo";
import ReturnButton from "@/app/components/article/ReturnButton";
import ParallaxImage from "@/app/components/ParallaxImage";

import codeSnippets from "./CodeSnippets";

/*

Context
Research


*/


export default function Honesty() {
    return (
        <div className="mx-5 pt-20 flex flex-col items-center gap-20">
            <ArticleHeader
                year={2025}
                month="May"
                title="Honesty"
            />

            <ProjectInfo
                team={[
                    {
                        name: "Luca Denhez",
                        avatar: "/avatars/luca.jpg"
                    },
                ]}
                tools={[
                    {
                        name: "React",
                        avatar: "/tools/react.svg"
                    },
                    {
                        name: "Next.js",
                        avatar: "/tools/nextjs.svg"
                    },
                    {
                        name: "Figma",
                        avatar: "/tools/figma.svg"
                    },
                ]}
                services={["Product Design", "UI / UX Design", "Web Development", "User Authentication"]}
            />

            <div className="w-full h-screen mb-20">
                <ReturnButton />
                <ParallaxImage image="/works/honesty/mockups/front_iphone.png" />
            </div>

            <Paragraph title="Context">
                {
                    `When looking for a secondhand car on Craigslist, Facebook Marketplace, or OfferUp, I always run into the same problem. Scams.
                    Maybe the cars odometer has been rolled back, or 'the hood just won't latch' is another way to say the car had a front-end collision. You never know.
                    
                    The best way to learn about the history of a vehicle is with a VIN report like Carfax. However, Carfax does not account for any work done independantly without a shop, and costs money to run each report.
                    
                    I wanted a way to demonstrate all the work I've done to my car, to show potential buyers it was thoughtful, legitimate, and no funny business was happening.`
                }
            </Paragraph>

            <Paragraph title="Research">
                {
                    `Existing service history websites like Carfax get all their information via the cars VIN number, which is not sufficient because it only returns work done by official shops.
                    
                    There are also websites for showing off your cars modifications, that allows you to put in images of your car, modifications, mileage, etc.
                    
                    This is closer, however it is not a simple, one-page reference sheet for a potential buyer. And there isn't a capability to include repairs, OEM part links, time took, etc.
                    `
                }
            </Paragraph>

            <div className="h-[50rem] w-2/3 bg-gray-200 flex items-center justify-center">
                <p>Image of existing tool comparisons</p>
            </div>

            <Paragraph title="User's Needs">
                {
                    `I have a lot of friends who scroll through Facebook Marketplace looking at cars they can't afford, during class.
                    I asked them what they wanted to help make a secondhand car purchase feel more secure.

                    This is what I learned.
                    `
                }
            </Paragraph>

            <Keywords keywords={["No BS", "Links to OEM parts used", "Mobile friendly", "Unlimited images"]} />

            <Paragraph>
                {
                    `Some enthusiast focused collectives like Built for Backroads, Cars & Bids, and Bring a Trailer implement these features, however they are auction websites meant for the buyer to buy the car right there.
                    
                    I want this to be seamlessly integrated into existing secondhand sites like Craigslist and Marketplace, a link to the service report in the listing description.
                    `
                }
            </Paragraph>

            <Paragraph title="Features">
                {
                    ``
                }
            </Paragraph>

            <Checklist items={{
                positive: [
                    "Personal service history",
                    "Modification history",
                    "Engine, transmission, and car-specific information",
                    "Links to OEM parts used",
                    "Description of what the service is",
                    "Comprehensive cost breakdown",
                    "Interactive, 3D LIDAR scan of vehicle",
                    "Unlimited photos",
                    "Works well on phones, tablets, and computers"
                ],
                negative: [
                    "Limit on photo count",
                    "Pixelated, low resolution photos",
                    "Payment"
                ]
            }}
            />

            <Paragraph title="Flow">
                {
                    `Authentication is done through Firebase in order to use Firestore to store the users images.
                    
                    For each vehicle the user is selling, a short unique identifier is generated on the server-side, and is used in the URL to share the car with others.`
                }
            </Paragraph>

            <div className="h-[40rem] w-2/3 bg-gray-200 flex items-center justify-center">
                <p>Image of flow</p>
            </div>

            <div className="h-[20rem] w-2/3 bg-gray-200 flex items-center justify-center">
                <p>Image of UUID shareable URL</p>
            </div>

            <Paragraph title="Design Language">
                {
                    `To ensure the site is easily viewable on mobile devices, I opted to use a Bento style layout of cards. As the device size narrows, rows turn into columns, and the site is responsive on all screen sizes.
                    
                    Thoughtfully chosen bright colors alert the user for expensive repairs, and consistent font weights make the site easy to digest.`
                }
            </Paragraph>

            <div className="h-[40rem] w-2/3 bg-gray-200 flex items-center justify-center">
                <p>Figma Design Language</p>
            </div>

            <div className="flex gap-10 w-2/3">
                <div className="h-[40rem] w-full bg-gray-200 flex items-center justify-center">
                    <p>Screen</p>
                </div>
                <div className="h-[40rem] w-full bg-gray-200 flex items-center justify-center">
                    <p>Screen</p>
                </div>
                <div className="h-[40rem] w-full bg-gray-200 flex items-center justify-center">
                    <p>Screen</p>
                </div>
            </div>

            <Paragraph title="Thoughtfully Coded">
                {
                    `Honesty is fully open-source, and free for personal use.
                    
                    Reusable components throughout the codebase ensure if new features are added, it is easy to adhere to the design language.
                    The photo carousels, 3D viewer, service / modification entries, and car information are all fully dynamic, and can be easily modified by changing the passed-in props.
                    `
                }
            </Paragraph>

            <div className="flex flex-col gap-20 items-center ">
                <div className="flex gap-20">
                    <Coding
                        className="rotate-[3deg]"
                        language={codeSnippets.titleCard.language}
                        filename={codeSnippets.titleCard.filename}
                        code={codeSnippets.titleCard.code}
                    />
                    <Coding
                        className="rotate-[-3deg]"
                        language={codeSnippets.photoCarousel.language}
                        filename={codeSnippets.photoCarousel.filename}
                        code={codeSnippets.photoCarousel.code}
                    />
                </div>
                <div className="flex flex-col gap-20 items-center">
                    <Coding
                        className="rotate-[-2deg]"
                        language={codeSnippets.serviceEntry.language}
                        filename={codeSnippets.serviceEntry.filename}
                        code={codeSnippets.serviceEntry.code}
                    />
                    <Coding
                        className="rotate-[2deg]"
                        language={codeSnippets.modificationEntry.language}
                        filename={codeSnippets.modificationEntry.filename}
                        code={codeSnippets.modificationEntry.code}
                    />
                </div>
            </div>

            <Paragraph title="User Interaction" />

            <div className="w-full h-screen mb-20">
                <ParallaxImage image="/works/honesty/mockups/front_laptop.png" />
            </div>

            <div className="flex flex-col sm:flex-row gap-10 items-center mb-20">
                <ArticleImage image="/works/honesty/flow/iphone/home.png" />
                <ArticleImage image="/works/honesty/flow/iphone/modifications_history.png" />
                <ArticleImage image="/works/honesty/flow/iphone/service_details.png" />
            </div>

            <div className="h-screen w-full space-y-5 mb-[65rem]">
                <ParallaxImage image="/works/honesty/mockups/front_half_laptop_navy.png" />
                <ParallaxImage image="/works/honesty/mockups/laptop_perspective_narrow.png" />
            </div>

            <Paragraph title="Next Steps">
                {
                    `This project has been super helpful in assisting me to sell my car. I sent the link to each interested buyer, and they appreciated the thorough detail of what's been done to the car.
                    
                    However, I would love to ask the community what features they would like. I want the process of adding your car and its information as simple as possible, so anyone can do it regardless of age or ability.`
                }
            </Paragraph>

            <Paragraph title="Reflection">
                {
                    `This project started as just a simple, single-page website to give to a buyer who'd be interested in buying my Mini Cooper.
                    I have put an immense amount of work into that car, engine work, suspension work, interior dissassembly, etc.
                    
                    But as I was working on the project instead of listening to my lecture... a friend saw it and said I should make it for anyone to sell their car. I had kind of forgotten how many people I know scrolling through Marketplace for used cars all the time, so I started working.

                    Even though this project isn't perfect; it could feel more natural, show more information, I really got to practice my React skills and it challenged me to build thoughtful, reusable components that I hadn't thought much of before.

                    It's really fun to be at the point where you can take any idea in your head, and just start turning it into <div>'s and flexboxes.
                    I spent a looooong time getting the hang of Tailwind and React, but I love learning it and I look forward to what's next.

                    Thanks so much for taking the time to look at my project!
                    Luca.
                    `
                }
            </Paragraph>
            <div className="h-[20rem] bg-gray-200" />
        </div>
    );
}

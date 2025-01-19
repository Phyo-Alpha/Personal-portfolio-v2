import SectionWrapper from "@/components/hoc/SectionWrapper";

function AboutMe() {
    return (
        <section className="space-y-12">
            <div className="space-y-6 text-xl">
                <h1 className="font-bold text-5xl underline underline-offset-4">About Me</h1>
                <p>My journey with web development started during my university years where I was learning about data processing and analysis. During one of the projects, I contributed to cinema application website where I use Django and HTML template to build the app. This is where I discovered the joy of creating websites and as such shift my career interest from data analysis to web development.</p>
                <p>That interest further developed when I discovered this amazing youtube channel called Javascript Mastery. What separate that channel from the rest of the online tutorial is that it is a project focus learning so I was learning about coding practices, popular library and technologies in web industries such as React and NEXT JS, while at the same time was having fun building the websites.</p>
                <h2 className="font-bold text-3xl underline">Technologies</h2>
                <p>I'm particularly proficient in using React and Next.js to create responsive and highly optimized web applications. I'm well-versed in leveraging server-side actions and components to build robust web applications. Additionally, I have extensive experience in creating highly customizable components using Redux UI and ShadCN library.</p>
                <p>TypeScript is another technology I'm very comfortable with, having used it to develop websites with minimal bugs. I find that it helps me catch errors early and improves the overall quality of my code.</p>
            </div>
            {/* <div className="space-y-6 text-xl">
                <h2 className="font-bold text-3xl underline">Work Experience</h2>
                <p>On March of 27th, I got into an interview with the boss of the current company I working</p>
            </div> */}
            <div>
                <h2></h2>
            </div>
        </section>
    )
}

export default SectionWrapper({ component: <AboutMe />, id: "about-me" });
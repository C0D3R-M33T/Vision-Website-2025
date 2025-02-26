import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  Are we just another random{" "}
                </span>
                HACKATHON ???
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
              Vision is a 36-hour project development hackathon designed to inspire creativity, innovation, and hands-on learning. Unlike traditional hackathons that focus on industry-sponsored problem statements, Vision empowers participants to work on their own ideas, fostering originality and technical excellence. With two challenging rounds, the event encourages students to step out of their comfort zones, collaborate, and transform their concepts into functional projects. Vision is more than just a competition—it’s a space for learning, growth, and showcasing skills in teamwork, leadership, and problem-solving. Whether you’re a coder, designer, or strategist, this hackathon provides the perfect opportunity to bring your vision to life.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};

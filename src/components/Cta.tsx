import { Button } from "./ui/button";

export const Cta = () => {
  return (
    <section
      id="cta"
      className="bg-muted/50 py-16 my-24 sm:my-32"
    >
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold ">
            All Your
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              Ideas & Innovation{" "}
            </span>
            In One Hackathon
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
          Vision gives you the freedom to explore, experiment, and build projects that matter. With no restrictive problem statements, it’s a space to innovate, collaborate, and turn ideas into reality. More than a competition, it's a launchpad for growth and creativity!
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
          <Button className="w-full md:mr-4 md:w-auto">Register now</Button>
        </div>
      </div>
    </section>
  );
};

import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import brainerGif from "../assets/brainer.gif";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10 relative">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              VISION
            </span>{" "}
            is what you
          </h1>{" "}
          have{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              been
            </span>{" "}
            waiting for.
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          A platform to build, innovate, and transform ideas into reality.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3">Get Started</Button>

          <a
            rel="noreferrer noopener"
            href="https://unstop.com/p/the-vision-the-cypher-club-muj-883340"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Register Now
            <ArrowTopRightIcon className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>

      {/* GIF Section - Hidden on Mobile */}
      <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px]">
  <img
    src="/src/assets/brainer.gif" // Correct path for Vite
    alt="Animated Brainstorming"
    className="w-full h-auto rounded-lg"
  />
</div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
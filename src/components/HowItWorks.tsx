import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Ideate & Register",
    description:
      "Form a team, brainstorm innovative ideas, and register for the hackathon to kickstart your journey.",
  },
  {
    icon: <MapIcon />,
    title: "Build & Develop",
    description:
      "Code, design, and develop your project within 36 hours, collaborating with your team to bring your vision to life.",
  },
  {
    icon: <PlaneIcon />,
    title: "Submit & Pitch",
    description:
      "Showcase your project by submitting a working prototype and presenting your idea to the judges.",
  },
  {
    icon: <GiftIcon />,
    title: "Evaluate & Win",
    description:
      "Top projects will be evaluated based on innovation, execution, and impact, with winners receiving exciting rewards!",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        How your{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Journey{" "}
        </span>
        will look like
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
      From Idea to Innovation: Your Vision, Your Code, Your Success!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

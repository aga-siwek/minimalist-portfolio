import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import { Button } from "@/components/ui/button.tsx";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export type Props = {
  name: string;
  imageCard: string;
  badges: string[];

  cardTitle: string;
  cardDescription: string;

  dialogTitle: string;
  dialogDescription: string;
  mainImage: string;

  content: Record<string, string>;

  github: string;
  preview: string;
};

import { SquareArrowOutUpRight } from "lucide-react";

function PortfolioCard(props: Props) {
  const {
    imageCard,
    badges,
    cardTitle,
    cardDescription,
    dialogTitle,
    dialogDescription,
    mainImage,
    content,
    github,
    preview,
  } = props;
  console.log("mage card", imageCard);
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src={imageCard}
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
      />
      <CardHeader>
        <CardAction className="flex flex-col gap-4"></CardAction>
        <div>
          {badges?.map((badge) => (
            <Badge key={`main ${badge}`} variant="secondary">
              {badge}
            </Badge>
          ))}
        </div>
        <CardTitle>{cardTitle}</CardTitle>
        <CardDescription>{cardDescription}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full">Scrollable Content</Button>
          </DialogTrigger>
          <DialogContent className="max-w-[90vw] md:max-w-[70vw] lg:max-w-3/5 lg:p-12 rounded-lg">
            <DialogHeader>
              <DialogTitle>{dialogTitle}</DialogTitle>
              <DialogDescription>{dialogDescription}</DialogDescription>
            </DialogHeader>
            <div className="no-scrollbar -mx-4 max-h-[50vh] overflow-y-auto px-4">
              <div className=" flex flex-col gap-4 lg:gap-8">
                <div className="flex flex-wrap justify-start gap-4 w-full">
                  {badges?.map((badge) => (
                    <Badge key={`dialog ${badge}`} variant="secondary">
                      {badge}
                    </Badge>
                  ))}
                </div>
                {mainImage && (
                  <img
                    src={mainImage}
                    alt="mockup project"
                    className="rounded-lg"
                  />
                )}
                <div className="flex gap-4">
                  <a href={github} target="blank">
                    <Button>
                      view code{" "}
                      <SquareArrowOutUpRight className="text-primary-foreground" />{" "}
                    </Button>
                  </a>
                  <a href={preview}>
                    <Button variant="outline">
                      view live site{" "}
                      <SquareArrowOutUpRight className="text-accent-foreground" />{" "}
                    </Button>
                  </a>
                </div>

                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-4">
                    {content?.text1 && <p> {content.text1} </p>}
                    {content?.image1 && (
                      <img src={content.image1} alt="mockup project" />
                    )}
                    {content?.text2 && <p> {content.text2} </p>}
                    {content?.image2 && (
                      <img src={content.image2} alt="mockup project" />
                    )}
                    {content?.text3 && <p> {content.text3} </p>}
                    {content?.image3 && (
                      <img src={content.image3} alt="mockup project" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}
export default PortfolioCard;

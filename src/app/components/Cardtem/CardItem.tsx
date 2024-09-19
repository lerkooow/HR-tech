import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

interface CardItemProps {
  title: string;
  image: string;
  description: string;
  number: string;
  more?: string;
}

export function CardItem({ title, image, description, more, number }: CardItemProps) {
  return (
    <Card className="w-[264px] h-[168px] flex flex-col items-center justify-center bg-[#F0F3F8]">
      <CardHeader className="items-center p-0">
        <CardTitle className="font-semibold">{title}</CardTitle>
        <div className="flex items-center space-x-2 h-[30px] pb-2">
          <Image src={image} width={30} height={30} alt="icon" />
          <p className="text-3xl font-semibold">{number}</p>
        </div>
      </CardHeader>
      <CardContent className="font-semibold p-0">
        <p>{description}</p>
        {more && <p className="text-[#7C96B1]">{more}</p>}
      </CardContent>
    </Card>
  );
}

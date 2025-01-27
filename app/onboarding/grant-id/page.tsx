import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import VideoGif from "@/public/video.gif";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CalendarCheck2 } from "lucide-react";

export default function OnboardingrouteTwo() {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>You are almost done!</CardTitle>
          <CardDescription>
            We have to now connect your calendar to your account
          </CardDescription>
          <Image src={VideoGif} alt="Video" className="w-full rounded-xl" />
        </CardHeader>
        <CardContent>
          <Button asChild className="w-full">
            <Link href="/api/auth">
              <CalendarCheck2 className="mr-2 size-4" />
              Connect Calendar to your account.
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

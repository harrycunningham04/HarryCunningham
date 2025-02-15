import { EditEventForm } from "@/app/components/EditEventTypeForm";
import prisma from "@/app/lib/db";
import { notFound } from "next/navigation";

async function getData(eventTypeId: string) {
  const data = await prisma.eventType.findUnique({
    where: {
      id: eventTypeId,
    },
    select: {
      title: true,
      description: true,
      duration: true,
      url: true,
      id: true,
      videoCallSoftware: true,
    },
  });

  if (!data) {
    return notFound();
  }

  return data;
}

interface props {
  params: Promise<{ eventTypeId: string }>;
}

// @ts-ignore
export default async function EditRoute({ props }: props) {

const {eventTypeId} = await props.params;

  const data = await getData(eventTypeId);

  console.log(data.videoCallSoftware);

  return (
    <EditEventForm
      callProvider={data.videoCallSoftware}
      id={data.id}
      title={data.title}
      description={data.description}
      duration={data.duration}
      url={data.url}
    />
  );
}

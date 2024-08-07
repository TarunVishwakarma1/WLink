import { TracingBeam } from "@/components/ui/tracing-beam";

export default function Home() {

    return (
        <div>
        <TracingBeam>
          <div className="flex flex-col items-center object-contain">
            Hello
          </div>
        </TracingBeam>
        </div>
      );
    }
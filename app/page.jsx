import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-[90vh] flex-col lg:flex-row gap-10 items-center justify-center p-12">
      <Dialog>
        <DialogTrigger className="p-24 rounded-xl text-lg text-white bg-slate-900">
          Measure Land Area
        </DialogTrigger>
        <DialogContent className="bg-slate-500">
          <DialogHeader className="h-[20rem] flex items-start justify-center">
            <DialogTitle className="mb-8 text-2xl">
              Select to continue
            </DialogTitle>
            <Link
              href="/map"
              className="w-full bg-slate-900 text-white rounded-lg"
            >
              <Button className="w-full py-14 text-lg text-start">
                Measure by Auto Walk
              </Button>
            </Link>
            <Link
              href="/map"
              className="w-full bg-slate-900 text-white rounded-lg"
            >
              <Button className="w-full py-14 text-lg">
                Measure by Marking
              </Button>
            </Link>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger className="p-24 rounded-xl text-lg text-white bg-slate-900">
          Calculate Land Area
        </DialogTrigger>
        <DialogContent className="bg-slate-500">
          <DialogHeader className="h-[20rem] flex items-start justify-center">
            <DialogTitle className="mb-8 text-2xl">
              Select to continue
            </DialogTitle>
            <Link
              href="/map"
              className="w-full bg-slate-900 text-white rounded-lg"
            >
              <Button className="w-full py-14 text-lg">convert values</Button>
            </Link>

            <Link
              href="/map"
              className="w-full bg-slate-900 text-white rounded-lg"
            >
              <Button className="w-full py-14 text-lg">
                Calculate using points on map
              </Button>
            </Link>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </main>
  );
}

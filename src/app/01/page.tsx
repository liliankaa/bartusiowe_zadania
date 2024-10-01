import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Page() {
  return (
    <main className="flex h-screen w-screen items-center justify-center p-10">
      <div className="relative flex h-[320px] w-full flex-col justify-between rounded-md border-gray-100 shadow-md sm:w-[400px]">
        <Image
          src={"/kitku.png"}
          alt="kitku"
          width={300}
          height={80}
          className="h-[80px] w-full rounded-t-md object-cover"
        />
        <Image
          className="absolute left-3 top-8 rounded-2xl"
          src={"/ua.png"}
          alt="ua"
          height={80}
          width={80}
        />
        <div className="p-4 text-xs text-gray-500">
          <p className="font-medium">Kitku</p>
          <h2 className="my-1 text-base font-medium text-black">
            Bardzo fajny kot nie do zastapienia
          </h2>
          <span className="font-medium">Applications: </span>
          <span className="text-gray-400">Dog food</span>
          <br />
          <span className="font-medium">Product Families: </span>
          <span className="text-gray-400">Food, idk</span>
          <br />
          <span className="font-medium">End Uses: </span>
          <span className="text-gray-400">Printing money</span>
        </div>
        <div className="flex h-[60px] w-full items-center space-x-4 border-t-2 border-gray-100 px-4">
          <button className="flex h-8 w-8 items-center justify-center rounded-md bg-gray-200">
            <ChevronDown size={16} strokeWidth={3} />
          </button>
          <button className="h-8 flex-1 rounded-md bg-gray-200 text-sm font-medium">
            View Product
          </button>
        </div>
      </div>
    </main>
  );
}

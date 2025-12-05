import { useState } from "react";
import { Sheet } from 'react-modal-sheet';
import Image from "next/image";

export default function TooltipButton({ category, isLast, article }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className={`${isLast ? "col-span-2" : ""}`}>
      <Sheet isOpen={modalOpen} onClose={() => setModalOpen(false)} modalEffectRootId="root">
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            <div className="my-10 sm:mx-20 mx-5">
              {article}
            </div>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </Sheet>

      <button
        onClick={() => setModalOpen(true)}
        className={`w-full hover:cursor-pointer rounded-xl py-3 px-5 bg-gray-100 flex gap-5 justify-between items-center ${isLast ? "justify-center" : ""}`}
      >
        <div className="bg-white p-4 rounded-full">
          <div className="w-5 h-5 flex items-center justify-center">
            <Image
              src={`/icons/${category.toLowerCase()}.svg`}
              alt={`${category} icon`}
              width={0}
              height={0}
              className="w-full h-full"
            />
          </div>
        </div>

        <p className="font-medium text-sm">{category}</p>
      </button>
    </div>
  );
}
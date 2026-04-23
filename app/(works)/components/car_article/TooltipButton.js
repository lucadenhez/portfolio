import { useState } from "react";
import { Sheet } from 'react-modal-sheet';
import Image from "next/image";

export default function TooltipButton({ category, isLast, icon, articles }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className={`${isLast ? "col-span-2" : ""}`}>
      <Sheet isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        modalEffectRootId="root"
      >
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            {articles.length > 0 ? (<div className="my-10 sm:mx-20 mx-5 flex flex-col gap-2">
              {articles.map((article, index) => {
                const dateObj = new Date(article.date);
                const formattedDate = dateObj ? `${dateObj.getMonth() + 1}.${dateObj.getDate()}.${dateObj.getFullYear()}` : "";

                return (
                  <button
                    className="hover:cursor-pointer text-black w-full bg-gray-100 p-3 flex justify-center gap-10 items-center"
                    key={index}
                  >
                    <p>{article.title}</p>
                    <p>{article.date}</p>
                  </button>
                )
              })}
            </div>)
              :
              (
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-xl tracking-tight text-black/30">No articles here yet. Come back later!</p>
                </div>
              )
            }
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
              src={icon}
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
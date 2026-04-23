"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Sheet } from 'react-modal-sheet';

const REST_SIZE = 16;
const HOVER_SIZE = 80;
const ICON_SCALE = 0.4;

export function Tooltip({ x, y, category, icon, articles }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);
    window.addEventListener("resize", updateWidth);
    updateWidth();
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div>
      <Sheet isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        modalEffectRootId="root"
        style={{ marginLeft: "5rem", marginRight: "5rem" }}
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

      {width > 768 ?
        (<motion.button
          onClick={() => setModalOpen(true)}
          className="absolute flex items-center justify-center overflow-hidden"
          style={{
            left: x,
            top: y,
            transform: "translate(-50%, -50%)",
          }}
          initial="rest"
          whileHover="hover"
          animate="rest"
          variants={{
            rest: {
              width: REST_SIZE,
              height: REST_SIZE,
              borderRadius: "9999px",
              backgroundColor: "#ffffff",
              boxShadow: "none",
              transition: { type: "spring", stiffness: 260, damping: 30 },
              cursor: 0
            },
            hover: {
              width: HOVER_SIZE,
              height: HOVER_SIZE,
              borderRadius: "9999px",
              backgroundColor: "#ffffff",
              boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
              transition: { type: "spring", stiffness: 220, damping: 20 },
              cursor: "pointer"
            },
          }}
        >
          <motion.div
            className="flex items-center justify-center"
            variants={{
              rest: {
                opacity: 0,
                scale: 0.4,
                transition: { duration: 0.12 },
              },
              hover: {
                opacity: 1,
                scale: 1,
                transition: { type: "spring", stiffness: 300, damping: 22, delay: 0.05 },
              },
            }}
          >
            <motion.div
              style={{
                width: `${HOVER_SIZE * ICON_SCALE}px`,
                height: `${HOVER_SIZE * ICON_SCALE}px`,
              }}
              className="flex items-center justify-center"
            >
              <Image
                src={icon}
                alt={`${category} icon`}
                width={HOVER_SIZE * ICON_SCALE}
                height={HOVER_SIZE * ICON_SCALE}
                className="w-full h-full"
              />
            </motion.div>
          </motion.div>
        </motion.button>)
        :
        (<div
          className="bg-white p-3 rounded-full absolute flex items-center justify-center overflow-hidden"
          style={{
            left: x,
            top: y,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="flex items-center justify-center w-4 h-4">
            <Image
              src={icon}
              alt={`${category} icon`}
              width={0}
              height={0}
              className="w-full h-full"
            />
          </div>
        </div>
        )}
    </div>
  );
}

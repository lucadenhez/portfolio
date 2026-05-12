"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";
import { motion, AnimatePresence } from "framer-motion";
import photosData from "../data/photos.json";
import ShimmerImage from "../components/ShimmerImage";
import ScrollText from "../components/ScrollText";

export default function Photography() {
  const [index, setIndex] = useState(-1);

  /**
   * DYNAMIC CHUNKING LOGIC
   * Transforms [p1, p2(hero), p3, p4] into:
   * [ {type: 'grid', data: [p1]}, {type: 'hero', data: p2}, {type: 'grid', data: [p3, p4]} ]
   */
  const sections = useMemo(() => {
    const result = [];
    let currentGrid = [];

    photosData.forEach((photo) => {
      if (photo?.hero) {
        // Push the accumulated grid before this hero
        if (currentGrid.length > 0) {
          result.push({ type: "grid", data: [...currentGrid] });
          currentGrid = [];
        }
        // Push the hero as its own unique section
        result.push({ type: "hero", data: photo });
      } else {
        currentGrid.push(photo);
      }
    });

    // Clean up remaining photos
    if (currentGrid.length > 0) {
      result.push({ type: "grid", data: currentGrid });
    }

    return result;
  }, []);

  const columns = (containerWidth) => {
    if (containerWidth < 640) return 1;
    if (containerWidth < 1024) return 2;
    return 3;
  };

  const currentPhoto = index >= 0 ? photosData[index] : null;

  // Utility to find original index for the lightbox
  const handlePhotoClick = (photoId) => {
    const originalIndex = photosData.findIndex((p) => p.id === photoId);
    setIndex(originalIndex);
  };

  return (
    <div className="min-h-screen bg-white p-5 md:p-15">
      <header className="mb-12">
        <ScrollText className="text-5xl" delay={1}>Photos</ScrollText>
      </header>

      <main className="flex flex-col gap-12 md:gap-24">
        {sections.map((section, sIdx) => (
          <section key={`section-${sIdx}`}>
            {section.type === "grid" ? (
              <MasonryPhotoAlbum
                photos={section.data}
                columns={columns}
                spacing={20}
                onClick={({ photo }) => handlePhotoClick(photo.id)}
                render={{
                  image: (props, { photo }) => (
                    <div className="relative group cursor-zoom-in">
                      <ShimmerImage photo={photo} />
                    </div>
                  ),
                }}
              />
            ) : (
              <div className="w-full flex justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full relative overflow-hidden cursor-zoom-in group"
                  onClick={() => handlePhotoClick(section.data.id)}
                >
                  <ShimmerImage
                    photo={section.data}
                    fill
                    className="object-contain transition-transform duration-1000 group-hover:scale-105"
                  />
                  {/* Hero Overlay Details */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  <div className="absolute sm:bottom-10 bottom-5 sm:left-10 left-5 text-white">
                    <p className="sm:text-sm text-xs font-medium uppercase text-white opacity-80">Featured</p>
                    <h1 className="sm:text-3xl text-2xl">{section.data.location}</h1>
                  </div>
                </motion.div>
              </div>
            )}
          </section>
        ))}
      </main>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {currentPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIndex(-1)}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/98 p-5 lg:px-20 cursor-zoom-out"
          >
            <div className="relative w-full h-full flex flex-col lg:flex-row gap-10 items-center">
              <div className="relative w-full h-3/4 lg:h-full lg:w-3/4">
                <Image
                  src={currentPhoto.src}
                  alt="Focused"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="w-full lg:w-1/4 space-y-6 text-black"
              >
                <div>
                  <label className="text-[10px] uppercase text-gray-400 block mb-1">Location</label>
                  <p className="text-xl">{currentPhoto.location}</p>
                </div>
                <div className="grid grid-cols-2 gap-y-6 border-t border-gray-100 pt-6">
                  <div>
                    <label className="text-[10px] uppercase text-gray-400 block mb-1">Camera</label>
                    <p className="text-sm">{currentPhoto.camera}</p>
                  </div>
                  <div>
                    <label className="text-[10px] uppercase text-gray-400 block mb-1">Lens</label>
                    <p className="text-sm">{currentPhoto.lens}</p>
                  </div>
                  <div>
                    <label className="text-[10px] uppercase text-gray-400 block mb-1">Exposure</label>
                    <p className="text-sm">{currentPhoto.aperture} @ {currentPhoto.shutter}</p>
                  </div>
                  <div>
                    <label className="text-[10px] uppercase text-gray-400 block mb-1">Captured</label>
                    <p className="text-sm">{currentPhoto.date}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="h-[10rem]" />

      <footer className="w-full flex items-center justify-center">
        <p className="text-black/40">Do not distribute without permission</p>
      </footer>
    </div>
  );
}

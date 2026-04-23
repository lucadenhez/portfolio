"use client";

import { useState } from "react";
import Image from "next/image";
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";
import { motion } from "framer-motion";
import photosData from "../data/photos.json";
import ShimmerImage from "../components/ShimmerImage";

export default function Photography() {
  const [index, setIndex] = useState(-1);
  const currentPhoto = index >= 0 ? photosData[index] : null;

  return (
    <div className="min-h-screen bg-white p-5 md:p-15">
      <header className="mb-12">
        <h1 className="text-5xl">Photos</h1>
      </header>

      <MasonryPhotoAlbum
        photos={photosData}
        columns={(containerWidth) => {
          if (containerWidth < 640) return 1;
          if (containerWidth < 1024) return 2;
          return 3;
        }}
        onClick={({ index }) => setIndex(index)}
        render={{
          image: (props, { photo }) => (
            <div key={photo.id} className="relative group cursor-zoom-in">
              <ShimmerImage photo={photo} />
            </div>
          ),
        }}
      />

      {currentPhoto && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIndex(-1)}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/95 p-5 lg:px-30 cursor-zoom-out"
        >
          <div className="relative w-full h-[90vh] sm:h-full flex flex-col lg:flex-row gap-15 items-start sm:items-center justify-between">
            <div className="relative w-full h-screen lg:w-2/3">
              <Image
                src={currentPhoto.src}
                alt="Focused"
                fill
                className="object-contain"
                priority
              />
            </div>

            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.75 }}
              className="max-w-sm text-black space-y-4"
            >
              <div>
                <p className="text-xs uppercase font-medium text-gray-400 leading-4">Location</p>
                <p className="text-lg">{currentPhoto.location}</p>
              </div>
              <div className="grid grid-cols-2 gap-6 border-t border-gray-100 pt-4">
                <div>
                  <p className="text-xs uppercase font-medium text-gray-400 leading-4">Camera</p>
                  <p>{currentPhoto.camera}</p>
                </div>
                <div>
                  <p className="text-xs uppercase font-medium text-gray-400 leading-4">Lens</p>
                  <p>{currentPhoto.lens}</p>
                </div>
                <div>
                  <p className="text-xs uppercase font-medium text-gray-400 leading-4">Settings</p>
                  <p>{currentPhoto.aperture} • {currentPhoto.shutter}</p>
                </div>
                <div>
                  <p className="text-xs uppercase font-medium text-gray-400 leading-4">Date</p>
                  <p>{currentPhoto.date}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}

      <div className="h-[10rem]" />

      <footer className="w-full flex items-center justify-center">
        <p className="text-black/40">Do not distribute</p>
      </footer>
    </div>
  );
}

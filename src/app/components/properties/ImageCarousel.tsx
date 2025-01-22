"use client"
import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageCarouselModalProps {
  images: string[];
  initialIndex?: number;
  isOpen: boolean;
  onClose: () => void;
}

const ImageCarouselModal: React.FC<ImageCarouselModalProps> = ({ 
  images, 
  initialIndex = 0, 
  isOpen, 
  onClose 
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(initialIndex);

  // Handle escape key press
  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      window.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, onClose]);

  const handlePrevious = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setCurrentIndex((prev) => 
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setCurrentIndex((prev) => 
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
      onClick={handleBackdropClick}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute right-4 top-4 z-50 p-2 text-black/70 hover:opacity-75"
      >
        <X size={24} />
      </button>

      {/* Main image container */}
      <div className="relative h-full w-full" onClick={(e) => e.stopPropagation()}>
        <div className="flex h-full items-center justify-center">
          <img
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            className="max-h-[90vh] rounded-sm max-w-[99vw] object-contain"
          />
        </div>

        {/* Navigation buttons */}
        <button
          onClick={handlePrevious}
          className="absolute left-2 top-[490px] md:left-4 md:top-1/2 -translate-y-1/2 rounded-full p-2 text-black/70 hover:opacity-75"
        >
          <ChevronLeft size={36} />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-2 top-[490px] md:right-4 md:top-1/2 -translate-y-1/2 rounded-full text-black/70 p-2 hover:opacity-75"
        >
          <ChevronRight size={36} />
        </button>

        {/* Image counter */}
        <div className="absolute  h-8 md:bottom-1 left-1/2 -translate-x-1/2 rounded-lg bg-black bg-opacity-50 px-4 py-1 text-white">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
};

export default ImageCarouselModal;

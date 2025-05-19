
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface VideoCardProps {
  title: string;
  thumbnail: string;
  category: string;
  url?: string;
  isPortrait?: boolean;
}

export const VideoCard = ({ title, thumbnail, category, url, isPortrait: initialIsPortrait }: VideoCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPortrait, setIsPortrait] = useState(initialIsPortrait ?? false);
  const isMobile = useIsMobile();

  useEffect(() => {
    // If isPortrait is not provided as a prop, detect it from the thumbnail
    if (initialIsPortrait === undefined) {
      const img = new Image();
      img.onload = () => {
        const aspectRatio = img.width / img.height;
        setIsPortrait(aspectRatio < 0.8); // If aspect ratio is less than 0.8, consider it portrait (9:16)
      };
      img.src = thumbnail;
    }
  }, [thumbnail, initialIsPortrait]);

  return (
    <>
      <div 
        className={`video-card ${isPortrait ? 'portrait-video' : 'landscape-video'}`} 
        onClick={() => url && setIsOpen(true)}
      >
        <div className={`${isPortrait ? 'portrait-container' : ''} rounded-lg overflow-hidden`}>
          <AspectRatio ratio={isPortrait ? 9/16 : 16/9}>
            <img 
              src={thumbnail} 
              alt={title} 
              className="w-full h-full object-cover"
            />
          </AspectRatio>
          <div className="video-info">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-primary">{category}</p>
          </div>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className={`${isMobile ? 'mx-4 my-auto' : 'max-w-4xl'} h-[80vh] p-0`}>
          <DialogTitle className="sr-only">{title}</DialogTitle>
          {url && (
            <iframe
              src={url}
              className="w-full h-full"
              allow="autoplay"
              allowFullScreen
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

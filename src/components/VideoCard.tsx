
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface VideoCardProps {
  title: string;
  thumbnail: string;
  category: string;
  url?: string;
}

export const VideoCard = ({ title, thumbnail, category, url }: VideoCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPortrait, setIsPortrait] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Check if the thumbnail is portrait (9:16) or landscape
    const img = new Image();
    img.onload = () => {
      const aspectRatio = img.width / img.height;
      setIsPortrait(aspectRatio < 0.8); // If aspect ratio is less than 0.8, consider it portrait (9:16)
    };
    img.src = thumbnail;
  }, [thumbnail]);

  return (
    <>
      <div 
        className={`video-card group relative cursor-pointer ${isPortrait ? 'portrait-video' : 'landscape-video'}`} 
        onClick={() => url && setIsOpen(true)}
      >
        <div className={`relative ${isPortrait ? 'h-96' : 'h-64'} overflow-hidden rounded-lg`}>
          <AspectRatio ratio={isPortrait ? 9/16 : 16/9}>
            <img 
              src={thumbnail} 
              alt={title} 
              className="w-full h-full object-cover"
            />
          </AspectRatio>
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 rounded-b-lg">
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

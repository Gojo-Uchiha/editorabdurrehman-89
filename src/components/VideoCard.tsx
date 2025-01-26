import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface VideoCardProps {
  title: string;
  thumbnail: string;
  category: string;
  url?: string;
}

export const VideoCard = ({ title, thumbnail, category, url }: VideoCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <>
      <div 
        className="video-card group relative cursor-pointer" 
        onClick={() => url && setIsOpen(true)}
      >
        <img 
          src={thumbnail} 
          alt={title} 
          className="w-full h-64 object-cover rounded-lg"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 rounded-b-lg">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-primary">{category}</p>
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
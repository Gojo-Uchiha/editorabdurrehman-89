interface VideoCardProps {
  title: string;
  thumbnail: string;
  category: string;
}

export const VideoCard = ({ title, thumbnail, category }: VideoCardProps) => {
  return (
    <div className="video-card group">
      <img src={thumbnail} alt={title} className="w-full h-64 object-cover" />
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-10 opacity-0 group-hover:opacity-100 transition-opacity">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-primary">{category}</p>
      </div>
    </div>
  );
};
import { useState } from "react";
import { VideoCard } from "../components/VideoCard";
import { videos } from "../data/videos";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const categories = ["all", ...Array.from(new Set(videos.map(video => video.category)))];

  const filteredVideos = activeCategory === "all" 
    ? videos 
    : videos.filter(video => video.category === activeCategory);

  return (
    <div className="pt-24 pb-20 container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-12">Video Gallery</h1>
      
      <div className="flex gap-4 mb-12 overflow-x-auto pb-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full transition-colors whitespace-nowrap ${
              activeCategory === category
                ? "bg-primary text-white"
                : "bg-secondary text-foreground/80 hover:bg-primary/20"
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredVideos.map((video) => (
          <VideoCard
            key={video.id}
            title={video.title}
            thumbnail={video.thumbnail}
            category={video.category}
            url={video.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
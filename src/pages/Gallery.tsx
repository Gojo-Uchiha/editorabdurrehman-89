
import { useState, useEffect } from "react";
import { VideoCard } from "../components/VideoCard";
import { videos } from "../data/videos";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [sortedVideos, setSortedVideos] = useState(videos);
  
  const categories = ["all", ...Array.from(new Set(videos.map(video => video.category)))];

  // Sort and filter videos when category changes
  useEffect(() => {
    const filtered = activeCategory === "all" 
      ? [...videos] 
      : videos.filter(video => video.category === activeCategory);
    
    // Sort videos to prioritize vertical (portrait) videos
    const sorted = [...filtered].sort((a, b) => {
      // Check if thumbnail aspect ratio is available in the data
      const aIsPortrait = a.isPortrait === true;
      const bIsPortrait = b.isPortrait === true;
      
      // Put portrait videos first
      return aIsPortrait === bIsPortrait ? 0 : aIsPortrait ? -1 : 1;
    });
    
    setSortedVideos(sorted);
  }, [activeCategory]);

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

      <div className="video-grid">
        {sortedVideos.map((video) => (
          <VideoCard
            key={video.id}
            title={video.title}
            thumbnail={video.thumbnail}
            category={video.category}
            url={video.url}
            isPortrait={video.isPortrait}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;

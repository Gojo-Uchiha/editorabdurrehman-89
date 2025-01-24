import { useState } from "react";
import { VideoCard } from "../components/VideoCard";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const videos = [
    { id: 1, title: "Cinematic Short Film", thumbnail: "/placeholder.svg", category: "Short Films" },
    { id: 2, title: "Commercial Project", thumbnail: "/placeholder.svg", category: "Commercials" },
    { id: 3, title: "Music Video", thumbnail: "/placeholder.svg", category: "Music" },
    { id: 4, title: "Wedding Highlights", thumbnail: "/placeholder.svg", category: "Weddings" },
    { id: 5, title: "Brand Story", thumbnail: "/placeholder.svg", category: "Commercials" },
    { id: 6, title: "Documentary", thumbnail: "/placeholder.svg", category: "Short Films" },
  ];

  const categories = ["all", "Short Films", "Commercials", "Music", "Weddings"];

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
            className={`px-4 py-2 rounded-full transition-colors ${
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
        {filteredVideos.map((video) => (
          <VideoCard key={video.id} {...video} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
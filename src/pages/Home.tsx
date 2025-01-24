import { VideoCard } from "../components/VideoCard";
import { videos } from "../data/videos";

const Home = () => {
  const categories = Array.from(new Set(videos.map(video => video.category)));
  
  return (
    <div className="pt-16">
      <section className="relative h-[80vh] bg-gradient-to-b from-background to-background/50">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-50" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">Video Editing Portfolio</h1>
            <p className="text-xl text-foreground/80 mb-8">Professional video editing and animation services</p>
          </div>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4">
        {categories.map(category => {
          const categoryVideos = videos.filter(video => video.category === category).slice(0, 3);
          
          return (
            <div key={category} className="mb-16">
              <h2 className="text-3xl font-semibold mb-8">{category}</h2>
              <div className="video-grid">
                {categoryVideos.map((video) => (
                  <VideoCard
                    key={video.id}
                    title={video.title}
                    thumbnail={video.thumbnail}
                    category={video.category}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Home;
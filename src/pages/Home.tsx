import { VideoCard } from "../components/VideoCard";

const Home = () => {
  const featuredVideos = [
    { id: 1, title: "Cinematic Short Film", thumbnail: "/placeholder.svg", category: "Short Films" },
    { id: 2, title: "Commercial Project", thumbnail: "/placeholder.svg", category: "Commercials" },
    { id: 3, title: "Music Video", thumbnail: "/placeholder.svg", category: "Music" },
  ];

  return (
    <div className="pt-16">
      <section className="relative h-[80vh] bg-gradient-to-b from-background to-background/50">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-50" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">Capturing Stories Through Motion</h1>
            <p className="text-xl text-foreground/80 mb-8">Professional videography services for your creative needs</p>
          </div>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-12">Featured Work</h2>
        <div className="video-grid">
          {featuredVideos.map((video) => (
            <VideoCard key={video.id} {...video} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
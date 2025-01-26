import { VideoCard } from "../components/VideoCard";
import { videos } from "../data/videos";
import { Star, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const reviews = [
  {
    name: "Alex Thompson",
    role: "Content Creator",
    review: "Incredible editing skills! The transitions are seamless.",
    rating: 5
  },
  {
    name: "Sarah Chen",
    role: "YouTuber",
    review: "Best editor I've worked with. Fast and professional!",
    rating: 5
  },
  {
    name: "Mike Rodriguez",
    role: "Twitch Streamer",
    review: "Amazing work on my stream highlights!",
    rating: 5
  }
];

const faqs = [
  {
    question: "What types of videos do you edit?",
    answer: "I specialize in various types of video editing including anime edits, popular edits, intros, logo animations, headcam reels, and long-form content."
  },
  {
    question: "What is your turnaround time?",
    answer: "Turnaround time varies depending on the project complexity. Short-form content typically takes 1-3 days, while long-form content may take 3-7 days."
  },
  {
    question: "Do you offer revisions?",
    answer: "Yes, I offer up to 2 rounds of revisions to ensure you're completely satisfied with the final product."
  },
  {
    question: "How do I get started?",
    answer: "Simply reach out through the contact form or email me at syed4abdurrehman@gmail.com to discuss your project needs."
  }
];

const Home = () => {
  const featuredCategories = ["HeadCam Reels", "Anime Edits", "Popular Edits"];
  
  return (
    <div className="pt-16">
      <section className="relative h-[80vh] bg-gradient-to-b from-background to-background/50">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/72d8f939-a794-4158-a0dc-12da8c6a1c14.png')] bg-cover bg-center opacity-30" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">Syed AbdurRehman</h1>
            <p className="text-xl text-foreground/80 mb-8">Hey 👋 I'm a freelance video editor and content creator. I specialize in crafting polished YouTube videos, Shorts, and Reels that help creators stand out and connect with their audience. Let's bring your ideas to life!</p>
          </div>
        </div>
      </section>

      {/* Moving Text Section */}
      <div className="relative overflow-hidden py-8 bg-primary/10 mb-12">
        <div className="animate-scroll whitespace-nowrap">
          <Link to="/contact" className="text-2xl font-bold mx-4 hover:text-primary transition-colors">✦ Available for Consultancy</Link>
          <Link to="/contact" className="text-2xl font-bold mx-4 hover:text-primary transition-colors">✦ Get in Touch</Link>
          <span className="text-2xl font-bold mx-4">✦ Professional Video Editing</span>
          <Link to="/contact" className="text-2xl font-bold mx-4 hover:text-primary transition-colors">✦ Contact Now</Link>
        </div>
      </div>

      <section className="py-20 container mx-auto px-4">
        {featuredCategories.map(category => {
          const categoryVideos = videos.filter(video => video.category === category).slice(0, 3);
          
          return (
            <div key={category} className="mb-16">
              <h2 className="text-3xl font-semibold mb-8">{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryVideos.map((video) => (
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
        })}
      </section>

      {/* Reviews Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
          <Star className="text-primary" />
          Client Reviews
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 shadow-lg shadow-primary/10 hover:shadow-primary/20"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-gray-300 mb-4">{review.review}</p>
              <div>
                <p className="font-medium">{review.name}</p>
                <p className="text-sm text-primary">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
          <Sparkles className="text-primary" />
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white/5 rounded-lg px-6 shadow-lg shadow-primary/10"
              >
                <AccordionTrigger className="text-lg font-medium hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default Home;

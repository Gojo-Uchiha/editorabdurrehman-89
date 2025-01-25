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
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gradient-to-b from-background to-background/50">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/51fb5481-e197-44ef-b629-e82f8c5cddba.png')] bg-cover bg-center opacity-50" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">Syed AbdurRehman</h1>
            <p className="text-xl text-foreground/80 mb-8">Hey 👋 I'm a freelance video editor and content creator. I specialize in crafting polished YouTube videos, Shorts, and Reels that help creators stand out and connect with their audience. Let's bring your ideas to life!</p>
          </div>
        </div>
      </section>

      {/* Moving Consultancy Text */}
      <div className="bg-primary/10 py-8 overflow-hidden whitespace-nowrap">
        <div className="animate-marquee inline-block">
          <span className="text-2xl font-medium mx-4">Need a consultation? </span>
          <Link to="/contact" className="text-2xl font-medium text-primary mx-4 hover:text-primary/80 transition-colors">Get in touch →</Link>
          <span className="text-2xl font-medium mx-4">Let's create something amazing together </span>
          <Link to="/contact" className="text-2xl font-medium text-primary mx-4 hover:text-primary/80 transition-colors">Contact me →</Link>
        </div>
      </div>

      {/* Client Reviews Section */}
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

      {/* Featured Videos Sections */}
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

      {/* About Me Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-gray-300">
              With a passion for storytelling and an eye for detail, I help content creators and businesses bring their vision to life through compelling video content.
            </p>
            <p className="text-gray-300">
              Whether you need anime edits, popular edits, intros, logo animations, headcam reels, or long-form content, 
              I've got you covered with professional editing services that will make your content stand out.
            </p>
          </div>
          <div className="space-y-6">
            <div className="p-6 bg-white/5 rounded-lg backdrop-blur-sm shadow-lg shadow-primary/10">
              <h3 className="text-xl font-medium mb-2">Contact Information</h3>
              <p className="text-primary">Email: syed4abdurrehman@gmail.com</p>
              <p className="text-primary">Phone: +923324112404</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
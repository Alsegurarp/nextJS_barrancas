import React from "react";
import BlogContent from "@/views/Blog/BlogContent";
import { blogPosts } from "@/lib/blogData";
import HeroItinerario from "@/sections/HeroItinerario";
import imageHero from '@/assets/Portadas/HeroImage.webp';
import Usage from "@/components/Layout/Navbar/usage";
import CustomCursor from "@/Componentes/utils/CustomCursor";
import DarkModeButton from "@/Componentes/utils/DarkModeButton";
import WhatsappButton from "@/Componentes/utils/WhatsappButton";
import Footer from "@/components-gsap/Footer";

export default function BlogPage() {
  return (
    <>
        <div className='wrapper'>
            <Usage />
            <CustomCursor />
            <DarkModeButton />
            <WhatsappButton />

            <HeroItinerario 
            title="Haz de tu experiencia algo único."
            subtitle="Haz tu experiencia única"
            backgroundImage={imageHero}
            duration="no habilitado"
            />


            {blogPosts.map((post) => (
            <BlogContent
            key={post.id}
            title={post.title}
            description={post.description}
            content={post.content}
            contentDesktop={post.contentDesktop}
            image={post.image}
            date={post.date}
            author={post.author}
            readTime={post.readTime}
            />
            ))}

            {/* Footer */}
            <Footer />
        </div>
    </>
  );
}

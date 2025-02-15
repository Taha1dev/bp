/* eslint-disable @typescript-eslint/no-explicit-any */
import { Github, Facebook, Instagram, Linkedin } from "lucide-react";

const ProfileCard = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-purple-100 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      </div>
      
      <div className="max-w-md w-full space-y-8 relative z-10">
        {/* Profile picture with cosmic glow */}
        <div className="relative w-48 h-48 mx-auto flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-purple-500 blur-2xl opacity-40 animate-blob"></div>
          <div className="absolute inset-0 rounded-full bg-purple-400 blur-3xl opacity-30 animate-blob delay-2000"></div>
          <img
            src="/b.jpg"
            alt="Profile Picture"
            className="w-48 h-48 rounded-full border-4 border-purple-300 shadow-xl relative z-10 animate-float hover:border-purple-200 transition-colors duration-300"
          />
        </div>
        
        {/* Username link */}
        <a
          href="https://t.me/BushraQurabi"
          className="block text-center text-2xl font-bold text-purple-300 hover:text-purple-100 transition-colors duration-300 animate-fadeIn"
        >
          @BushraQurabi
        </a>
        
        {/* Description */}
        <p className="text-center text-purple-200 animate-fadeIn">
          Competitive programmer | ACPC enthusiast | Cat lover 🐱 | Purple aficionado 💜 | Coding dreams into reality ✨
        </p>
        
        {/* Social links */}
        <div className="flex justify-center space-x-6 animate-slideUp">
          <SocialLink href="https://github.com/BushraQurabi" icon={<Github />} />
          <SocialLink href="https://facebook.com/BushraQurabi" icon={<Facebook />} />
          <SocialLink href="https://instagram.com/BushraQurabi" icon={<Instagram />} />
          <SocialLink href="https://linkedin.com/in/BushraQurabi" icon={<Linkedin />} />
        </div>
      </div>
    </div>
  );
};

const SocialLink = ({ href, icon }:any) => {
  return (
    <a href={href} className="text-purple-300 hover:text-purple-100 transition-colors duration-300">
      {icon}
    </a>
  );
};

export default ProfileCard;
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden ">
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center py-16 space-y-6">
        {/* Icons */}
        <div className="flex gap-6 text-gray-800">
          <a
            href="https://github.com/DanVisser-WebDev"
            aria-label="GitHub"
            target="_blank">
            <Github className="w-6 h-6 hover:text-blue-500 transition" />
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-visser-0b70ba28b/"
            aria-label="LinkedIn"
            target="_blank">
            <Linkedin className="w-6 h-6 hover:text-blue-500 transition" />
          </a>
          <a href="mailto:danvisserwebdev@gmail.com" aria-label="Email">
            <Mail className="w-6 h-6 hover:text-blue-500 transition" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500 mb-1">Daniel Visser © 2026</p>
        <a
          className="text-sm text-gray-500 m-0 p-0"
          href="https://www.flaticon.com/free-icons/leaf"
          title="leaf icons">
          Leaf Icon created by "Pixel perfect" - Flaticon
        </a>
      </div>
    </footer>
  );
};

export default Footer;

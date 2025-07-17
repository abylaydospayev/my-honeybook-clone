import Image from 'next/image';
import {Phone, MapPin, Linkedin, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-dark-gray text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
          
          {/* Column 1: Logo */}
          <div className="lg:col-span-1 flex justify-center md:justify-start">
            <a href="#" aria-label="Bulle Consulting Home">
              <Image
                src="/logos/bulleconsulting-white.png"
                alt="Bulle Consulting Logo"
                width={200}
                height={55}
                className="w-40 h-auto"
                loading="lazy"
              />
            </a>
          </div>

          {/* Column 2: Addresses */}
          <div className="lg:col-span-1">
            <h3 className="font-bold mb-4">HEADQUARTERS</h3>
            <li className="flex justify-center md:justify-start items-center gap-3">
                <span>Seattle</span>
              </li>
            <p className="text-sm text-gray-400 leading-relaxed">
              3815 S Othello St.<br />
              Suite 100-179<br />
              Seattle, WA 98118
            </p>
            <li className="flex justify-center md:justify-start items-center gap-3">
                {/* <Phone size={18} className="text-brand-blue" /> */}
                <span>+1-206-359-1603</span>
              </li>
            <h3 className="font-bold mt-6 mb-0">New York</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              255 West 43rd Street<br />
              New York, NY 10036
            </p>
            <li className="flex justify-center md:justify-start items-center gap-3">
                {/* <Phone size={18} className="text-brand-blue" /> */}
                <span>+1-646-494-0892</span>
              </li>
          </div>

          {/* Column 3: Email */}
          <div className="lg:col-span-1 flex flex-col space-y-6">
              <div>
                <h3 className="font-bold mb-4">EMAIL</h3>
                <a href="mailto:projects@bulleconsulting.com" className="text-brand-blue hover:underline text-sm">
                  projects@bulleconsulting.com
                </a>
              </div>

            {/* Column 4: Social Media & Phones */}
            <div>
              <h3 className="font-bold mb-4">CONNECT</h3>
              <div className="flex justify-center md:justify-start items-center gap-4 mb-6">
                <a
                  href="https://www.linkedin.com/company/bulle-consulting/"
                  aria-label="LinkedIn"
                  className="inline-block p-2 bg-gray-700/50 rounded-md hover:bg-brand-blue transition-colors"
                >
                  <Linkedin size={20} className="text-white" />
                </a>
                <a
                  href="https://www.facebook.com/bulleconsulting/"
                  aria-label="Facebook"
                  className="inline-block p-2 bg-gray-700/50 rounded-md hover:bg-brand-blue transition-colors"
                >
                  <Facebook size={20} className="text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom text */}
        <div className="border-t border-gray-700/50 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © 2025 Bulle Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}


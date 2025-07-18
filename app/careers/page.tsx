'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { LogoCarousel } from '@/components/page_sections/LogoCarousel';
import { ContactModal } from '@/components/ui/ContactModal';
import { Careers } from '@/components/page_sections/Careers';

export default function CareersPage() {
   const [isContactModalOpen, setIsContactModalOpen] = useState(false);
   return (
       <div >
       <Header 
         variant="transparent" 
         onContactClick={() => setIsContactModalOpen(true)} 
       />
       <main>
         <Careers /> 
         <LogoCarousel/>
       </main>
       <Footer />
             <ContactModal 
               isOpen={isContactModalOpen} 
               onClose={() => setIsContactModalOpen(false)} 
             />
     </div>
   );
}

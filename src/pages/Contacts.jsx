import "../src/App.css";
const Contacts = () => {
  const contactInfo = {
    phone: "[+84] 0934153439",
    email: "phungnghia291@gmail.com",
    facebook: "https://www.facebook.com/nghia.ma.7773631/",
  };

  return (
    // Changed h-full to h-screen and added snap-start
    <section class="Container w-full h-full snap-start flex flex-col items-center justify-center bg-transparent -pt-24 md:py-20  overflow-clip box-border">
      
      {/* Title centered to match other pages */}
      <h1 class="text-4xl font-black uppercase italic mb-16 text-center">
        Contacts
      </h1>

      {/* Grid container - centered vertically by the parent flex */}
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-4xl">
        
        {/* Phone Section */}
        <div class="flex flex-col items-center group">
          <div class="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4 border border-gray-100 group-hover:bg-yellow-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          </div>
          <span class="text-xs font-bold uppercase text-gray-400 mb-1">Phone</span>
          <a href={`tel:${contactInfo.phone}`} class="text-sm font-semibold hover:text-orange-500 transition-colors">
            {contactInfo.phone}
          </a>
        </div>

        {/* Gmail Section */}
        <div class="flex flex-col items-center group">
          <div class="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4 border border-gray-100 group-hover:bg-red-50 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
          </div>
          <span class="text-xs font-bold uppercase text-gray-400 mb-1">Gmail</span>
          <a href={`mailto:${contactInfo.email}`} class="text-sm font-semibold hover:text-red-600 transition-colors">
            {contactInfo.email}
          </a>
        </div>

        {/* Facebook Section */}
        <div class="flex flex-col items-center group">
          <div class="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4 border border-gray-100 group-hover:bg-blue-50 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </div>
          <span class="text-xs font-bold uppercase text-gray-400 mb-1">Facebook</span>
          <a href={contactInfo.facebook} target="_blank" rel="noopener noreferrer" class="text-sm font-semibold hover:text-blue-700 transition-colors">
            Ma Phung Nghia
          </a>
        </div>

      </div>

      {/* Footer info at the bottom of the full page */}
      <div class="mt-20 text-gray-600 text-[10px] uppercase tracking-widest italic font-zilla">
        © 2026 Designed by Nghia
      </div>
    </section>
  );
};

export default Contacts;
import { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { faqData } from '../../data/siteData';

function AccordionItem({ faq, index }: { faq: typeof faqData[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <div className={`rounded-xl xs:rounded-2xl border transition-all duration-300 ${isOpen ? 'border-primary-200 bg-primary-50/50 shadow-md' : 'border-gray-100 bg-white hover:border-gray-200'}`}>
      <h3 className="m-0">
        <button
          id={buttonId}
          onClick={() => setIsOpen((prev) => !prev)}
          className="w-full flex items-center justify-between p-4 xs:p-5 lg:p-6 text-left cursor-pointer select-none touch-manipulation"
          aria-expanded={isOpen}
          aria-controls={panelId}
          type="button"
        >
          <span className={`flex-1 text-sm xs:text-base lg:text-lg font-semibold pr-3 xs:pr-4 transition-colors duration-300 ${isOpen ? 'text-primary-700' : 'text-primary-950'}`}>{faq.q}</span>
          <div className={`shrink-0 w-7 xs:w-8 h-7 xs:h-8 rounded-lg xs:rounded-xl flex items-center justify-center transition-all duration-300 ease-out ${isOpen ? 'bg-primary-600 text-white shadow-md shadow-primary-500/30' : 'bg-gray-100 text-gray-500'}`}>
            <FiPlus className={`w-3.5 xs:w-4 h-3.5 xs:h-4 transition-transform duration-300 ease-out ${isOpen ? 'rotate-45' : 'rotate-0'}`} />
          </div>
        </button>
      </h3>
      {/* Smooth expand/collapse: grid-template-rows 0fr -> 1fr animates the panel height on all browsers,
          including touch devices. onClick (not onPointerDown) fires reliably on mobile Safari & webviews,
          and only after the tap completes, so it never toggles mid-scroll. */}
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        aria-hidden={!isOpen}
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-4 xs:px-5 lg:px-6 pb-4 xs:pb-5 lg:pb-6 text-gray-600 leading-relaxed text-xs xs:text-sm lg:text-base">{faq.a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-warm-50 border border-warm-200 rounded-full mb-4">
            <span className="w-2 h-2 bg-warm-500 rounded-full" /><span className="text-xs sm:text-sm font-semibold text-warm-700">FAQ</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-950 mb-4">Frequently Asked{' '}<span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">Questions</span></h2>
          <p className="text-gray-600 text-sm xs:text-base sm:text-lg max-w-xl mx-auto">Find answers to common questions about our services, appointments, and facilities.</p>
        </div>
        <div className="space-y-3">
          {faqData.map((faq, i) => (<AccordionItem key={i} faq={faq} index={i} />))}
        </div>
      </div>
    </section>
  );
}

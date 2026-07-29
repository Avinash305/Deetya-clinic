import { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { faqData } from '../../data/siteData';

function AccordionItem({ faq, isOpen, onClick }: { faq: typeof faqData[0]; isOpen: boolean; onClick: () => void }) {
  return (
    <div className={`rounded-2xl border transition-all duration-300 ${isOpen ? 'border-primary-200 bg-primary-50/50 shadow-md' : 'border-gray-100 bg-white hover:border-gray-200'}`}>
      <button onClick={onClick} className="w-full flex items-center justify-between p-5 lg:p-6 text-left" aria-expanded={isOpen}>
        <span className={`text-base lg:text-lg font-semibold pr-4 transition-colors ${isOpen ? 'text-primary-700' : 'text-primary-950'}`}>{faq.q}</span>
        <div className={`shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-500'}`}>
          {isOpen ? <FiMinus className="w-4 h-4" /> : <FiPlus className="w-4 h-4" />}
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="px-5 lg:px-6 pb-5 lg:pb-6 text-gray-600 leading-relaxed text-sm lg:text-base">{faq.a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const { ref, isVisible } = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-warm-50 border border-warm-200 rounded-full mb-4">
            <span className="w-2 h-2 bg-warm-500 rounded-full" /><span className="text-sm font-semibold text-warm-700">FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-950 mb-4">Frequently Asked{' '}<span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">Questions</span></h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">Find answers to common questions about our services, appointments, and facilities.</p>
        </div>
        <div className={`space-y-3 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {faqData.map((faq, i) => (<AccordionItem key={i} faq={faq} isOpen={openIndex === i} onClick={() => setOpenIndex(openIndex === i ? -1 : i)} />))}
        </div>
      </div>
    </section>
  );
}

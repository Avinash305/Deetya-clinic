import { useEffect, type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ModalProps {
  onClose: () => void;
  /** Accessibility label for the dialog. */
  ariaLabel?: string;
  /** 'sm' = narrow form modal, 'lg' = wide compare modal. */
  size?: 'sm' | 'lg';
  /** Extra classes for the panel (e.g. the tall compare table). */
  panelClassName?: string;
  children: ReactNode;
}

/**
 * Shared modal shell: locks body scroll, closes on Escape, renders the dimmed
 * backdrop and the slide-up animated panel. Headers/close buttons are provided
 * by the caller via children.
 */
export default function Modal({ onClose, ariaLabel, size = 'sm', panelClassName = '', children }: ModalProps) {
  // Lock body scroll while open (restores the previous value on unmount).
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  // Close on Escape.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[85] flex items-end sm:items-center justify-center p-0 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={ariaLabel}
    >
      <div className="absolute inset-0 bg-primary-950/60 backdrop-blur-sm" onClick={onClose} />

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.98 }}
        transition={{ type: 'spring', damping: 26, stiffness: 300 }}
        className={`relative w-full ${size === 'lg' ? 'sm:max-w-4xl' : 'sm:max-w-md'} bg-white rounded-t-3xl sm:rounded-3xl overflow-hidden shadow-2xl ${panelClassName}`}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

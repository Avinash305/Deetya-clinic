import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiX, FiCheck, FiMinus, FiTrash2, FiCalendar } from 'react-icons/fi';
import type { HealthPackageEntry } from '../../data/healthPackagesData';
import { formatINR } from './bookingUtils';

interface CompareModalProps {
  pkgs: HealthPackageEntry[];
  onClose: () => void;
  onRemove: (slug: string) => void;
  onClear: () => void;
  onBook: (pkg: HealthPackageEntry) => void;
}

type RowRenderer = (pkg: HealthPackageEntry) => React.ReactNode;

const boolCell = (on: boolean) =>
  on ? (
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-accent-100 text-accent-700 mx-auto">
      <FiCheck className="w-4 h-4" />
    </span>
  ) : (
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gray-100 text-gray-300 mx-auto">
      <FiMinus className="w-4 h-4" />
    </span>
  );

const buildRows = (onBook: (pkg: HealthPackageEntry) => void): { label: string; value: RowRenderer }[] => [
  {
    label: 'Offer Price',
    value: (p) => <span className="font-extrabold text-primary-950">{formatINR(p.offerPrice)}</span>,
  },
  { label: 'Original Price', value: (p) => <span className="text-gray-400 line-through text-xs">{formatINR(p.originalPrice)}</span> },
  { label: 'Discount', value: (p) => <span className="font-bold text-accent-600">{p.discountPercent}%</span> },
  { label: 'Money Saved', value: (p) => <span className="font-bold text-accent-600">{formatINR(p.moneySaved)}</span> },
  { label: 'Total Tests', value: (p) => <span className="font-bold text-primary-950">{p.totalTests}</span> },
  { label: 'Doctor Consultation', value: (p) => boolCell(p.doctorConsultation) },
  { label: 'CBC', value: (p) => boolCell(p.cbc) },
  { label: 'HbA1c', value: (p) => boolCell(p.hba1c) },
  { label: 'Blood Sugar', value: (p) => boolCell(p.bloodSugarTests) },
  { label: 'Lipid Profile', value: (p) => boolCell(p.lipidProfile) },
  { label: 'Liver Function', value: (p) => boolCell(p.liverTests) },
  { label: 'Kidney Function', value: (p) => boolCell(p.kidneyTests) },
  { label: 'Vitamin Tests', value: (p) => boolCell(p.vitaminTests) },
  { label: 'ECG', value: (p) => boolCell(p.ecg) },
  { label: 'ECHO', value: (p) => boolCell(p.echo) },
  { label: 'TMT', value: (p) => boolCell(p.tmt) },
  { label: 'Ultrasound', value: (p) => boolCell(p.ultrasound) },
  { label: 'Chest X-Ray', value: (p) => boolCell(p.xray) },
  { label: 'Home Collection', value: (p) => boolCell(p.homeCollection) },
  { label: 'Recommended Age', value: (p) => <span className="text-xs font-medium text-gray-600">{p.recommendedAge}</span> },
  {
    label: 'Book Now',
    value: (p) => (
      <button
        onClick={(e) => {
          e.stopPropagation();
          onBook(p);
        }}
        className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-gradient-to-r ${p.gradient} text-white text-[11px] font-bold shadow hover:brightness-110 active:scale-[0.98] transition-all`}
      >
        <FiCalendar className="w-3 h-3" /> Book
      </button>
    ),
  },
];

export default function CompareModal({ pkgs, onClose, onRemove, onClear, onBook }: CompareModalProps) {
  const rows = buildRows(onBook);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

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
      aria-label="Compare packages"
    >
      <div className="absolute inset-0 bg-primary-950/60 backdrop-blur-sm" onClick={onClose} />

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.98 }}
        transition={{ type: 'spring', damping: 26, stiffness: 300 }}
        className="relative w-full sm:max-w-4xl bg-white rounded-t-3xl sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
      >
        {/* header */}
        <div className="shrink-0 bg-gradient-to-r from-primary-600 to-primary-800 px-5 sm:px-7 py-4 flex items-center justify-between">
          <div>
            <h3 className="text-white font-extrabold text-base sm:text-lg">Compare Packages</h3>
            <p className="text-primary-100 text-xs mt-0.5">
              {pkgs.length} package{pkgs.length > 1 ? 's' : ''} selected — swipe to see all columns
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onClear}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
            >
              <FiTrash2 className="w-3.5 h-3.5" /> Clear
            </button>
            <button
              onClick={onClose}
              autoFocus
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors"
              aria-label="Close comparison"
            >
              <FiX className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* scrollable table */}
        <div className="overflow-auto flex-1">
          <table className="border-collapse w-full min-w-max">
            <thead>
              <tr>
                <th className="sticky left-0 z-20 bg-primary-50 border-b border-r border-gray-100 min-w-[130px] max-w-[130px] px-3 py-3" />
                {pkgs.map((p) => (
                  <th key={p.slug} className="border-b border-gray-100 min-w-[150px] max-w-[150px] px-3 py-3 align-top">
                    <div className="flex flex-col items-center gap-1.5">
                      <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${p.gradient} text-white flex items-center justify-center shadow`}>
                        {p.icon}
                      </div>
                      <p className="text-xs font-bold text-primary-950 text-center leading-tight">{p.name}</p>
                      <button
                        onClick={() => onRemove(p.slug)}
                        className="inline-flex items-center gap-1 text-[10px] text-gray-400 hover:text-red-500 font-semibold transition-colors"
                      >
                        <FiX className="w-3 h-3" /> Remove
                      </button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="sticky left-0 z-10 bg-inherit border-r border-gray-100 px-3 py-2.5 text-[11px] font-bold text-gray-600 uppercase tracking-wide min-w-[130px] max-w-[130px]">
                    {row.label}
                  </td>
                  {pkgs.map((p) => (
                    <td key={p.slug} className="px-3 py-2.5 text-center min-w-[150px] max-w-[150px]">
                      {row.value(p)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="shrink-0 text-center text-[11px] text-gray-400 py-2.5 border-t border-gray-100 bg-gray-50/60">
          Prices are per package at DEETYA Multispeciality Clinic • Add-ons and home collection available on request
        </p>
      </motion.div>
    </motion.div>
  );
}

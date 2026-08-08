import type { ChangeEvent, ReactNode } from 'react';

type FieldVariant = 'green' | 'primary';
type FieldType = 'text' | 'tel' | 'email' | 'date' | 'textarea' | 'select';

interface FormFieldProps {
  label: string;
  /** 'green' = Contact-form style (green focus ring, xs-responsive sizing); 'primary' = booking-modal style. */
  variant?: FieldVariant;
  type?: FieldType;
  name?: string;
  /** Associates the label with the control (a11y). Falls back to a name-derived id. */
  id?: string;
  required?: boolean;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  placeholder?: string;
  min?: string;
  rows?: number;
  /** Icon shown inside the control (not used for selects). */
  icon?: ReactNode;
  /** Extra classes for the icon (e.g. 'pointer-events-none'). */
  iconClassName?: string;
  /** Extra classes appended to the input / textarea / select. */
  inputClassName?: string;
  /** Options for type="select" — { label, value }. */
  options?: { label: string; value: string }[];
  /** Wrapper classes (e.g. grid placement). */
  className?: string;
}

/**
 * Padding is chosen per control type so no conflicting utilities end up in the
 * class list (Tailwind sorts same-property utilities by value, so an override
 * like pr-3 appended after a base pr-4 would lose). Horizontal padding lives in
 * `textBase` (pl + py), right padding is applied separately.
 */
const variantClasses: Record<FieldVariant, { label: string; control: string; textBase: string; selectBase: string; textPad: string; datePad: string; icon: string; iconTextarea: string }> = {
  green: {
    label: 'block text-xs sm:text-sm font-medium text-gray-700 mb-1 xs:mb-1.5',
    control:
      'w-full border border-gray-200 rounded-lg xs:rounded-xl text-xs xs:text-sm focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-400 transition-all',
    textBase: 'pl-9 xs:pl-10 py-2.5 xs:py-3',
    selectBase: 'py-2.5 xs:py-3 text-gray-700 bg-white',
    textPad: 'pr-3 xs:pr-4',
    datePad: 'pr-3 xs:pr-4',
    icon: 'absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 xs:w-4 xs:h-4 text-gray-400',
    iconTextarea: 'absolute left-3 top-3.5 xs:left-3.5 xs:top-3.5 w-3.5 h-3.5 xs:w-4 xs:h-4 text-gray-400',
  },
  primary: {
    label: 'block text-xs font-semibold text-gray-700 mb-1.5',
    control:
      'w-full border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition-all',
    textBase: 'pl-10 py-3',
    selectBase: 'py-3 bg-white',
    textPad: 'pr-4',
    datePad: 'pr-3',
    icon: 'absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400',
    iconTextarea: 'absolute left-3.5 top-3.5 w-4 h-4 text-gray-400',
  },
};

/** Horizontal padding for selects — px when no icon, icon-safe pl/pr when one is present. */
const selectPad = (variant: FieldVariant, icon: boolean) =>
  icon
    ? variant === 'primary'
      ? 'pl-10 pr-3'
      : 'pl-9 xs:pl-10 pr-3 xs:pr-4'
    : variant === 'primary'
      ? 'px-4'
      : 'px-3 xs:px-4';

/** Label + (icon) + control field, shared by the contact form and booking modals. */
export default function FormField({
  label,
  variant = 'primary',
  type = 'text',
  name,
  id,
  required = false,
  value,
  onChange,
  placeholder,
  min,
  rows,
  icon,
  iconClassName = '',
  inputClassName = '',
  options,
  className = '',
}: FormFieldProps) {
  const v = variantClasses[variant];
  const fieldId = id ?? (name ? `form-field-${name}` : undefined);

  let control: ReactNode;
  if (type === 'select') {
    control = (
      <select
        id={fieldId}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        className={`${v.control} ${v.selectBase} ${selectPad(variant, Boolean(icon))} ${inputClassName}`}
      >
        {options?.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    );
  } else if (type === 'textarea') {
    control = (
      <textarea
        id={fieldId}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows ?? 3}
        className={`${v.control} ${v.textBase} ${v.textPad} ${inputClassName}`}
      />
    );
  } else {
    control = (
      <input
        id={fieldId}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        min={min}
        className={`${v.control} ${v.textBase} ${type === 'date' ? v.datePad : v.textPad} ${inputClassName}`}
      />
    );
  }

  return (
    <div className={className}>
      <label htmlFor={fieldId} className={v.label}>
        {label}
      </label>
      <div className="relative">
        {icon && <span className={`${type === 'textarea' ? v.iconTextarea : v.icon} ${iconClassName}`}>{icon}</span>}
        {control}
      </div>
    </div>
  );
}

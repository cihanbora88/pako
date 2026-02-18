interface FilterTagProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export function FilterTag({ label, isActive, onClick }: FilterTagProps) {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg px-3 py-2 font-['Overpass',sans-serif] text-sm transition-all hover:scale-105 active:scale-95 ${
        isActive
          ? 'bg-[var(--color-secondary)] text-[var(--color-primary)]'
          : 'bg-[var(--color-gray-100)] dark:bg-gray-800 text-[var(--color-text-muted)] dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
      }`}
    >
      {label}
    </button>
  );
}

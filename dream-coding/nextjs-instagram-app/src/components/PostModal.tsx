import type { ReactNode } from 'react';
import CloseIcon from 'components/ui/icons/CloseIcon';

type Props = {
  children: ReactNode;
  onClose: () => void;
};
export default function PostModal({ onClose, children }: Props) {
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
    <section
      className="fixed left-0 top-0 z-50 flex h-full w-full flex-col items-center justify-center bg-neutral-900/70"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <button
        className="fixed right-0 top-0 p-8 text-white"
        onClick={() => onClose()}
      >
        <CloseIcon />
      </button>
      <div className="h-3/5 w-4/5 max-w-7xl bg-white">{children}</div>
    </section>
  );
}

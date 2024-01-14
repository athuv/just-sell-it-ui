import Link from 'next/link';
import { BiSolidLocationPlus } from 'react-icons/bi';

function ButtonAllLocation({ area = '' }: { area?: string }) {
  return (
    <Link href="/?showLocation=true">
      <button
        aria-label="Select Location"
        type="button"
        className="flex items-center justify-center gap-2 rounded-md bg-quinary p-2 text-lg text-primaryBg"
      >
        <BiSolidLocationPlus />
        <span>{area !== '' ? area : 'ALL LOCATION'}</span>
        <input readOnly hidden name="area" value={area} />
      </button>
    </Link>
  );
}

export default ButtonAllLocation;

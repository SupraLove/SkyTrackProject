import {
  MapPin,
  MoreHorizontal,
  Route,
  SquareArrowOutUpRight,
} from "lucide-react";

interface Props {
  onRoute: () => void;
  onFollow: () => void;
  onShare: () => void;
  onMore: () => void;
}

export function FlightActions({ onRoute, onFollow, onShare, onMore }: Props) {
  return (
    <div>
      <div className="grid grid-cols-4 gap-1 mx-4 mb-4">
        <button
          onClick={onRoute}
          className="py-1 flex flex-col items-center gap-2 bg-neutral-800 rounded-l-lg transition-colors hover:bg-neutral-700"
        >
          <Route size={22} />
          <span>Route</span>
        </button>

        <button
          onClick={onFollow}
          className=" py-1 flex flex-col items-center gap-2 bg-neutral-800  transition-colors hover:bg-neutral-700"
        >
          <MapPin size={22} />
          <span>Follow</span>
        </button>

        <button
          onClick={onShare}
          className="py-1 flex flex-col items-center gap-2 bg-neutral-800  transition-colors hover:bg-neutral-700"
        >
          <SquareArrowOutUpRight size={22} />
          <span>Share</span>
        </button>

        <button
          onClick={onMore}
          className="py-1 flex flex-col items-center gap-2 bg-neutral-800 rounded-r-lg transition-colors hover:bg-neutral-700"
        >
          <MoreHorizontal size={22} />
          <span>More</span>
        </button>
      </div>
    </div>
  );
}

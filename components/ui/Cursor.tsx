type CursorProps = {
  x: number;
  y: number;
};

const Cursor = ({ x = 0, y = 0 }: CursorProps) => {
  return (
    <div
      className="fixed text-xs z-1 transition-transform duration-500 ease-in-out border border-white/30 text-white/80 bg-white/20 px-4 py-2 rounded-full whitespace-nowrap"
      style={{
        left: `${x}px`,
        top: `${y}px`,
      }}
    >
      Click anywhere to download my Resume
    </div>
  );
};

export default Cursor;

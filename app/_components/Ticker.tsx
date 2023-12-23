export type TickerVariant = "small" | "large";

export function Ticker({
  name,
  variant,
}: {
  name: string;
  variant: TickerVariant;
}) {
  if (variant === "small") {
    return (
      <div
        className={`flex h-[75px] min-h-[75px] w-[75px] min-w-[75px] items-end justify-start rounded-lg bg-gray-700 pb-[6px] pl-[6px] text-white`}
      >
        <div className="text-base uppercase">{name}</div>
      </div>
    );
  }

  return (
    <div
      className={`flex h-[200px] min-h-[200px] w-[200px] min-w-[200px] items-end justify-start rounded-2xl bg-gray-700 pb-[16px] pl-[16px] text-white`}
    >
      <div className="text-4xl uppercase">{name}</div>
    </div>
  );
}

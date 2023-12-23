import clsx from "clsx";

export function DetailsCard({
  price,
  mosPrice,
  shouldBuy,
}: {
  price: number;
  mosPrice: number;
  shouldBuy: boolean;
}) {
  return (
    <div
      className={clsx(
        "flex",
        "h-[75px]",
        "w-[300px]",
        "items-center",
        "justify-between",
        "rounded-lg",
        "bg-gray-100",
        "px-6",
        "shadow-md",
        shouldBuy ? "bg-green-100" : "bg-red-100",
      )}
    >
      <div className="flex flex-col">
        <h2 className="text-base text-gray-700">Price</h2>
        <p className="text-[24px] font-bold text-black">${price}</p>
      </div>
      <div className="flex flex-col">
        <h2 className="text-base text-gray-700">MOS Price</h2>
        <p className="text-[24px] font-bold text-black">${mosPrice}</p>
      </div>
    </div>
  );
}

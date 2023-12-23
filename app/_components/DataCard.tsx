export function DataCard({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <div className="flex h-[100px] w-[300px] items-center justify-start rounded-lg bg-gray-100 px-6 shadow-md">
      <div className="flex flex-col">
        <h2 className="text-base text-gray-700">{title}</h2>
        <p className="text-[40px] font-bold text-black">{content}</p>
      </div>
    </div>
  );
}

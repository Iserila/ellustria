export default function BadgeComponent({ content }: { content: string }) {
  return (
    <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-700">
      {content}
    </span>
  );
}

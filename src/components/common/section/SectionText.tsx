type Props = {
  text: string;
};

function SectionText({ text = "Section name" }: Props) {
  return (
    <div className="flex gap-4 justify-between items-center w-full">
      <hr className="border-t border-gray-300 w-full" />
      <h4 className="text-xs md:text-sm whitespace-nowrap shrink-0 lg:text-lg text-gray-400">
        {text.toUpperCase()}
      </h4>
      <hr className="border-t border-gray-300 w-full" />
    </div>
  );
}

export default SectionText;

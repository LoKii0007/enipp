import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqCard({ theme, item }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem
        className={` ${
          theme === "dark"
            ? "bg-[#141B22] text-white"
            : "bg-[#ffffff] text-black"
        } border-none  `}
        value="item-1"
      >
        <AccordionTrigger className='px-5 border-none text-ellipsis overflow-hidden whitespace-nowrap' >{item.question}</AccordionTrigger>
        <AccordionContent className='px-5 border-none' >
          {item.answer}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

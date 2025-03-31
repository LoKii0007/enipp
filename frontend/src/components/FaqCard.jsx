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
            ? "bg-[#141B22] gradient-1 overflow-hidden text-white"
            : "bg-[#ffffff] text-black"
        } border-none  `}
        value="item-1"
      >
        <AccordionTrigger className='mx-4 border-none text-ellipsis overflow-hidden whitespace-nowrap md:text-xl font-bold ' >{item.question}</AccordionTrigger>
        <AccordionContent className='px-4 border-none md:text-lg' >
          {item.answer}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

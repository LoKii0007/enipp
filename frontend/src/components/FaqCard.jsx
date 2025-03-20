import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqCard({ theme }) {
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
        <AccordionTrigger className='px-5 border-none' >Is it accessible?</AccordionTrigger>
        <AccordionContent className='px-5 border-none' >
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

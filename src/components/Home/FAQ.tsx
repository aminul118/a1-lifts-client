import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Image from "next/image";

import SectionTitle from "../ui/SectionTitle";
import faqData from "@/lib/constants/faqData";

const FAQ = () => {
  return (
    <section className="container mx-auto py-16 2xl:py-24">
      <SectionTitle title="FAQ" />

      <div className="grid sm:grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
        {/* FAQ Image */}
        <div className="mx-auto">
          <Image
            data-aos="fade-left"
            // data-aos="fade-left"
            src={"/assets/icons/FAQ.png"}
            width={500}
            height={500}
            alt="FAQ image of TabEdge"
            className="max-w-[80%] md:max-w-full"
          />
        </div>

        {/* Accordion Content */}
        <div className="max-w-xl w-full px-4">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((item) => (
              <AccordionItem key={item.value} value={item.value}>
                <AccordionTrigger data-aos="fade-right">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

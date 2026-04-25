"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

type Faq = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: Faq[];
};

export default function FaqAccordion({ items }: FaqAccordionProps) {
  return (
    <Accordion.Root type="single" collapsible className="space-y-3">
      {items.map((item, index) => (
        <Accordion.Item
          key={item.question}
          value={`item-${index}`}
          className="inline-chip overflow-hidden rounded-2xl"
        >
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-4 py-3 text-left text-base font-medium">
              <span>{item.question}</span>
              <ChevronDown
                size={17}
                className="shrink-0 text-[var(--soft)] transition-transform duration-200 group-data-[state=open]:rotate-180"
              />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="px-4 pb-4 text-sm leading-7 text-[var(--muted)] data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            {item.answer}
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}

import { useId } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string | React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
  onKeyNavigation: (
    index: number,
    direction: "up" | "down" | "home" | "end",
  ) => void;
}

export default function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
  index,
  onKeyNavigation,
}: FAQItemProps) {
  const uniqueId = useId();
  const buttonId = `faq-btn-${uniqueId}`;
  const panelId = `faq-panel-${uniqueId}`;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        onKeyNavigation(index, "down");
        break;
      case "ArrowUp":
        e.preventDefault();
        onKeyNavigation(index, "up");
        break;
      case "Home":
        e.preventDefault();
        onKeyNavigation(index, "home");
        break;
      case "End":
        e.preventDefault();
        onKeyNavigation(index, "end");
        break;
    }
  };

  return (
    <div
      className="bg-slate-900/60 backdrop-blur-lg border rounded-xl hover:shadow-lg transition-all"
      style={{
        borderColor: "rgb(245 158 11 / 20%)",
        boxShadow: isOpen ? "0 10px 30px rgb(245 158 11 / 20%)" : undefined,
      }}
    >
      <h3>
        <button
          id={buttonId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="flex justify-between items-start w-full text-left p-6 focus-ring rounded-xl group"
          onClick={onToggle}
          onKeyDown={handleKeyDown}
          data-faq-trigger
        >
          <span
            className="text-lg font-bold text-white pr-4 transition-colors duration-200"
            style={{ color: isOpen ? "rgb(245 158 11 / 90%)" : undefined }}
          >
            {question}
          </span>
          <span className="flex-shrink-0 ml-2" aria-hidden="true">
            <ChevronDown
              className={`h-6 w-6 transition-transform duration-200 ${
                isOpen ? "rotate-180" : "text-slate-400"
              }`}
              style={{ color: isOpen ? "rgb(245 158 11 / 90%)" : undefined }}
            />
          </span>
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!isOpen}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 pr-14">
          <div className="text-slate-300 leading-relaxed">{answer}</div>
        </div>
      </div>
    </div>
  );
}

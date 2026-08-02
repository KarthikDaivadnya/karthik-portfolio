"use client";
import { useState } from "react";
import { Bot, X } from "lucide-react";

/**
 * STUB — an "AI Chat Assistant" needs a real backend (an LLM API call,
 * rate limiting, and a system prompt grounded in your actual resume data)
 * to be honest and useful. This component intentionally ships as a closed
 * placeholder rather than a chat UI that fakes replies with canned text.
 *
 * To make this real: add an app/api/chat/route.ts that calls the Anthropic
 * or OpenAI API with your project/skills data as context, then swap the
 * placeholder panel below for an actual message list + input.
 */
export default function AIChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-24 left-5 z-[500]">
      {open && (
        <div className="mb-3 w-72 rounded-2xl border border-white/10 bg-bg2 p-5 shadow-2xl">
          <div className="mb-2 flex items-center justify-between">
            <b className="text-sm">Ask about my work</b>
            <button onClick={() => setOpen(false)} aria-label="Close" className="text-inkDim hover:text-ink">
              <X size={15} />
            </button>
          </div>
          <p className="text-[12.5px] leading-relaxed text-inkDim">
            Not wired up yet — this needs a real backend LLM call to answer honestly instead of
            faking responses. See the component source for what to add.
          </p>
        </div>
      )}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="AI chat assistant"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-white shadow-xl transition-transform hover:scale-105"
      >
        <Bot size={19} />
      </button>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CodeBlockProps {
  rawCode: string;
  language: string;
  highlightedHtml: string;
}

export function CodeBlock({ rawCode, language, highlightedHtml }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(rawCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code: ", err);
    }
  };

  // Nice display name for languages
  const getLanguageName = (lang: string) => {
    if (!lang) return "CODE";
    const mapping: { [key: string]: string } = {
      js: "JAVASCRIPT",
      javascript: "JAVASCRIPT",
      ts: "TYPESCRIPT",
      typescript: "TYPESCRIPT",
      py: "PYTHON",
      python: "PYTHON",
      bash: "BASH",
      sh: "SHELL",
      json: "JSON",
      html: "HTML",
      css: "CSS",
      md: "MARKDOWN",
      mdx: "MDX",
      yaml: "YAML",
      yml: "YAML",
    };
    return mapping[lang.toLowerCase()] || lang.toUpperCase();
  };

  return (
    <div className="my-6 rounded-lg overflow-hidden border border-[#cbc9c0] dark:border-white/10 bg-[#0B1120] shadow-xl transition-all duration-300">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#1e293b]/50 border-b border-[#cbc9c0]/30 dark:border-white/5 select-none">
        <span className="font-mono text-xs font-semibold text-gray-400 tracking-wider">
          {getLanguageName(language)}
        </span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#334155]/50 hover:bg-[#475569] text-gray-300 hover:text-white font-mono text-xs transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-cyan-500"
          title="Copy to clipboard"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400 animate-in zoom-in-50 duration-200" />
              <span className="text-emerald-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code body */}
      <div className="overflow-x-auto">
        <pre className="p-4 font-mono text-xs md:text-sm leading-relaxed text-gray-100 bg-[#0B1120] overflow-x-auto whitespace-pre">
          <code
            dangerouslySetInnerHTML={{ __html: highlightedHtml }}
            className={`language-${language}`}
          />
        </pre>
      </div>
    </div>
  );
}

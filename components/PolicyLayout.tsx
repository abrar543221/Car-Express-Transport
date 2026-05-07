import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface PolicyLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function PolicyLayout({ title, lastUpdated, children }: PolicyLayoutProps) {
  return (
    <div className="min-h-screen bg-white pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 text-sm mb-10 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="mb-10 pb-8 border-b border-slate-200">
          <p className="text-cyan-600 text-xs font-semibold uppercase tracking-widest mb-3">
            Legal
          </p>
          <h1 className="text-4xl sm:text-5xl font-black font-syne text-slate-900 mb-3">
            {title}
          </h1>
          <p className="text-slate-500 text-sm">Last updated: {lastUpdated}</p>
        </div>

        <div
          className="prose prose-slate prose-sm max-w-none
          prose-headings:font-syne prose-headings:font-bold prose-headings:text-slate-900
          prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
          prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-3
          prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-4
          prose-li:text-slate-600 prose-li:leading-relaxed
          prose-ul:my-4 prose-ul:space-y-1
          prose-strong:text-slate-800 prose-strong:font-semibold
          prose-a:text-cyan-600 hover:prose-a:text-cyan-700
          prose-hr:border-slate-200
        "
        >
          {children}
        </div>
      </div>
    </div>
  );
}

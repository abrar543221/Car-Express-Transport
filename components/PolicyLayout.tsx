import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface PolicyLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function PolicyLayout({ title, lastUpdated, children }: PolicyLayoutProps) {
  return (
    <div className="min-h-screen bg-navy-900 pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-10 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-10 pb-8 border-b border-white/10">
          <p className="text-orange-500 text-xs font-semibold uppercase tracking-widest mb-3">
            Legal
          </p>
          <h1 className="text-4xl sm:text-5xl font-black font-syne text-white mb-3">
            {title}
          </h1>
          <p className="text-white/40 text-sm">Last updated: {lastUpdated}</p>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-sm max-w-none
          prose-headings:font-syne prose-headings:font-bold prose-headings:text-white
          prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
          prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-3
          prose-p:text-white/65 prose-p:leading-relaxed prose-p:mb-4
          prose-li:text-white/65 prose-li:leading-relaxed
          prose-ul:my-4 prose-ul:space-y-1
          prose-strong:text-white/90 prose-strong:font-semibold
          prose-a:text-orange-500 hover:prose-a:text-orange-400
          prose-hr:border-white/10
        ">
          {children}
        </div>
      </div>
    </div>
  );
}

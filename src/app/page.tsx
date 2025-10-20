import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#2b2b31] flex flex-col">
      <main className="container mx-auto px-6 py-12 flex-grow">
        <div className="grid lg:grid-cols-2 gap-8 items-start max-w-7xl mx-auto">
          <div className="bg-[#2b2b31] rounded-2xl p-8 border-2 border-[#A60E0E] shadow-2xl">
            <h2 className="text-3xl font-bold text-[#E1C586] mb-6">
              Text about the project
            </h2>
            <div className="space-y-4 text-[#999999] leading-relaxed">
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">

            <Link href="/dashboard">
              <div className="group bg-[#E1C586] rounded-2xl p-8 cursor-pointer hover:bg-[#E1D486] transition-all duration-200 shadow-xl border-2 border-[#BB9867]">
                <h3 className="text-2xl font-bold text-[#2b2b31] mb-2">Try the App</h3>
                <p className="text-[#2b2b31]">
                  Explore film tokens and try the app
                </p>
                <div className="mt-4 text-[#85840D] font-semibold flex items-center gap-2">
                  Get Started
                  <span className="group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </div>
            </Link>

            <Link href="/subscribe">
              <div className="group bg-[#2b2b31] rounded-2xl p-8 cursor-pointer hover:border-[#E1D486] transition-all duration-200 border-2 border-[#BB9867] shadow-xl">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-2xl font-bold text-[#E1C586]">Subscribe</h3>
                  <span className="px-3 py-1 bg-[#85840D] text-[#2b2b31] text-xs font-semibold rounded-full">
                    Premium
                  </span>
                </div>
                <p className="text-[#999999]">
                  Get the full experience
                </p>
                <div className="mt-4 text-[#E1D486] font-semibold flex items-center gap-2">
                  View Plans
                  <span className="group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </div>
            </Link>

            <Link href="/support-film-maker">
              <div className="group bg-[#2b2b31] rounded-2xl p-8 cursor-pointer hover:border-[#E1D486] transition-all duration-200 border-2 border-[#BB9867] shadow-xl">
                <h3 className="text-2xl font-bold text-[#E1C586] mb-2">Support a Filmmaker</h3>
                <p className="text-[#999999]">
                  Directly support independent filmmakers
                </p>
                <div className="mt-4 text-[#E1D486] font-semibold flex items-center gap-2">
                  Learn More
                  <span className="group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

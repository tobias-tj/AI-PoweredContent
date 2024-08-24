import { Auth } from "@/components/auth";
import { Logo } from "@/components/logo";
import Image from "next/image";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { ArrowUp, Bot, Zap } from "lucide-react";

export default function Home() {
  const { userId } = auth();

  if (userId) {
    redirect("/dashboard");
  }

  return (
    <div className="relative flex flex-col min-h-screen bg-white text-gray-900">
      <div className="absolute inset-0 bg-gray-100 opacity-70"></div>

      <header className="relative z-10 px-4 mt-5 lg:px-6 h-16 flex items-center">
        <Logo />
        <nav className="ml-auto lg:flex gap-4 sm:gap-6">
          <Auth />
        </nav>
      </header>

      <main className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container max-w-4xl mx-auto">
            <div className="space-y-6 md:space-y-8">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-gray-900">
                Ultimate AI Content Generator
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto text-gray-700">
                Empower your social media strategy with our state-of-the-art AI
                tools, designed to elevate your content creation and maximize
                impact.
              </p>
            </div>

            <div className="mt-12 flex flex-col items-center">
              <div className="inline-block rounded-full bg-gray-800 px-4 py-2 text-sm font-semibold text-white">
                Key Features
              </div>
            </div>

            <div className="mx-auto mt-10 grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex items-start gap-4 p-6 rounded-lg bg-gray-200 shadow-lg">
                <div className="rounded-full bg-gray-600 p-3 text-white">
                  <ArrowUp />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Increased Efficiency
                  </h3>
                  <p className="text-gray-600">
                    Automate workflows and streamline processes for maximum
                    productivity.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-lg bg-gray-200 shadow-lg">
                <div className="rounded-full bg-gray-600 p-3 text-white">
                  <Zap />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Accelerated Growth
                  </h3>
                  <p className="text-gray-600">
                    Leverage cutting-edge tools to drive innovation and scale
                    your content.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-lg bg-gray-200 shadow-lg">
                <div className="rounded-full bg-gray-600 p-3 text-white">
                  <Bot />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    AI Powered
                  </h3>
                  <p className="text-gray-600">
                    Generate content on the go with simple AI suggestions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 py-4 px-6 text-center bg-gray-800">
        <p className="text-gray-300">&copy; 2024 TJ. All rights reserved.</p>
      </footer>
    </div>
  );
}

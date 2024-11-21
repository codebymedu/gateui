import { Button, buttonVariants } from "@/components/ui/button";
import {
  ArrowRight,
  Check,
  CheckCircle,
  ExternalLink,
  Github,
  X,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import BuildThatSaas from "@/images/buildthatsaas.png";
import Reputable from "@/images/reputable.png";
import { Features } from "./_components/features";

const DocsPage = () => {
  return (
    <>
      <div className="flex items-center flex-col justify-center gap-6">
        <h1 className="text-4xl font-extrabold max-w-4xl text-center">
          {/* Identity Management for Next.js & Supabase */}I built an Identity
          Management for Next.js & Supabase So You Dont Have To
        </h1>

        <p className="text-lg max-w-3xl text-center">
          Save hours on authentication, user, organization management, and
          access control with customizable components.
        </p>

        <div className="flex flex-col w-full md:w-fit md:flex-row gap-4">
          <Link
            className={buttonVariants({
              variant: "default",
            })}
            href="/docs/install"
          >
            Check Documentation <ArrowRight />
          </Link>

          <Link
            className={buttonVariants({ variant: "secondary" })}
            target="_blank"
            href="https://github.com/codebymedu/gateui"
          >
            View on Github <Github />
          </Link>
        </div>

        <div className="flex gap-4 flex-col md:flex-row items-center mt-8 text-neutral-400">
          <div className="bg-neutral-800 w-full md:w-fit h-20 px-4 py-1 flex items-center gap-2">
            <CheckCircle size={16} className="text-green-500" /> 2 Minutes to
            setup
          </div>
          <div className="bg-neutral-800 w-full md:w-fit h-20  px-4 py-1 flex items-center gap-2">
            <CheckCircle size={16} className="text-green-500" /> Super
            Customizable
          </div>

          <div className="bg-neutral-800 w-full md:w-fit h-20  px-4 py-1 flex items-center gap-2">
            <CheckCircle size={16} className="text-green-500" /> Works with
            React 19
          </div>

          <div className="bg-neutral-800 w-full md:w-fit h-20  px-4 py-1 flex items-center gap-2">
            <CheckCircle size={16} className="text-green-500" /> You focus on
            what matters
          </div>
        </div>

        <section>
          <h3 className="text-3xl font-bold mb-4 mt-16 text-center">
            How long did your last authentication setup take?
          </h3>

          <p className="text-lg max-w-3xl text-center mb-12">
            Was it days of focus? Weeks? or sometimes even months?
            <br />
            <br />I can tell you how long mine was. When I build reputable.so,
            it took me straight 8 days of full focus to build a proper
            authentication flow.
            <br />
            <br />
            This is what a typical flow looked for me:
          </p>

          <ul className="">
            <li className="flex gap-2 text-green-500 items-center">
              <Check /> Have a product idea
            </li>

            <li className="flex gap-2 text-green-500 items-center">
              <Check /> Plan it out
            </li>

            <li className="flex gap-2 items-center text-green-500">
              <Check /> Start building a MVP
            </li>

            <li className="flex gap-2 items-center text-red-500">
              <X /> Start creating authentication flow diagrams
            </li>

            <li className="flex gap-2 items-center text-red-500">
              <X /> Connect Supabase
            </li>

            <li className="flex gap-2 items-center text-red-500">
              <X /> Create Middleware
            </li>

            <li className="flex gap-2 items-center text-red-500">
              <X /> Create callback/confirm Routes
            </li>

            <li className="flex gap-2 items-center text-red-500">
              <X /> Gets stuck because my routes are not working
            </li>

            <li className="flex gap-2 items-center text-green-500">
              <Check /> 20 steps later ... I finished authentication
            </li>

            <li className="flex gap-2 items-center text-red-500">
              <X /> Motivation has dropped to 0 already
            </li>
          </ul>
        </section>

        <Features />

        <section id="examples" className="container mx-auto px-4 py-20">
          <h3 className="text-3xl font-bold mb-12 text-center">
            Built with GateUI
          </h3>

          <p className="text-lg max-w-3xl text-center mx-auto mb-12">
            Here's the 2 apps I built using GateUI
          </p>
          <div className="flex flex-wrap gap-12 justify-center">
            {[
              {
                name: "Plan.BuildThatSaaS",
                description: "SaaS idea planner",
                image: BuildThatSaas,
                url: "https://plan.buildthatsaas.com",
              },
              {
                name: "Reputable",
                description: "Notion-like link in bio builder",
                image: Reputable,
                url: "https://reputable.so",
              },
            ].map((example, index) => (
              <div
                key={index}
                className="bg-neutral-800  max-w-96  overflow-hidden shadow-lg transition-transform hover:scale-105"
              >
                <Image
                  src={example.image}
                  alt={`Screenshot of ${example.name}`}
                  width={400}
                  height={300}
                  className="w-full h-48  object-fit"
                />
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2">{example.name}</h4>
                  <p className="text-neutral-400 mb-4">{example.description}</p>
                  <a
                    href={example.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-500 hover:underline"
                  >
                    Visit Site
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="pricing" className="container mx-auto px-4 py-20">
          <h3 className="text-3xl font-bold mb-12 text-center">$0 Price</h3>

          <p className="text-lg max-w-3xl text-center mx-auto mb-12">
            I am making GateUI public, so every developer, every indie maker out
            there can focus building in what they love and not repeatable tasks.
            <br />
            <br />I will NEVER charge you for this. Not your personal info, not
            your email, not your money, nothing!
            <br />
            <br />
            The only think I can ask you is a{" "}
            <a
              href="https://github.com/codebymedu/gateui"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              star in Github
            </a>{" "}
            and that's it.
            <br />
            <br />
            <b>Enjoy building you awesome applications and never give up!</b>
          </p>
        </section>
      </div>
    </>
  );
};

export default DocsPage;

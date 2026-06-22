import type { Metadata } from "next";
import { getSiteMeta } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: "Creative operator, independent technologist.",
};

export default function AboutPage() {
  const site = getSiteMeta();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      {/* Header */}
      <div className="mb-12">
        <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Hi, I&rsquo;m {site.name}
        </h1>
        <p className="mt-2 font-[family-name:var(--font-body)] text-sm tracking-wide text-muted-foreground">
          Technical generalist
        </p>
      </div>

      {/* Body */}
      <div className="prose-custom">
        <p>
          I build at the intersection of frontier technology and cultural
          intelligence, designing systems that help people, capital, and ideas
          move with more clarity in the open.
        </p>

        <h2>What I do</h2>

        <p>
          I move between many worlds: protocol design and software engineering,
          accelerators and investment pipelines, fashion salons, curatorial
          projects, creative writing, and community programming. The thread
          running through all of it is coordination: how people, capital, and
          ideas organize themselves, and how better infrastructure can help them
          succeed.
        </p>

        <p>
          Over the past several years I&rsquo;ve led ecosystem and builder
          programs across frontier tech domains&mdash;hackathons, accelerators,
          governance initiatives&mdash;that turn raw experimentation into durable
          companies. My practice spans engineering, ecosystem development, and
          zero-to-one program design, often focused on structured funnels that
          walk builders from thesis to prototype to investment readiness.
        </p>

        <p>
          Alongside this, I founded <strong>COLDS Collective</strong>, a studio
          and community exploring the intersection of technology and culture.
          Through it, I develop products, tools, and experiences that push the
          frontier and expand accessibility to emerging technologies.
        </p>

        <p>
          My perspective is shaped by growing up between Nigeria, the UK, and the
          United States as a first-generation Igbo and the only daughter in my
          family. I was raised around art, archives, and a deep respect for
          documentation and storytelling. That reverence for memory and history
          informs everything I make. What also shapes the work as much as
          biography is a framework I&rsquo;m building around{" "}
          <a
            href="https://theslipstream.substack.com/p/dispatch-2-collective-sensemaking"
            target="_blank"
            rel="noopener noreferrer"
          >
            <em>collective sensemaking</em>
          </a>
          : the practice of finding meaning across seemingly unconnected domains,
          because cross-domain attentiveness is what keeps the work ensouled and
          accessible to people outside any single context.
        </p>

        <h2>What I&rsquo;m building now</h2>

        <p>
          I&rsquo;m focused on designing intelligent organizations, agent-driven
          models for capital coordination, and creative infrastructure under the
          broader umbrella of <strong>Kingdom of Affections</strong>, a project
          exploring what a new operating system for cultural literacy might look
          like.
        </p>

        <p>
          This site is the digital living room: a place to document what
          I&rsquo;m building, reading, prototyping, and thinking through in
          public.
        </p>

        <h2>Stay a while</h2>

        <p>
          A few rooms worth wandering through: my{" "}
          <a href="/work">Work</a>, the{" "}
          <a href="/speaking">talks I&rsquo;ve given</a>, and the events
          I&rsquo;ve produced under <a href="/events">Events</a>. There&rsquo;s
          also a bookshelf, a playlist, and a few other rooms to explore.
        </p>

        <p>
          If you&rsquo;re building something ambitious and intentional, I&rsquo;d
          love to hear from you. Email me at{" "}
          <a href="mailto:nneoma@coldscollective.io">
            nneoma@coldscollective.io
          </a>{" "}
          or find me on Twitter at{" "}
          <a
            href="https://x.com/nnectarineee"
            target="_blank"
            rel="noopener noreferrer"
          >
            @nnectarineee
          </a>
          .
        </p>
      </div>
    </div>
  );
}

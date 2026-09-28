import { Hero } from "@/components/home/hero";
import { CurrentlyBlock } from "@/components/home/currently-block";
import { SelectedWork } from "@/components/home/selected-work";
import { ExperiencePreview } from "@/components/home/experience-preview";
import { ContentPreview } from "@/components/home/content-preview";
import { SpeakingPreview } from "@/components/home/speaking-preview";
import { EventsPreview } from "@/components/home/events-preview";
import {
  getSiteMeta,
  getCurrentlyItems,
  getProjects,
  getWork,
  getWriting,
  getSpeaking,
  getEvents,
} from "@/lib/content";

export default function HomePage() {
  const site = getSiteMeta();
  const currentlyItems = getCurrentlyItems();
  const projects = getProjects();
  const roles = getWork().filter((w) => w.type === "role");
  const writing = getWriting();
  const speaking = getSpeaking();
  const events = getEvents();

  return (
    <>
      <Hero name={site.name} bio={site.bio} motto={site.motto} />
      <CurrentlyBlock items={currentlyItems} />
      <SelectedWork projects={projects} />
      <ExperiencePreview roles={roles} />
      <ContentPreview writing={writing} />
      <SpeakingPreview speaking={speaking} />
      <EventsPreview events={events} />
    </>
  );
}

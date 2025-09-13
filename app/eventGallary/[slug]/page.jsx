import EventGallerySingle from "@/components/eventGallery/EventGallerySingle";
import EventGalleryHero from "@/components/eventGallery/EventGalleryHero";
import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";
import { fetchEventGalleryBySlug } from "@/util/server";

export const metadata = {
  title: "Event Gallery - Ummed Club Kota",
  description: "Explore our event gallery showcasing memorable moments and celebrations at Shree Ummed Club Kota.",
};

export default async function page({ params }) {
  const slug = await params.slug;
  let eventGallery = null;
  
  try {
    eventGallery = await fetchEventGalleryBySlug(slug);
  } catch (error) {
    console.error('Error fetching event gallery:', error);
  }

  return (
    <>
      <main>
        <Header1 />
        <EventGalleryHero eventGallery={eventGallery} />
        <EventGallerySingle eventGallery={eventGallery} />
        <FooterOne />
      </main>
    </>
  );
}
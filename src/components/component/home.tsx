import Image from 'next/image'

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'

//https://v.ftcdn.net/06/10/85/34/240_F_610853419_y1iKORztC46AcfTjJPBVVs43nd3frRiI_ST.mp4 -> video url
export default function HomePage() {
  const images = ['image1', 'image2', 'image3', 'image4']
  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden">
      <main className="flex-1">
        <section className="w-full">
          <Carousel className="w-full" autoScroll autoScrollInterval={3000} >
            <CarouselContent>
              {images.map((altText) => (
                <CarouselItem key={altText}>
                  <Image
                    src={"/" + altText + ".jpg"}
                    width={1720}
                    height={650}
                    alt={altText}
                    className="aspect-video object-cover"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* <CarouselNext /> */}
          </Carousel>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-6">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Garba Sponsorship Program
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Celebrate the Vibrant Garba Culture</h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The Garba Sponsorship Program is a unique opportunity to support and showcase the rich cultural heritage
                of Garba dance. By becoming a sponsor, you can contribute to the preservation and promotion of this
                vibrant tradition, connecting with the community and amplifying your brand&apos;s presence.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {images.map((altText) => (
                <Image
                  src={"/" + altText + ".jpg"}
                  width={400}
                  height={300}
                  alt={altText}
                  className="rounded-lg object-cover"
                  key={altText}
                />
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <video
            className="absolute inset-0 object-cover w-full h-full -z-10"
            autoPlay
            muted
            loop
          >
            <source src="https://v.ftcdn.net/06/10/85/34/240_F_610853419_y1iKORztC46AcfTjJPBVVs43nd3frRiI_ST.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-6">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Sponsorship Tiers
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Explore the Sponsorship Opportunities</h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The Garba Sponsorship Program offers various tiers to suit your needs and budget. From Bronze to
                Platinum, each level provides unique benefits and opportunities to showcase your brand and support the
                vibrant Garba community.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {images.map((altText) => (
                <Image
                  src={"/" + altText + ".jpg"}
                  width={400}
                  height={300}
                  alt={altText}
                  className="rounded-lg object-cover"
                  key={altText}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

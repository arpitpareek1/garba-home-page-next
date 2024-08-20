
/** Add fonts into your Next.js project:

import { Crimson_Text } from 'next/font/google'
import { Caudex } from 'next/font/google'

crimson_text({
  subsets: ['latin'],
  display: 'swap',
})

caudex({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
// Import fonts with proper configuration
import Link from 'next/link'
import Image from 'next/image'

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'


export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">

      <main className="flex-1">
        <section className="w-full">
          <Carousel className="w-full">
            <CarouselContent>
              {['Garba Event', 'Garba Performers', 'Garba Celebration', 'Garba Dancers'].map((altText) => (
                <CarouselItem key={altText}>
                  <Image
                    src="/placeholder.svg"
                    width={1720}
                    height={900}
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
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Become a Sponsor
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {['Garba Performers', 'Garba Celebration', 'Garba Event', 'Garba Dancers'].map((altText) => (
                <Image
                  src="/placeholder.svg"
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
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                View Sponsorship Tiers
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {['Garba Performers', 'Garba Celebration', 'Garba Event', 'Garba Dancers'].map((altText) => (
                <Image
                  src="/placeholder.svg"
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

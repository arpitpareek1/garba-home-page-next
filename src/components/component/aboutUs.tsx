import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Image from "next/image"

export default function AboutUS() {
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="space-y-2">
                                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">About Acme Inc</h1>
                                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                        Acme Inc is a leading provider of innovative web solutions. Our mission is to empower businesses of
                                        all sizes to thrive online.
                                    </p>
                                </div>
                            </div>
                            <Image
                                src="/placeholder.svg"
                                width="550"
                                height="550"
                                alt="About Us"
                                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                            />
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Mission</h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    At Acme Inc, our mission is to empower businesses of all sizes to thrive online. We believe that every
                                    organization deserves access to cutting-edge web technologies and world-class support.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Values</h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Integrity, innovation, and customer-centricity are the core values that guide our every decision. We
                                    are committed to delivering exceptional results while maintaining the highest ethical standards.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet Our Team</h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Our team of experts is dedicated to providing you with world-class web solutions. Get to know the
                                    people behind Acme Inc.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
                            <div className="flex flex-col items-center space-y-4">
                                <Avatar>
                                    <AvatarImage src="/placeholder-user.jpg" />
                                    <AvatarFallback>JD</AvatarFallback>
                                </Avatar>
                                <div className="space-y-1 text-center">
                                    <h3 className="text-lg font-bold">John Doe</h3>
                                    <p className="text-sm text-muted-foreground">CEO</p>
                                    <p className="text-sm text-muted-foreground">
                                        John is the visionary behind Acme Inc, leading the company to new heights with his strategic vision
                                        and innovative mindset.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center space-y-4">
                                <Avatar>
                                    <AvatarImage src="/placeholder-user.jpg" />
                                    <AvatarFallback>JA</AvatarFallback>
                                </Avatar>
                                <div className="space-y-1 text-center">
                                    <h3 className="text-lg font-bold">Jane Appleseed</h3>
                                    <p className="text-sm text-muted-foreground">CTO</p>
                                    <p className="text-sm text-muted-foreground">
                                        Jane is the technical mastermind behind Acme Inc, ensuring our solutions are cutting-edge and
                                        future-proof.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center space-y-4">
                                <Avatar>
                                    <AvatarImage src="/placeholder-user.jpg" />
                                    <AvatarFallback>SM</AvatarFallback>
                                </Avatar>
                                <div className="space-y-1 text-center">
                                    <h3 className="text-lg font-bold">Sarah Musk</h3>
                                    <p className="text-sm text-muted-foreground">Head of Design</p>
                                    <p className="text-sm text-muted-foreground">
                                        Sarah is the creative force behind Acme Inc, crafting beautiful and user-friendly designs that
                                        delight our clients.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

function MountainIcon(props: React.SVGAttributes<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    )
}
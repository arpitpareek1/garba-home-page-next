
import Link from "next/link"
import { NavigationMenu, NavigationMenuList, NavigationMenuLink, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent } from "@/components/ui/navigation-menu"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"

export default function Header() {
    return (
        <header className="flex h-16 w-full items-center justify-between bg-background px-4 md:px-6">
            <Link href="#" className="flex items-center" prefetch={false}>
                <MountainIcon className="h-6 w-6" />
                <span className="sr-only">Acme Inc</span>
            </Link>
            <nav className="hidden lg:flex">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuLink asChild>
                            <Link
                                href="#"
                                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                                prefetch={false}
                            >
                                Home
                            </Link>
                        </NavigationMenuLink>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="grid w-[400px] p-2">
                                    <NavigationMenuLink asChild>
                                        <Link
                                            href="#"
                                            className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                                            prefetch={false}
                                        >
                                            <div className="text-sm font-medium leading-none group-hover:underline">Analytics</div>
                                            <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                Upgrade your reporting with advanced analytics.
                                            </div>
                                        </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                        <Link
                                            href="#"
                                            className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                                            prefetch={false}
                                        >
                                            <div className="text-sm font-medium leading-none group-hover:underline">Developer Tools</div>
                                            <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                Extend your application with our developer tools.
                                            </div>
                                        </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                        <Link
                                            href="#"
                                            className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                                            prefetch={false}
                                        >
                                            <div className="text-sm font-medium leading-none group-hover:underline">
                                                Security &amp; Compliance
                                            </div>
                                            <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                Keep your data secure with our security features.
                                            </div>
                                        </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                        <Link
                                            href="#"
                                            className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                                            prefetch={false}
                                        >
                                            <div className="text-sm font-medium leading-none group-hover:underline">Scalability</div>
                                            <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                Scale your application with our infrastructure.
                                            </div>
                                        </Link>
                                    </NavigationMenuLink>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link
                                href="#"
                                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                                prefetch={false}
                            >
                                Pricing
                            </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                            <Link
                                href="#"
                                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                                prefetch={false}
                            >
                                Contact
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuList>
                </NavigationMenu>
            </nav>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="lg:hidden">
                        <MenuIcon className="h-6 w-6" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <div className="grid gap-2 py-6">
                        <Link href="#" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
                            Home
                        </Link>
                        <Collapsible className="grid gap-4">
                            <CollapsibleTrigger className="flex w-full items-center text-lg font-semibold [&[data-state=open]>svg]:rotate-90">
                                Features <ChevronRightIcon className="ml-auto h-5 w-5 transition-all" />
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                                <div className="-mx-6 grid gap-6 bg-muted p-6">
                                    <Link href="#" className="group grid h-auto w-full justify-start gap-1" prefetch={false}>
                                        <div className="text-sm font-medium leading-none group-hover:underline">Analytics</div>
                                        <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                            Upgrade your reporting with advanced analytics.
                                        </div>
                                    </Link>
                                    <Link href="#" className="group grid h-auto w-full justify-start gap-1" prefetch={false}>
                                        <div className="text-sm font-medium leading-none group-hover:underline">Developer Tools</div>
                                        <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                            Extend your application with our developer tools.
                                        </div>
                                    </Link>
                                    <Link href="#" className="group grid h-auto w-full justify-start gap-1" prefetch={false}>
                                        <div className="text-sm font-medium leading-none group-hover:underline">
                                            Security &amp; Compliance
                                        </div>
                                        <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                            Keep your data secure with our security features.
                                        </div>
                                    </Link>
                                    <Link href="#" className="group grid h-auto w-full justify-start gap-1" prefetch={false}>
                                        <div className="text-sm font-medium leading-none group-hover:underline">Scalability</div>
                                        <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                            Scale your application with our infrastructure.
                                        </div>
                                    </Link>
                                </div>
                            </CollapsibleContent>
                        </Collapsible>
                        <Link href="#" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
                            Pricing
                        </Link>
                        <Link href="#" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
                            Contact
                        </Link>
                    </div>
                </SheetContent>
            </Sheet>
        </header>
    )
}

function ChevronRightIcon(props: React.SVGAttributes<SVGSVGElement>) {
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
            <path d="m9 18 6-6-6-6" />
        </svg>
    )
}


function MenuIcon(props: React.SVGAttributes<SVGSVGElement>) {
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
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
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
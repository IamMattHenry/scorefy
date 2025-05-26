import { Ear } from "lucide-react";
import Link from "next/link";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "../ui/navigation-menu";
import { Button } from "../ui/button";

export default function LandingNavBar() {
    return (
        <nav className="flex items-center justify-between p-8">
            <div className="flex items-center space-x-2">
                <Link href="/" className="flex items-center space-x-2 text-white">
                    <Ear className="h-10 w-10" />
                    <h1 className="text-4xl font-bold font-anton">Scorefy</h1>
                </Link>
            </div>
            <div className="flex items-center text-white font-blinker">
                <NavigationMenu>
                    <NavigationMenuList className="flex items-center space-x-4">
                        <NavigationMenuItem>
                            <NavigationMenuLink className="w-20 text-center text-base font-semibold" asChild>
                                <Link href="/about" passHref>
                                    Our Story
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink className="w-20 text-center text-base font-semibold" asChild>
                                <Link href="/contact" passHref>
                                    Contact
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/login" passHref>
                                <Button variant={"default"} className="w-20 text-base font-semibold">Login</Button>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </nav>
    );
}
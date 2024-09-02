// components/Navbar.js
import Link from 'next/link';
import styles from './Navbar.module.css';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const Navbar = () => (
  <NavigationMenu className={styles.nav}>
    <NavigationMenuList>
      <NavigationMenuItem>
        <Link href="/" passHref legacyBehavior>
          <NavigationMenuLink className={styles.navLink}>Home</NavigationMenuLink>
        </Link>
      </NavigationMenuItem>

      {/* Dropdown under 'About Us' */}
      <NavigationMenuItem>
        <NavigationMenuTrigger className={styles.navLink}>About Us</NavigationMenuTrigger>
        <NavigationMenuContent className={styles.dropdown}>
          <ul className={styles.dropdownMenu}>
            <li>
              <Link href="/about" passHref legacyBehavior>
                <NavigationMenuLink>About Us</NavigationMenuLink>
              </Link>
            </li>
            <li>
              <Link href="/how-it-works" passHref legacyBehavior>
                <NavigationMenuLink>How It Works</NavigationMenuLink>
              </Link>
            </li>
            <li>
              <Link href="/products" passHref legacyBehavior>
                <NavigationMenuLink>Products</NavigationMenuLink>
              </Link>
            </li>
            <li>
              <Link href="/contact" passHref legacyBehavior>
                <NavigationMenuLink>Contact Us</NavigationMenuLink>
              </Link>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <Link href="/login" passHref legacyBehavior>
          <NavigationMenuLink className={styles.navLink}>Login</NavigationMenuLink>
        </Link>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <Link href="/services" passHref legacyBehavior>
          <NavigationMenuLink className={styles.navLink}>Get Started!</NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
    </NavigationMenuList>
    <NavigationMenuViewport />
  </NavigationMenu>
);
  
  export default Navbar;
import Image from "next/image";

import styles from "../styles/Navbar.module.scss";
import Gradientbar from "./Gradientbar";

const Navbar = (props: any) => (
    <div className={styles.Navbar}>
        <Gradientbar></Gradientbar>
        <div className={styles.NavbarContent}>
            <NavLogo></NavLogo>
            <NavItems></NavItems>
        </div>
    </div>
);

const NavLogo = (props: any) => (
    <div className={styles.NavLogo}>
        <div className={styles.LogoImage}>
            <Image
                src={"/csi-old.png"}
                alt={"CSI Logo"}
                height="100"
                width={100}
            ></Image>
        </div>
        <div className="logotext">
            <p className={styles.CSIText}>
                CSI<p className={styles.mrits}>MRITS</p>
            </p>
            <p className={styles.subtext}>Why see no eyes when you can CSI?</p>
        </div>
    </div>
);

const NavItems = (props: any) => (
    <div className={styles.NavItems}>
        {/* Create NavItems for Register, Events, Members, About, Gallery */}
        <NavItem ItemName="Register"></NavItem>
        <NavItem ItemName="Events"></NavItem>
        <NavItem ItemName="Members"></NavItem>
        <NavItem ItemName="About"></NavItem>
        <NavItem ItemName="Gallery"></NavItem>
    </div>
);

const NavItem = (props: any) => (
    <div className={styles.NavItem}>{props.ItemName}</div>
);

export default Navbar;

import css from "./Footer.module.css";
import React from "react";

const Footer = () => {
    return (
        <footer className={css.footer}>
            <a className={'name'} href={"https://vk.com/hermann_schulze"}>
                by Krankenkopf
            </a>
            <div>
                MMXXI A.D.
            </div>
        </footer>
    )
}
export default Footer;

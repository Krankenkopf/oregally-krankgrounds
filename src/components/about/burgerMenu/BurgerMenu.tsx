import React from "react";

import css from "./BurgerMenu.module.css";

const BurgerMenu = () => {
    return <a href='#' className={css.burger}>
        <div className={css.burgerLine_1}> </div>
        <div className={css.burgerLine_2}> </div>
        <div className={css.burgerLine_3}> </div>
    </a>
}

export default BurgerMenu
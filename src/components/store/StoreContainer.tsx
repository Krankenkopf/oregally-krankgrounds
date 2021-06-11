import hedgehog from "./../../assets/png/hedgehog.png"
import React from "react";
import css from "./Store.module.css"
import HedgehogsDecoration from "../main/decors/HedgehogsDecoration";

const StoreContainer = () => {

    return <div className={css.storePageContainer}>
        <HedgehogsDecoration />
    </div>
}

export default StoreContainer
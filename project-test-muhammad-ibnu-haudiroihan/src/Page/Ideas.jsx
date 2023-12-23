import React, { useEffect, useState } from "react";
import { Banner } from "../components/atoms/banner"
import { Card } from "../components/atoms/Card"
import { ListCard } from "../components/molecules/ListCard";
import { getData, getLinks, getMeta } from "../services/api";

export const Ideas = () => {

    return (
        <>
            <div className="mb-10 mt-16 z-0">
                <Banner />
            </div>
            <div className="px-28 z-1">
                <div className="z-1">
                    <ListCard/>
                </div>
            </div>
        </>
    )
}
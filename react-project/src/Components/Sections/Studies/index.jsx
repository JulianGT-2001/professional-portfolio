import React from "react";
import { PortfolioContext } from '../../../Context';
import { Timeline } from '../../Common/Timeline';


export const Studies = () => {
    const { studies, isSpanish } = React.useContext(PortfolioContext);
    const studiesText = isSpanish ? studies.spanish : studies.english;
    return (
        <section className="bg-gradient-to-r from-slate-900 to-slate-800 py-4" id="Studies">
            <div className="w-4/5 mx-auto flex flex-col md:flex-row items-center md:items-end justify-between gap-8 mb-12">
                <div className="flex flex-col gap-2">
                    <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">{ studiesText.title }</h1>
                </div>
            </div>
            <div className="w-4/5 mx-auto">
                <Timeline data={ studiesText.data }/>
            </div>
        </section>
    )
}
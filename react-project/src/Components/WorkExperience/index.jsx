import React from 'react';
import { PortfolioContext } from '../../Context';
import { Timeline } from '../Timeline';

export const WorkExperience = () => {
    const { workExperience, isSpanish } = React.useContext(PortfolioContext);
    const experienceText = isSpanish ? workExperience.spanish : workExperience.english;
    return (
        <section className="bg-gradient-to-r from-slate-900 to-slate-800 py-4" id="Projects">
            <div className="w-4/5 mx-auto flex flex-col md:flex-row items-center md:items-end justify-between gap-8 mb-12">
                <div className="flex flex-col gap-2">
                    <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">{ experienceText.title }</h1>
                </div>
            </div>
            <div className="w-4/5 mx-auto">
                <Timeline data={ experienceText.data }/>
            </div>
        </section>
    )
}
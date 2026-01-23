import React from 'react';
import { TimelineItem } from '../TimelineItem';

export const Timeline = ({ data }) => {
    return (
        <div className='flex'>
            <div className="relative w-full">
                <div className="absolute left-1.5 md:left-2 top-2 bottom-0 w-0.5 bg-slate-200">
                    <div className="absolute inset-0 opacity-50" style={{background: 'linear-gradient(to bottom, #1D7CFF, transparent)'}}></div>
                </div>
                <div className="space-y-16">
                    <TimelineItem data={data} />
                </div>
            </div>
        </div>
    )
}
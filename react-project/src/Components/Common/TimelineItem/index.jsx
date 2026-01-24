import React from 'react';
import { IoArrowForward } from "react-icons/io5";

export const TimelineItem = ({ data }) => {
    return data.map((item, index) => {
        return (
            <div key={index} className="relative pl-12 md:pl-16 group">
                <div className={`absolute left-0 top-1.5 w-4 h-4 md:w-5 md:h-5 rounded-full border-4 border-slate-50 ${index > 0 ? 'bg-blue-300' : 'bg-blue-500'} shadow-[0_0_15px_rgba(96,165,250,0.6)] transition-transform group-hover:scale-125`}></div>
                <div className='w-full flex flex-col gap-2'>
                    <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
                        <h3 className='text-2xl md:text-3xl font-medium text-white mb-3'>{ item.title }</h3>
                        <span className={`border border-1 ${index > 0 ? 'border-slate-500 text-slate-400' : 'border-blue-500/50 text-blue-500'} py-2 px-3 rounded-3xl font-medium max-w-50`}>{ item.date }</span>
                    </div>
                </div>
                
                <div>
                    <h5 className='text-lg md:text-xl font-medium text-slate-400 mb-3'>{ item.subtitle }</h5>
                    {item.description && (
                        <span className='text-gray-400 md:text-md'>{ item.description }</span>
                    )}
                    {item.descriptions && (
                        <ul className='list-none flex flex-col gap-3'>
                            {item.descriptions.map((fn, index) => {
                                return (
                                    <li key={index} className='flex gap-3 items-center'>
                                        <IoArrowForward className={`text-blue-500 text-7xl md:text-sm`} />
                                        <span className='text-gray-400 md:text-md'>{ fn }</span>
                                    </li>
                                )
                            })}
                        </ul>
                    )}
                </div>
            </div>
        )
    })
}
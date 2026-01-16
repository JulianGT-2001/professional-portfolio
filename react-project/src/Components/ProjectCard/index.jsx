import React, { useState } from "react";
import { MdOpenInNew, MdCode } from "react-icons/md";

export const ProjectCard = ({ 
    title, 
    description, 
    tags = [], 
    backgroundImage, 
    colSpan = "", 
    rowSpan = "",
    titleSize = "text-2xl",
    containerMinHeight = "min-h-[300px]",
    liveDemoUrl = "#",
    viewCodeUrl = "#",
    hasLiveDemo = false,
    hasViewCode = true,
}) => {
    const [isActive, setIsActive] = useState(false);

    const handleTouchStart = (e) => {
        e.stopPropagation();
        setIsActive(!isActive);
    };

    return (
        <div 
            className={`group relative ${colSpan} ${rowSpan} rounded-xl md:overflow-hidden bg-slate-700 shadow-lg ${containerMinHeight} ${isActive ? 'active' : ''}`}
            onTouchStart={handleTouchStart}>
            <div 
                className={`absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 overflow-hidden rounded-xl ${isActive ? 'scale-105' : ''}`}
                style={{backgroundImage: `url('${backgroundImage}')`}}>
            </div>
            <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80 ${isActive ? 'opacity-80' : ''}`}>
            </div>
            <div className="relative z-0 md:absolute md:inset-0 flex flex-col justify-end min-h-full md:min-h-0 p-6 md:p-8 opacity-100 transition-all duration-300">
                <div className={`translate-y-4 transform transition-transform duration-300 group-hover:translate-y-0 ${isActive ? 'translate-y-0' : ''}`}>
                    <div className="mb-2 flex flex-wrap gap-2">
                        {tags.map((tag, index) => (
                            <span 
                                key={index}
                                className="inline-flex items-center rounded-md bg-blue-500/20 px-2.5 py-1 text-xs font-medium text-white border border-blue-500/30">
                                {tag.name}
                            </span>
                        ))}
                    </div>
                    <h3 className={`${titleSize} font-bold text-white mb-2`}>{title}</h3>
                    <p className={`text-gray-300 mb-6 max-w-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 ${isActive ? 'opacity-100' : ''}`}>
                        {description}
                    </p>
                    <div className={`flex flex-col sm:flex-row gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 ${isActive ? 'opacity-100' : ''}`}>
                        {hasViewCode && (
                            <a href={viewCodeUrl} className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-blue-700 cursor-pointer">
                                <MdCode className="text-[18px]"/>
                                Ver Codigo
                            </a>
                        )}
                        {hasLiveDemo && (
                            <a href={liveDemoUrl} className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/20 cursor-pointer">
                                <MdOpenInNew className="text-[18px]"/>
                                Demo en Vivo
                            </a>
                        )}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

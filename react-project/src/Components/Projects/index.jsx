import React, { useState } from "react";
import { PortfolioContext } from "../../Context";
import { ButtonTransparentColor } from "../ButtonTransparentColor";
import { ProjectCard } from "../ProjectCard";
import { IoFilter } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

export const Projects = () => {
    const { projects, languageTags } = React.useContext(PortfolioContext);
    const [projectsToShow, setProjectsToShow] = useState(5);
    const [showFilters, setShowFilters] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState(null);

    const handleLoadMore = () => {
        setProjectsToShow(projectsToShow + 4);
    };

    const handleFilterClick = () => {
        setShowFilters(!showFilters);
    };

    const handleFilterTagClick = (tag) => {
        setSelectedFilter(selectedFilter === tag ? null : tag);
    };

    const filteredProjects = selectedFilter
        ? projects.filter(project => 
            project.languages.some(lang => lang.name.includes(selectedFilter))
          )
        : projects;

    return (
        <section className="bg-gradient-to-r from-slate-900 to-slate-800 py-4" id="Projects">
            <div className="w-4/5 mx-auto flex flex-col md:flex-row items-center md:items-end justify-between gap-8 mb-12">
                <div className="flex flex-col gap-2">
                    <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Proyectos</h1>
                    <p className="text-gray-300 text-lg leading-relaxed max-w-5xl">
                        Desarrollo soluciones digitales enfocadas en automatizar procesos, 
                        optimizar tiempos y escalar negocios. Cada proyecto demuestra eficiencia, 
                        impacto y enfoque estratégico. Explora mis proyectos y descubre cómo puedo 
                        transformar tus procesos en resultados medibles.
                    </p>
                </div>
                <div className="flex gap-2">
                    <ButtonTransparentColor classes={"flex items-center"} onClick={handleFilterClick}>
                        <IoFilter className="me-2"/> Filtrar
                    </ButtonTransparentColor>
                </div>
            </div>
            {/* Filter Tags */}
            {showFilters && (
                <div className="w-4/5 mx-auto flex flex-wrap gap-3 mb-8">
                    {languageTags.map((tag, index) => (
                        <button
                            key={index}
                            onClick={() => handleFilterTagClick(tag)}
                            className={`rounded-full border transition-colors cursor-pointer px-6 py-2 text-sm font-medium ${
                                selectedFilter === tag
                                    ? "border-blue-500 bg-blue-500 text-white"
                                    : "border-gray-700 bg-transparent text-slate-300 hover:border-gray-500 hover:text-white hover:bg-gray-800"
                            }`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            )}
            <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">
                {filteredProjects.slice(0, projectsToShow).map((project) => {
                    const isFeatured = project.id == 1 || project.id == 4
                    return (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            tags={project.languages}
                            backgroundImage={project.backgroundImage}
                            colSpan={isFeatured ? "md:col-span-2" : ""}
                            rowSpan={project.id === 1 ? "md:row-span-2" : ""}
                            titleSize={isFeatured ? "text-3xl" : "text-2xl"}
                            viewCodeUrl={project.viewCodeUrl}
                            liveDemoUrl={project.liveDemoUrl}
                            hasLiveDemo={project.hasLiveDemo}
                            hasViewCode={project.hasViewCode}
                        />
                    );
                })}
            </div>
            {/* Load More button - only show if there are more projects */}
            {projectsToShow < filteredProjects.length && (
                <div className="flex justify-center py-8">
                    <button
                        onClick={handleLoadMore}
                        className="flex items-center gap-2 rounded-full border border-gray-700 bg-transparent px-8 py-3 text-sm font-medium text-slate-300 transition-colors hover:border-gray-500 hover:text-white hover:bg-gray-800">
                        Cargar más proyectos
                        <IoIosArrowDown />
                    </button>
                </div>
            )}
        </section>
    )
}
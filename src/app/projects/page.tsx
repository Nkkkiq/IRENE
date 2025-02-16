import Image from "next/image";
import React from "react";

export default function Projects() {
  const projects = [
    {
      name: "Project 1",
      imageSrc: "https://picsum.photos/id/48/1200/800",
    },
    {
      name: "Project 2",
      imageSrc: "https://picsum.photos/id/201/1200/800",
    },
    {
      name: "Project 3",
      imageSrc: "https://picsum.photos/id/180/1200/800",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-items-center gap-y-4">
      <span className="text-4xl tracking-[0.5rem] text-white">Recent Work</span>
      <div className="grid grid-cols-[repeat(3,_minmax(400px,_1fr))] gap-10 px-10">
        {projects.map((project) => {
          return (
            <ProjectThumbnail
              key={project.name}
              name={project.name}
              imageSrc={project.imageSrc}
            />
          );
        })}
      </div>
    </div>
  );
}

interface ProjectThumbnailProps {
  name: string;
  imageSrc: string;
}

const ProjectThumbnail: React.FC<ProjectThumbnailProps> = ({
  name,
  imageSrc,
}) => {
  return (
    <div className="relative h-[500px]">
      <Image
        alt="Mountains"
        src={imageSrc}
        fill
        sizes="(min-width: 808px) 50vw, 100vw"
        className="object-cover"
      />
      <span className="absolute text-white size-fit m-auto inset-0 text-4xl">
        {name}
      </span>
    </div>
  );
};

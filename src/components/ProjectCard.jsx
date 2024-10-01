/**
 * @copyright 2024 kartikp962
 * @license Apache-2.0
 */

import PropTypes from "prop-types";


const ProjectCard = ({imgSrc, title, tags, projectsLink, classes}) => {
  return (
    <div className={'relative p-4 rounded-2xl bg-zinc-800 over:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-insetring-zinc ' + classes}>
        <figure className="">
            <img 
            src={imgSrc}
            alt={title}
            loading="lazy"
            className="img-cover"
             />
        </figure>

        <div className="">
            <div>
                <h3 className="title-1">
                    {title}
                </h3>

                <div className="">
                    {tags.map((label, key) => (
                        <span key={key} className="">
                            {label}
                        </span>
                    ))}
                </div>
            </div>

            <div className="">
                <span className="material-symbols-rounded" aria-hidden="true">
                    arrow_outwared
                </span>
            </div>

            <a 
            href={projectsLink}
            target="_blank"
            className=''
            >

            </a>
        </div>
    </div>
  )
}

ProjectCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    projectsLink: PropTypes.string,
    classes: PropTypes.string,
  };

export default ProjectCard

import SectionWrapper from "./SectionWrapper"
import { experienceContent } from "../data/content"

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="bg-gray-100">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-500">
        {experienceContent.heading}
      </h2>

      <div className="relative mt-10">
        {/* Timeline vertical line */}
        <div
          className="absolute top-0 left-[7px] h-full w-px bg-gray-300 md:left-[7px]"
          aria-hidden="true"
        />

        <ul className="space-y-10">
          {experienceContent.items.map((item, index) => (
            <li key={index} className="relative pl-8">
              {/* Timeline dot */}
              <span
                className="absolute top-1.5 left-0 h-[15px] w-[15px] border-2 border-black bg-white"
                aria-hidden="true"
              />

              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-base font-semibold text-black">{item.role}</h3>
                <time className="text-xs text-gray-500">{item.period}</time>
              </div>

              <p className="mt-1 text-sm font-medium text-gray-500">{item.company}</p>
              <p className="mt-2 text-sm leading-relaxed text-black">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  )
}

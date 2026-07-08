import SectionWrapper from "./SectionWrapper"
import { skillsContent } from "../data/content"

function SkillTag({ label }) {
  return (
    <span className="border border-gray-300 px-3 py-1.5 text-xs font-medium text-black">
      {label}
    </span>
  )
}

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-gray-100">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-500">
        {skillsContent.heading}
      </h2>

      <div className="mt-10 grid gap-12 md:grid-cols-2">
        {skillsContent.groups.map((group) => (
          <div key={group.title}>
            <h3 className="mb-5 text-lg font-semibold text-black">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <SkillTag key={skill} label={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}

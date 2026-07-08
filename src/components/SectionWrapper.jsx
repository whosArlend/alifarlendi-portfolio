import { useScrollFade } from "../hooks/useScrollFade"

/**
 * Wrapper that applies fade-in animation when scrolled into view.
 */
export default function SectionWrapper({ id, children, className = "" }) {
  const ref = useScrollFade()

  return (
    <section
      id={id}
      ref={ref}
      className={`fade-in px-6 py-20 md:px-12 md:py-28 lg:px-24 ${className}`}
    >
      <div className="mx-auto max-w-5xl">{children}</div>
    </section>
  )
}

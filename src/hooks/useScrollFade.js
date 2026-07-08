import { useEffect, useRef } from "react"

/**
 * Adds a "visible" class when the element enters the viewport.
 * Used for subtle fade-in on scroll.
 */
export function useScrollFade(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("visible")
          observer.unobserve(element)
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px", ...options },
    )

    observer.observe(element)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return ref
}

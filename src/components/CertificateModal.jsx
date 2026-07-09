import { useEffect, useState, useRef } from "react"
import { createPortal } from "react-dom"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

export default function CertificateModal({
  isOpen,
  onClose,
  currentIndex,
  onPrev,
  onNext,
  certificates,
}) {
  const [animate, setAnimate] = useState(false)
  const modalRef = useRef(null)
  const closeButtonRef = useRef(null)

  // Handle entering/exiting states and scroll locking
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
      const timer = setTimeout(() => {
        setAnimate(true)
        if (closeButtonRef.current) {
          closeButtonRef.current.focus()
        }
      }, 50)

      return () => {
        clearTimeout(timer)
      }
    } else {
      setAnimate(false)
      document.body.style.overflow = ""
    }
  }, [isOpen])

  // Keyboard navigation & accessibility controls
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose()
      } else if (e.key === "ArrowLeft") {
        onPrev()
      } else if (e.key === "ArrowRight") {
        onNext()
      } else if (e.key === "Tab") {
        // Simple focus trap
        const focusableElements = modalRef.current?.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
        if (!focusableElements || focusableElements.length === 0) return

        const firstElement = focusableElements[0]
        const lastElement = focusableElements[focusableElements.length - 1]

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus()
            e.preventDefault()
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus()
            e.preventDefault()
          }
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, onClose, onPrev, onNext])

  if (!isOpen) return null

  const currentCert = certificates[currentIndex]

  return createPortal(
    <div
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 transition-opacity duration-300 ease-out ${
        animate ? "opacity-100" : "opacity-0"
      }`}
      onClick={onClose}
    >
      {/* Close button */}
      <button
        ref={closeButtonRef}
        onClick={(e) => {
          e.stopPropagation()
          onClose()
        }}
        className="absolute top-4 right-4 md:top-6 md:right-6 z-[110] p-2 text-white/70 hover:text-white bg-black/40 hover:bg-black/60 rounded-full border border-white/20 transition-all focus-visible:outline-2 focus-visible:outline-white cursor-pointer"
        aria-label="Close modal"
      >
        <X size={20} className="md:w-6 md:h-6" />
      </button>

      {/* Navigation: Prev */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          onPrev()
        }}
        className="absolute left-2 md:left-8 z-[110] p-2 md:p-3 text-white/70 hover:text-white bg-black/40 hover:bg-black/60 rounded-full border border-white/20 transition-all hover:scale-105 focus-visible:outline-2 focus-visible:outline-white cursor-pointer"
        aria-label="Previous certificate"
      >
        <ChevronLeft size={20} className="md:w-6 md:h-6" />
      </button>

      {/* Navigation: Next */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          onNext()
        }}
        className="absolute right-2 md:right-8 z-[110] p-2 md:p-3 text-white/70 hover:text-white bg-black/40 hover:bg-black/60 rounded-full border border-white/20 transition-all hover:scale-105 focus-visible:outline-2 focus-visible:outline-white cursor-pointer"
        aria-label="Next certificate"
      >
        <ChevronRight size={20} className="md:w-6 md:h-6" />
      </button>

      {/* Main content container */}
      <div
        className={`flex flex-col items-center max-w-5xl w-full transition-all duration-300 ease-out ${
          animate ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentCert.image}
          alt={`Certificate document for ${currentCert.title} by ${currentCert.issuer}`}
          className="max-w-full max-h-[75vh] w-auto h-auto object-contain rounded-sm shadow-2xl select-none"
        />

        {/* Certificate text information */}
        <div className="w-full text-center mt-6 text-white px-4">
          <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
            {currentCert.issuer}
          </span>
          <h2 id="modal-title" className="text-lg sm:text-2xl font-bold mt-1 leading-snug">
            {currentCert.title}
          </h2>
          <span className="inline-block mt-2 px-3 py-1 bg-white/10 text-xs rounded-full">
            Year: {currentCert.year}
          </span>
        </div>
      </div>
    </div>,
    document.body
  )
}

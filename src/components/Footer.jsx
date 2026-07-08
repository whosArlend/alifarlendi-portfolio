import { siteConfig } from "../data/content"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-300 px-6 py-8 md:px-12 lg:px-24">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-xs text-gray-500">
          &copy; {year} {siteConfig.name}. All rights reserved.
        </p>
        <p className="text-xs text-gray-500">
          Built with React + Vite + Tailwind CSS
        </p>
      </div>
    </footer>
  )
}

import Link from "next/link"
import { Mail } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold">Stef.</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Building software with purpose.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="https://github.com"
            target="_blank"
            className="rounded-md p-2 text-muted-foreground transition hover:bg-secondary hover:text-foreground"
          >
            <FaGithub className="size-5" />
          </Link>

          <Link
            href="https://linkedin.com"
            target="_blank"
            className="rounded-md p-2 text-muted-foreground transition hover:bg-secondary hover:text-foreground"
          >
            <FaLinkedin className="size-5" />
          </Link>

          <Link
            href="/contact"
            className="rounded-md p-2 text-muted-foreground transition hover:bg-secondary hover:text-foreground"
          >
            <Mail className="size-5" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer

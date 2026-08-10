import Link from "next/link"
import { Mail } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const ContactPage = () => {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-32 pb-24">
      <div className="max-w-3xl">
        <Badge variant="secondary">Contact</Badge>

        <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
          Let&apos;s build something
          <br />
          <span className="text-muted-foreground">together.</span>
        </h1>

        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Have a project, idea or opportunity? Send me a message and I&apos;ll
          get back to you.
        </p>
      </div>

      <div className="mt-16 grid gap-12 md:grid-cols-[1fr_1.5fr]">
        <div className="space-y-8">
          <div>
            <Mail className="mb-4 size-6" />

            <h2 className="font-semibold">Email</h2>

            <Link
              href="mailto:hello@example.com"
              className="mt-2 block text-muted-foreground hover:text-foreground"
            >
              hello@example.com
            </Link>
          </div>

          <div>
            <FaGithub className="mb-4 size-6" />

            <h2 className="font-semibold">GitHub</h2>

            <Link
              href="https://github.com"
              target="_blank"
              className="mt-2 block text-muted-foreground hover:text-foreground"
            >
              github.com
            </Link>
          </div>

          <div>
            <FaLinkedin className="mb-4 size-6" />

            <h2 className="font-semibold">LinkedIn</h2>

            <Link
              href="https://linkedin.com"
              target="_blank"
              className="mt-2 block text-muted-foreground hover:text-foreground"
            >
              linkedin.com
            </Link>
          </div>
        </div>

        <Card>
          <CardContent className="p-6 md:p-8">
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>

                <Input id="name" placeholder="Your name" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>

                <Input id="email" type="email" placeholder="you@example.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>

                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  className="min-h-40"
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                Send message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default ContactPage

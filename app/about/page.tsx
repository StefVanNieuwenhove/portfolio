import { Briefcase, GraduationCap, MapPin, Code2 } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { techLogos } from "@/lib/techLogo"
import LogoLoop from "@/components/ui/LogoLoop"

const AboutPage = () => {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-32 pb-24">
      <div className="max-w-3xl">
        <Badge variant="secondary">About me</Badge>

        <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
          Developer, builder
          <br />
          <span className="text-muted-foreground">and problem solver.</span>
        </h1>

        <p className="mt-8 text-lg leading-8 text-muted-foreground">
          I&apos;m Stef, a software developer who enjoys turning ideas into
          working software. I like understanding how systems work from the
          frontend all the way down to the infrastructure.
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        <Card>
          <CardContent className="p-6">
            <MapPin className="mb-5 size-7" />

            <h2 className="font-semibold">Based in Belgium</h2>

            <p className="mt-2 text-sm text-muted-foreground">
              Working on software projects, infrastructure and web applications.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <Code2 className="mb-5 size-7" />

            <h2 className="font-semibold">Full-stack development</h2>

            <p className="mt-2 text-sm text-muted-foreground">
              Comfortable working with both frontend and backend technologies.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <GraduationCap className="mb-5 size-7" />

            <h2 className="font-semibold">Always learning</h2>

            <p className="mt-2 text-sm text-muted-foreground">
              I enjoy exploring new technologies and understanding how they can
              improve a project.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <Briefcase className="mb-5 size-7" />

            <h2 className="font-semibold">Building real projects</h2>

            <p className="mt-2 text-sm text-muted-foreground">
              My portfolio focuses on practical projects rather than simple
              tutorials.
            </p>
          </CardContent>
        </Card>
      </div>
      <section className="mt-24">
        <h2 className="text-2xl font-bold">My tech stack</h2>
        <div
          style={{ height: "200px", position: "relative", overflow: "hidden" }}
        >
          {/* Basic horizontal loop */}
          <LogoLoop
            logos={techLogos}
            speed={100}
            direction="left"
            logoHeight={60}
            gap={60}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="#ffffff"
            ariaLabel="Technology stacks I use"
          />
        </div>
      </section>

      <section className="mt-24">
        <h2 className="text-2xl font-bold">My approach</h2>

        <div className="mt-6 max-w-3xl space-y-5 leading-7 text-muted-foreground">
          <p>
            I believe good software starts with understanding the problem before
            writing the code.
          </p>

          <p>
            I prefer simple architectures that can grow over time, strong
            separation of responsibilities and interfaces that are easy to
            understand.
          </p>

          <p>
            Outside of writing code, I enjoy working with servers, Docker,
            networking and self-hosted infrastructure.
          </p>
        </div>
      </section>
    </div>
  )
}

export default AboutPage

import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, Network } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

const PLACEHOLDER_IMAGE = "/assets/projects-screenshots/logo-dark.webp";
const SCORE_LOGIN_IMAGE = "/assets/projects-screenshots/score/login-page.png";
const SCORE_HOME_IMAGE = "/assets/projects-screenshots/score/home-page.png";
const SCORE_TOOL_4_IMAGE =
  "/assets/projects-screenshots/score/tool4-home-page.png";
const SCORE_TOOL_5_IMAGE =
  "/assets/projects-screenshots/score/tool5-home-page.png";
const FLEXYBOX_HOME_IMAGE =
  "/assets/projects-screenshots/flexybox/home-page.png";
const FLEXYBOX_PRODUCTS_IMAGE =
  "/assets/projects-screenshots/flexybox/products-page.png";
const FLEXYBOX_RENT_IMAGE =
  "/assets/projects-screenshots/flexybox/rent-page.png";
const FLEXYBOX_CONFIRM_RENT_IMAGE =
  "/assets/projects-screenshots/flexybox/confirm-rent-page.png";
const FLEXYBOX_ADMIN_IMAGE =
  "/assets/projects-screenshots/flexybox/admin-page.png";
const TONGUE_AI_HOME_IMAGE =
  "/assets/projects-screenshots/tongue-ai/home-page.png";
const TONGUE_AI_DIAGNOSIS_IMAGE =
  "/assets/projects-screenshots/tongue-ai/dianosis-page.png";
const TONGUE_AI_ACCOUNT_IMAGE =
  "/assets/projects-screenshots/tongue-ai/account-page.png";
const TONGUE_AI_POINTS_IMAGE =
  "/assets/projects-screenshots/tongue-ai/points-page.png";
const TONGUE_AI_ADMIN_IMAGE =
  "/assets/projects-screenshots/tongue-ai/admin-page.png";
const EDUVA_LANDING_IMAGE =
  "/assets/projects-screenshots/eduva/landing-page.png";
const EDUVA_LESSON_GENERATOR_IMAGE =
  "/assets/projects-screenshots/eduva/lesson-generator.png";
const EDUVA_MOBILE_APP_IMAGE =
  "/assets/projects-screenshots/eduva/mobile-app.jpg";
const EDUVA_STUDENT_IMAGE =
  "/assets/projects-screenshots/eduva/student-page.png";
const EDUVA_TEACHER_IMAGE =
  "/assets/projects-screenshots/eduva/teacher-page.png";
const screenshot = (src: string, width: number, height: number) => ({
  src,
  width,
  height,
});
const SCORE_SCREENSHOTS = [
  screenshot(SCORE_LOGIN_IMAGE, 1918, 957),
  screenshot(SCORE_HOME_IMAGE, 1917, 956),
  screenshot(
    "/assets/projects-screenshots/score/tool3-home-page.png",
    1918,
    956
  ),
  screenshot(SCORE_TOOL_4_IMAGE, 1918, 959),
  screenshot(SCORE_TOOL_5_IMAGE, 1919, 957),
];
const FLEXYBOX_SCREENSHOTS = [
  screenshot(FLEXYBOX_HOME_IMAGE, 501, 864),
  screenshot(FLEXYBOX_PRODUCTS_IMAGE, 502, 869),
  screenshot(FLEXYBOX_RENT_IMAGE, 505, 867),
  screenshot(FLEXYBOX_CONFIRM_RENT_IMAGE, 501, 868),
  screenshot(FLEXYBOX_ADMIN_IMAGE, 1917, 955),
];
const TONGUE_AI_SCREENSHOTS = [
  screenshot(TONGUE_AI_HOME_IMAGE, 441, 956),
  screenshot(TONGUE_AI_DIAGNOSIS_IMAGE, 478, 957),
  screenshot(TONGUE_AI_ACCOUNT_IMAGE, 455, 958),
  screenshot(TONGUE_AI_POINTS_IMAGE, 468, 958),
  screenshot(TONGUE_AI_ADMIN_IMAGE, 1919, 955),
];
const EDUVA_SCREENSHOTS = [
  screenshot(EDUVA_LANDING_IMAGE, 1910, 955),
  screenshot(EDUVA_LESSON_GENERATOR_IMAGE, 1918, 928),
  screenshot(EDUVA_MOBILE_APP_IMAGE, 750, 1258),
  screenshot(EDUVA_STUDENT_IMAGE, 1917, 955),
  screenshot(EDUVA_TEACHER_IMAGE, 1918, 930),
];

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && live !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && repo !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const textSkill = (title: string, label = title): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <span className="text-[10px] font-bold leading-none">{label}</span>,
});

const MaskIcon = ({ src, title }: { src: string; title?: string }) => (
  <span
    aria-label={title}
    className="block bg-current"
    style={{
      width: "1em",
      height: "1em",
      WebkitMaskImage: `url(${src})`,
      maskImage: `url(${src})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
    }}
  />
);

const brand = (title: string, file: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <MaskIcon src={`/assets/logos/${file}`} title={title} />,
});

const imageBrand = (title: string, file: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: (
    <Image
      src={`/assets/logos/${file}`}
      alt={title}
      width={24}
      height={24}
      className="h-full w-full object-contain grayscale"
    />
  ),
});

const ProjectFeatureImage = ({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) => (
  <div className="overflow-hidden rounded-lg border border-border bg-muted">
    <Image
      src={src}
      alt={alt}
      width={1600}
      height={1000}
      sizes="(max-width: 768px) 100vw, 720px"
      className="h-auto w-full"
    />
  </div>
);

const PROJECT_SKILLS = {
  angular: brand("Angular", "angular-mono.svg"),
  aws: brand("AWS", "aws-mono.svg"),
  docker: brand("Docker", "docker-mono.svg"),
  javascript: brand("JavaScript", "javascript-mono.svg"),
  java: brand("Java", "java-mono.svg"),
  springBoot: brand("Spring Boot", "spring-boot-mono.svg"),
  lambda: brand("AWS Lambda", "aws-lambda-mono.svg"),
  microservices: {
    title: "Microservices",
    bg: "black",
    fg: "white",
    icon: <Network className="h-full w-full" strokeWidth={2.4} />,
  },
  mysql: brand("MySQL", "mysql-mono.svg"),
  nest: brand("NestJS", "nestdotjs-mono.svg"),
  next: brand("Next.js", "nextdotjs-mono.svg"),
  nginx: {
    title: "Nginx",
    bg: "black",
    fg: "white",
    icon: (
      <Image
        src="/assets/logos/nginx-mono.svg"
        alt="Nginx"
        width={24}
        height={24}
        className="h-full w-full object-contain grayscale"
      />
    ),
  },
  node: brand("Node.js", "nodedotjs-mono.svg"),
  postgres: brand("PostgreSQL", "postgresql-mono.svg"),
  prisma: brand("Prisma", "prisma-mono.svg"),
  python: brand("Python", "python-mono.svg"),
  rabbitmq: brand("RabbitMQ", "rabbitmq-mono.svg"),
  react: brand("React", "react-mono.svg"),
  reactNative: brand("React Native", "react-mono.svg"),
  redis: brand("Redis", "redis-mono.svg"),
  tailwind: brand("Tailwind", "tailwind-css-mono.svg"),
  trpc: brand("tRPC", "trpc-mono.svg"),
  ts: brand("TypeScript", "typescript-mono.svg"),
  activeMQ: brand("ActiveMQ", "activemq-mono.svg"),
  ai: brand("AI Integration", "mistral-ai-mono.svg"),
  css: imageBrand("CSS", "css-mono.svg"),
  dotnet: brand(".NET", "net-mono.svg"),
  dynamodb: {
    title: "DynamoDB",
    bg: "black",
    fg: "white",
    icon: (
      <Image
        src="/assets/logos/dynamodb-mono.svg"
        alt="DynamoDB"
        width={24}
        height={24}
        className="h-full w-full object-contain grayscale"
      />
    ),
  },
  oracle: brand("OracleDB", "oracle-mono.svg"),
  html: imageBrand("HTML", "html-mono.svg"),
  sass: brand("Sass", "sass-mono.svg"),
  sqlServer: brand("SQL Server", "sql-server-mono.svg"),
  sqlite: brand("SQLite", "sqlite-mono.svg"),
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: { src: string; width: number; height: number }[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode;
  github?: string;
  live: string;
};

const ProjectSummary = ({
  children,
  live,
  repo,
}: {
  children: ReactNode;
  live?: string;
  repo?: string;
}) => (
  <div>
    <TypographyP className="font-mono text-2xl text-center">
      {children}
    </TypographyP>
    <ProjectsLinks live={live} repo={repo} />
    <TypographyH3 className="my-4 mt-8">Status</TypographyH3>
    <p className="font-mono mb-2">
      Project details, links, and screenshots are intentionally limited to
      confirmed public information.
    </p>
  </div>
);

const projects: Project[] = [
  {
    id: "score",
    category: "Enterprise management",
    title: "Score",
    src: SCORE_LOGIN_IMAGE,
    screenshots: SCORE_SCREENSHOTS,
    skills: {
      frontend: [PROJECT_SKILLS.ts, PROJECT_SKILLS.react],
      backend: [
        PROJECT_SKILLS.nest,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.redis,
        PROJECT_SKILLS.docker,
        PROJECT_SKILLS.nginx,
        PROJECT_SKILLS.rabbitmq,
        PROJECT_SKILLS.microservices,
      ],
    },
    live: "#",
    get content() {
      return (
        <div className="space-y-8">
          <div>
            <TypographyH3 className="my-4 text-center">
              Enterprise management platform for SVTech
            </TypographyH3>
            <TypographyP className="font-mono text-base md:text-lg text-left">
              Score connects sales, pre-sales, post-sales, accounting,
              warehouse, purchasing, service, and engineering workflows in one
              modular internal system.
            </TypographyP>
            <ProjectsLinks live={this.live} repo={this.github} />
          </div>

          <div>
            <TypographyH3 className="my-4">Product Scope</TypographyH3>
            <p className="font-mono mb-3">
              The platform covers HR and timesheet logging, warehouse
              import/export operations, service and warranty contracts,
              purchase and sales contracts, mini CRM pipelines, dynamic notes,
              notifications, navigation, master data, system status, logs, user
              levels, and role management.
            </p>
            <p className="font-mono">
              Each tool is built as an independent microservice with its own
              source code and database, allowing business domains to evolve
              separately while still supporting the full opportunity-to-contract
              and contract-to-project flow.
            </p>
          </div>

          <div>
            <TypographyH3 className="my-4">My Role</TypographyH3>
            <p className="font-mono mb-3">
              I worked as a full-stack developer, mainly owning two large
              modules: Tool 4 Warehouse Management and Tool 5 Service Contract
              Management. I also contributed Tool 9 Dynamic Note as a smaller
              collaboration and reminder feature.
            </p>
          </div>

          <div>
            <TypographyH3 className="my-4">
              Tool 4 - Warehouse Management
            </TypographyH3>
            <ProjectFeatureImage
              src={SCORE_TOOL_4_IMAGE}
              alt="Score Tool 4 warehouse management screenshot"
            />
            <p className="font-mono mt-3">
              I implemented purchasing and warehouse flows from purchase
              requests to purchase orders, approval, import/export requests,
              warehouse vouchers, and final inventory updates after approved
              warehouse transactions. The module also includes product catalog
              management and operational data used by related business flows.
            </p>
          </div>

          <div>
            <TypographyH3 className="my-4">
              Tool 5 - Service Contract Management
            </TypographyH3>
            <ProjectFeatureImage
              src={SCORE_TOOL_5_IMAGE}
              alt="Score Tool 5 service contract management screenshot"
            />
            <p className="font-mono mt-3">
              I developed service and warranty contract management for products
              sold by SVTech, as well as products covered under third-party
              warranty responsibility. The module supports creating, tracking,
              and managing service contract records across the post-sales
              lifecycle.
            </p>
          </div>

          <div>
            <TypographyH3 className="my-4">Tool 9 - Dynamic Note</TypographyH3>
            <p className="font-mono">
              Dynamic Note lets users create personal or shared notes, assign
              related people, control visibility, and schedule reminders for
              work or personal follow-ups.
            </p>
          </div>
        </div>
      );
    },
  },
  {
    id: "flexybox",
    category: "Commerce system",
    title: "FlexyBox",
    src: FLEXYBOX_HOME_IMAGE,
    screenshots: FLEXYBOX_SCREENSHOTS,
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.javascript,
        PROJECT_SKILLS.aws,
        PROJECT_SKILLS.lambda,
        PROJECT_SKILLS.dynamodb,
      ],
    },
    live: "#",
    get content() {
      return (
        <div className="space-y-8">
          <div>
            <TypographyH3 className="my-4 text-center">
              Smart locker commerce platform for camera rental and sales
            </TypographyH3>
            <TypographyP className="font-mono text-base md:text-lg text-left">
              FlexyBox is a commercial product in Japan that connects online
              rental and purchase flows with real-world smart lockers, allowing
              local and international customers to rent or buy camera equipment
              directly from a physical cabinet.
            </TypographyP>
            <ProjectsLinks live={this.live} repo={this.github} />
          </div>

          <div>
            <TypographyH3 className="my-4">Product Scope</TypographyH3>
            <p className="font-mono mb-3">
              The system serves both locker owners and customers. Owners can
              upload product information, configure rental and sale prices,
              promotion settings, and assign products to available locker
              slots before placing the real items into the cabinet.
            </p>
            <p className="font-mono">
              Customers scan a QR code at the physical locker, sign in to the
              correct cabinet, choose a product, complete payment, and open the
              locker from the web UI. For rentals, the system tracks checkout
              and return events, calculates the final rental fee from the
              configured pricing rules, and supports follow-up handling for
              overdue returns.
            </p>
          </div>

          <div>
            <TypographyH3 className="my-4">My Role</TypographyH3>
            <p className="font-mono mb-3">
              I worked as a full-stack developer across the customer and admin
              experiences, building screens for login, product lists, locker
              opening, user guidelines, payment, and admin rental or purchase
              history.
            </p>
            <p className="font-mono">
              On the backend, I worked with JavaScript-based serverless
              functions for authentication, authorization, product listing,
              payment handling, IoT locker commands, and operational logging.
            </p>
          </div>

          <div>
            <TypographyH3 className="my-4">
              Rental, Payment, and Locker Flow
            </TypographyH3>
            <ProjectFeatureImage
              src={FLEXYBOX_RENT_IMAGE}
              alt="FlexyBox rental flow screenshot"
            />
            <p className="font-mono mt-3">
              I contributed to the core rental and purchase flow, including
              payment processing with credit card and PayPay options, callback
              and webhook handling, payment result recording, and the UI/API
              path that validates access before sending an open command to the
              smart locker.
            </p>
          </div>

          <div>
            <TypographyH3 className="my-4">
              Security, Performance, and Risk Reduction
            </TypographyH3>
            <ProjectFeatureImage
              src={FLEXYBOX_CONFIRM_RENT_IMAGE}
              alt="FlexyBox rental confirmation screenshot"
            />
            <p className="font-mono mt-3 mb-3">
              A major part of my role was reviewing and refactoring sensitive
              flows around payment, order confirmation, and locker opening. I
              worked on authorization checks, double-payment prevention,
              transactional handling for payment-related state changes, rate
              limiting, and race-condition fixes for locker and order updates.
            </p>
            <p className="font-mono">
              I also optimized DynamoDB queries and improved logging and audit
              trails so operational events such as payment attempts, order
              updates, and locker open commands could be tracked more reliably.
            </p>
          </div>

          <div>
            <TypographyH3 className="my-4">Additional Features</TypographyH3>
            <p className="font-mono">
              FlexyBox also includes a gacha-style promotion feature where
              eligible users can receive randomized rewards such as rental
              vouchers, adding a playful retention layer to the rental
              experience.
            </p>
          </div>
        </div>
      );
    },
  },
  {
    id: "tongue-ai",
    category: "AI healthcare",
    title: "Tongue AI",
    src: TONGUE_AI_HOME_IMAGE,
    screenshots: TONGUE_AI_SCREENSHOTS,
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.trpc,
        PROJECT_SKILLS.prisma,
        PROJECT_SKILLS.mysql,
        PROJECT_SKILLS.aws,
        PROJECT_SKILLS.lambda,
        PROJECT_SKILLS.ai,
      ],
    },
    live: "#",
    get content() {
      return (
        <div className="space-y-8">
          <div>
            <TypographyH3 className="my-4 text-center">
              AI tongue diagnosis platform for clinics
            </TypographyH3>
            <TypographyP className="font-mono text-base md:text-lg text-left">
              Tongue AI lets clinics run their own subdomain-based diagnosis
              experience, where patients upload tongue images and receive
              AI-assisted health screening results through the clinic portal.
            </TypographyP>
            <ProjectsLinks live={this.live} repo={this.github} />
          </div>

          <div>
            <TypographyH3 className="my-4">Product Scope</TypographyH3>
            <p className="font-mono mb-3">
              Each clinic can be managed by the system and exposed through its
              own subdomain. Patients access the clinic portal, upload a tongue
              image, and trigger a diagnosis flow handled by the Next.js server
              and a Lambda-based AI integration layer.
            </p>
            <p className="font-mono">
              The diagnosis pipeline calls an AI model and returns structured
              results such as tongue condition, tongue color score, tongue
              thickness score, and body health indications like fever-related
              symptoms.
            </p>
          </div>

          <div>
            <TypographyH3 className="my-4">My Role</TypographyH3>
            <p className="font-mono mb-3">
              I worked as a full-stack developer, mainly owning the login UI,
              clinic member access flow, point management UI, and the
              point-based diagnosis flow for clinics that enable point
              management.
            </p>
            <p className="font-mono mb-3">
              The authentication model is clinic-scoped: a phone number, email,
              or LINE user ID is unique within one clinic, while the same person
              can still belong to multiple clinics through separate member
              records and member identity mappings.
            </p>
            <p className="font-mono">
              I integrated third-party APIs to check clinic point balance,
              required points per diagnosis, and whether the clinic has enough
              points before allowing a diagnosis request to continue.
            </p>
          </div>

          <div>
            <TypographyH3 className="my-4">Admin Management</TypographyH3>
            <p className="font-mono">
              The system admin area supports clinic lists, diagnosis type
              lists, industry categories, industry-specific response templates,
              diagnosis keywords, healing food suggestions, and aroma therapy
              suggestions.
            </p>
          </div>
        </div>
      );
    },
  },
  {
    id: "fpt-software-as",
    category: "Internal accounting",
    title: "FAS",
    src: PLACEHOLDER_IMAGE,
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.ts, PROJECT_SKILLS.angular],
      backend: [
        PROJECT_SKILLS.java,
        PROJECT_SKILLS.springBoot,
        PROJECT_SKILLS.oracle,
        PROJECT_SKILLS.redis,
        PROJECT_SKILLS.activeMQ,
        PROJECT_SKILLS.microservices,
      ],
    },
    live: "#",
    get content() {
      return (
        <div className="space-y-8">
          <div>
            <TypographyH3 className="my-4 text-center">
              Internal accounting system for FPT Software
            </TypographyH3>
            <TypographyP className="font-mono text-base md:text-lg text-left">
              FAS helps the accounting department manage contracts, invoices,
              transactions, accounting documents, reporting, audit trails, and
              financial control workflows across internal offices.
            </TypographyP>
            <ProjectsLinks live={this.live} repo={this.github} />
          </div>

          <div>
            <TypographyH3 className="my-4">Product Scope</TypographyH3>
            <p className="font-mono mb-3">
              The system is built with Angular, TypeScript, Java Spring Boot
              microservices, OracleDB, Redis, ActiveMQ, JWT, and SSO. Core
              services include contract, invoice, user/permission, file,
              reporting, and notification services.
            </p>
            <p className="font-mono">
              The contract flow moves from draft to review, approval,
              execution, completion, rejection, cancellation, or done states,
              with permissions based on role, office, ownership, and current
              workflow status.
            </p>
          </div>

          <div>
            <TypographyH3 className="my-4">My Role</TypographyH3>
            <p className="font-mono mb-3">
              I worked as a full-stack developer in a 10-member team, focusing
              on the Contract Lifecycle Management module across both frontend
              and backend.
            </p>
            <p className="font-mono">
              I built two main Angular screens with multiple tabs and dialogs
              using Reactive Forms, Guards, Interceptors, RxJS, standalone
              components, and dependency injection.
            </p>
          </div>

          <div>
            <TypographyH3 className="my-4">
              Contract Lifecycle Management
            </TypographyH3>
            <p className="font-mono mb-3">
              The module covers contract CRUD, search, import/export, file
              upload, audit logging, and a workflow stepper for contract
              status tracking.
            </p>
            <p className="font-mono">
              I implemented business rules that decide who can view or edit a
              contract at each state. Once invoices or transactions are
              generated, contracts become immutable to protect accounting data
              consistency.
            </p>
          </div>

          <div>
            <TypographyH3 className="my-4">
              Validation and Financial Calculations
            </TypographyH3>
            <p className="font-mono mb-3">
              I implemented validation for contract state, user permissions,
              effective dates, amounts, duplicate contract codes, office,
              currency, tax, and invoice dependencies.
            </p>
            <p className="font-mono">
              I also built financial calculation logic for revenue, cost,
              profit/loss, tax, allocation, and currency exchange, integrating
              with invoice, transaction, permission, master data, and audit
              services.
            </p>
          </div>

          <div>
            <TypographyH3 className="my-4">
              Excel Import and Performance
            </TypographyH3>
            <p className="font-mono mb-3">
              I developed Excel import/export with Apache POI, row-level
              validation, and cell-level error annotation. Invalid files are
              returned as marked Excel files so users can fix data and import
              again.
            </p>
            <p className="font-mono">
              To support around 200 concurrent users and peak usage up to 500,
              I optimized search and import flows with OracleDB indexing,
              pagination, asynchronous jobs, Redis distributed locks, ActiveMQ
              background processing, notifications, and stored procedures for
              large queries.
            </p>
          </div>
        </div>
      );
    },
  },
  {
    id: "eduva",
    category: "Education platform",
    title: "Eduva",
    src: EDUVA_LANDING_IMAGE,
    screenshots: EDUVA_SCREENSHOTS,
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.angular,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.reactNative,
      ],
      backend: [
        PROJECT_SKILLS.dotnet,
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.redis,
        PROJECT_SKILLS.rabbitmq,
        PROJECT_SKILLS.ai,
      ],
    },
    github: "https://github.com/qcode95/eduva-landing",
    live: "https://landing.eduva.tech/",
    get content() {
      return (
        <div className="space-y-8">
          <div>
            <TypographyH3 className="my-4 text-center">
              AI-powered graduation thesis for digital lesson generation
            </TypographyH3>
            <TypographyP className="font-mono text-base md:text-lg text-left">
              Eduva is a multi-tenant education platform for teachers,
              students, schools, and system admins. I built it as my graduation
              thesis with a team of five, leading the system architecture and
              full-stack implementation from the first design to the final demo.
            </TypographyP>
            <ProjectsLinks live={this.live} repo={this.github} />
          </div>

          <div>
            <TypographyH3 className="my-4">Product Scope</TypographyH3>
            <p className="font-mono mb-3">
              The platform helps teachers turn PDF and Word teaching materials
              into AI-generated digital lessons, then manage, approve, share,
              and distribute those lessons to students through class-based
              learning workflows.
            </p>
            <p className="font-mono">
              Eduva includes separate experiences for school admins, teachers,
              students, and system admins across landing, school, student, and
              admin portals. Teachers can create classes, upload documents,
              generate lessons with AI, share materials with other teachers,
              assign lessons to classes, add students, and track teaching
              statistics.
            </p>
          </div>

          <div>
            <TypographyH3 className="my-4">
              AI Lesson Generation Pipeline
            </TypographyH3>
            <ProjectFeatureImage
              src={EDUVA_LESSON_GENERATOR_IMAGE}
              alt="Eduva AI lesson generator screenshot"
            />
            <p className="font-mono mt-3 mb-3">
              I owned the lesson generator end to end. Teachers upload a source
              document, the Python AI service parses and summarizes it with
              OpenAI, then uses Gemini to generate visual and audio assets
              before assembling the final audio or video lesson.
            </p>
            <p className="font-mono">
              Generation runs asynchronously through RabbitMQ background jobs
              and sends realtime WebSocket responses back to the Angular UI, so
              teachers can see summaries, generation progress, and completed
              lessons without the app freezing. Typical generation time was
              around 3-5 minutes for a 9-10 minute lesson and 5-6 minutes for a
              15-20 minute lesson.
            </p>
          </div>

          <div>
            <TypographyH3 className="my-4">
              Document, Learning, and Approval Workflows
            </TypographyH3>
            <ProjectFeatureImage
              src={EDUVA_TEACHER_IMAGE}
              alt="Eduva teacher workspace screenshot"
            />
            <p className="font-mono mt-3 mb-3">
              I built the document management flow for uploaded and AI-generated
              materials, including class-based organization, teacher-to-teacher
              sharing inside the same school, Azure Storage S3 uploads for
              learning files, and Supabase storage for images such as avatars.
            </p>
            <p className="font-mono">
              School admins can assign approval roles such as department head,
              and lessons must be approved before they can be shared or
              distributed to students. Students can read document lessons, watch
              video lessons, track progress, and discuss lessons through
              comments and replies.
            </p>
          </div>

          <div>
            <TypographyH3 className="my-4">
              Architecture and Platform Work
            </TypographyH3>
            <p className="font-mono mb-3">
              I designed Eduva as an extensible multi-tenant system using
              Angular and TypeScript on the frontend, C#/.NET services,
              PostgreSQL, Redis, RabbitMQ, and a Python AI service. RabbitMQ
              handles both service-to-service messaging and background jobs,
              while Redis supports caching, rate limiting, and token blacklist
              checks.
            </p>
            <p className="font-mono mb-3">
              I also built realtime notifications for new lessons, comments,
              replies, class invitations, and lesson approvals, plus PayOS
              payment flows for school storage credits and teacher AI credits.
            </p>
            <p className="font-mono">
              The system handled large PDF/Word processing, document conversion,
              S3 uploads, AI timeout risks, realtime UI freezes, and data
              consistency issues while staying responsive during generation.
            </p>
          </div>
        </div>
      );
    },
  },
  {
    id: "gdupa",
    category: "Warehouse system",
    title: "Gdupa",
    src: PLACEHOLDER_IMAGE,
    screenshots: [],
    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.javascript,
      ],
      backend: [
        PROJECT_SKILLS.dotnet,
        PROJECT_SKILLS.sqlServer,
        PROJECT_SKILLS.sqlite,
        PROJECT_SKILLS.redis,
      ],
    },
    live: "#",
    get content() {
      return (
        <div className="space-y-8">
          <div>
            <TypographyH3 className="my-4 text-center">
              Warehouse import and export management system
            </TypographyH3>
            <TypographyP className="font-mono text-base md:text-lg text-left">
              Gdupa is a warehouse management module for businesses that need
              to move import/export requests, warehouse vouchers, approvals,
              inventory updates, and related documents out of Excel and Drive
              into one controlled workflow.
            </TypographyP>
            <ProjectsLinks live={this.live} repo={this.github} />
          </div>

          <div>
            <TypographyH3 className="my-4">Product Scope</TypographyH3>
            <p className="font-mono mb-3">
              The system supports warehouse import requests, review and
              approval steps, import vouchers, final stock-in operations,
              warehouse export requests, export vouchers, stock-out operations,
              document uploads, user management, and audit logging.
            </p>
            <p className="font-mono">
              Gdupa was built as a standalone monolith with .NET MVC/API, while
              also being designed as a warehouse service that can fit into a
              larger microservices-based warehouse management platform.
            </p>
          </div>

          <div>
            <TypographyH3 className="my-4">My Role</TypographyH3>
            <p className="font-mono mb-3">
              I worked as a full-stack developer in a four-member team over
              three months, owning system design, database design,
              authentication, authorization, import/export workflows, approval
              logic, inventory calculation, and file upload integration.
            </p>
          </div>

          <div>
            <TypographyH3 className="my-4">
              Import, Export, and Inventory Flow
            </TypographyH3>
            <p className="font-mono mb-3">
              I implemented the core warehouse flow where users create import
              or export requests, reviewers validate them, approvers confirm
              them, and warehouse staff complete the final stock movement
              through import/export vouchers.
            </p>
            <p className="font-mono">
              Inventory updates validate quantities, prevent negative stock,
              and use Redis locks to avoid incorrect inventory counts when
              multiple users process stock movements for the same item at the
              same time.
            </p>
          </div>

          <div>
            <TypographyH3 className="my-4">
              Access Control and Document Management
            </TypographyH3>
            <p className="font-mono mb-3">
              Authentication uses JWT with ASP.NET Identity, combined with
              role-based and permission-based authorization for admins,
              warehouse employees, and warehouse managers.
            </p>
            <p className="font-mono">
              Related documents such as invoices, product images, and
              attachments are uploaded with the warehouse records, with audit
              logs tracking important actions across request creation, review,
              approval, and warehouse completion.
            </p>
          </div>
        </div>
      );
    },
  },
];

export default projects;

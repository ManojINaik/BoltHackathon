export enum Role {
  FE_DEV = "feDev",
  BE_DEV = "beDev",
  SPNS_COO = "spnsCoo",
  MRKT_ORG = "mrktOrg",
  FIN_DIR = "finDir",
  LOG_ORG = "logOrg",
  DES_TL = "desTl",
  GDES_L = "gdesL",
  GDES_ORG = "gdesOrg",
}

export const ROLES = {
  [Role.FE_DEV]: {
    label: "Frontend Developer",
    description: `
Frontend Developers shape how our audiences experience and interact with Bolt.new online. Whether it’s working with designers to craft our main website, building modern interactive web apps like our hacker application and attendee dashboard, or brainstorming and launching new initiatives like a component library—you can expect to ship plenty of quality code to tens of thousands of users worldwide, while learning new skills in a supportive team that encourages growth.
    `,
    opportunities: `
- Write quality code for numerous projects, including:
    - Our main static site, [Bolt.new](https://Bolt.new/)
    - Hacker applications, [apply.Bolt.new](https://apply.Bolt.new/)
    - Attendee dashboard, [my.Bolt.new](https://my.Bolt.new/)
    - A wealth of other rich web apps and tools used by hackers, sponsors, mentors, organizers, and more
- Help the entire Frontend team grow as developers by contributing to discussions and participating in code reviews
- Engineer new projects and improvements to scale and advance our frontend architecture
- Coordinate with the Marketing, Design, and Backend teams to build great experiences for attendees from around the globe
- Provide a healthy dose of memes to the rest of the organizing team during team-wide meetings
    `,
    skills: `
- Have some prior web development experience using HTML, CSS, and JavaScript
- Be familiar with or have an interest in:
    - Frontend frameworks such as React
    - Accessibility and responsive design best practices
    - Building data-driven frontends that interface with APIs
- Be willing to learn and build with a variety of libraries and codebases
- Bonus: Familiarity with TypeScript, modern React (hooks, context), or GraphQL
- Bonus: A good understanding of accessibility best practices to cater towards the diverse audience of Bolt.new

If you have any other questions about our Frontend team, please email dorian@Bolt.new.
    `,
    link: "https://forms.gle/pussCUTwtCYzZHfc9",
  },
  [Role.BE_DEV]: {
    label: "Backend Developer",
    description: `
As a Backend Developer for Bolt.new, you’ll be responsible for all the super-important tech bits that hackers don’t see. Whether it’s developing new features for event websites, keeping our API server running, running data analytics queries, or making new internal tools to help the team, your efforts are the glue that holds Bolt.new together.

Curious to learn more about what it's like to build backend infrastructure to handle millions of requests over the event weekend? Read our blog post about (almost) every time our servers crashed [here](http://bit.ly/3pwZZmX)!
    `,
    opportunities: `
- Join a tight-knit team of developers and grow a ton by building long-term real-world products, fleshing out requirements, and participating in code reviews.
- Design, construct, and maintain the services powering Bolt.new, including:
    - HackerAPI, our core backend API service which supports hacker applications, event check-ins, our team dashboard, and most of our data.
    - New internal and external scripts, tools, and dashboards to improve team productivity.
    - Learn web and database infrastructure — we run everything on Google Cloud Platform and Kubernetes!
- Use metrics, analytics, and reporting tools to optimize performance and fix bugs.
- Perform data analysis with SQL and Metabase to provide valuable insights for the team.
- Document, refactor, and apply development best practices.
- Rapidly build and take ownership of new projects from your ideas and requested by other teams to improve Bolt.new. In the past, these have included:
    - Scanner tool: The QR code scanner we use to check hackers in to events and meals.
    - Slack bots: Tooling for our participants to use for mentorship, scheduling, AI-powered Q&A, etc.
    - Judging: Scripts and tooling to schedule our volunteers, judges, and hackers for the day-of judging process.
    `,
    skills: `
- Have some prior experience building backend APIs (framework-agnostic, Flask, Express etc.). Any level of experience is fine!
- Be familiar with and have an interest in:
    - Object-oriented programming languages (we mainly use TypeScript, and sometimes Python).
    - Relational databases and writing queries.
    - Architecting and developing the backend APIs needed to implement a product.
    - Understanding and debugging complex systems.
    - Writing tests.
- Be a team player and great communicator.
- Love writing technical plans, specifications, and great internal documentation.
- Be fun to work with!

- Bonus: Experience with DevOps, containerized applications, CI/CD pipelines, deployment processes, or cloud infrastructure.
- Bonus: An understanding of how to build scalable backend services to cater to the Bolt.new audience.

If you have any other questions about our Backend team, please email alex.aumais@Bolt.new.
`,
    link: "https://forms.gle/JHCY3Tmb5y2LV4Vy7 ",
  },
  [Role.DES_TL]: {
    label: "Design Team Lead",
    description: `
As the Design Team Lead at Bolt.new, you’ll be responsible for leading a team of Graphic and Product Designers to tackle all aspects of Bolt.new’s brand identity. You will guide the design team through everything from establishing our theme for the year to making sure our websites, dashboards, and tools are user-friendly for all attendees. The Design Team Lead will plan out the goals, decisions, and strategies for their team, and ensure that the design team is cross-functional across Bolt.new by working closely with the other Team Leads. The Design Team Lead will ensure that all tasks are completed and standards are upheld, all while fostering a tight-knit, cohesive, and fun environment for their designers to grow both personally and professionally.
    `,
    opportunities: `
- Lead a team of 2 Product Designers and 3 Graphic Designers to establish and design all internal and external-facing platforms behind World’s biggest hackathon
- Collaborate with the Marketing, Logistics, Frontend, and Backend teams to define specifications and designs, and work with your designers to maintain a consistent level of quality and output
- Mentor a team of designers in growing independence, responsibility, innovation, and communication
- Provide and receive feedback on designs
- Create and experiment with various aspects of design (ex. illustration, UX, graphic) to create a cohesive design system, compelling visual assets, and accessible tools built by our platform teams
    `,
    skills: `
- Proficient with Adobe Creative Suite (Illustrator, Photoshop, InDesign, After Effects) and Figma
- Experience working with and leading cross-functional teams
- A strong understanding of both product and graphic design and an ability to clearly articulate constructive feedback
- Have a portfolio showcasing strong design work
- Bonus: Have experience in motion graphics and/or animation, and experience creating social media assets or promotional items
`,
    link: "https://forms.gle/JkHJ8NM97vNgaxmK6",
  },
  [Role.GDES_L]: {
    label: "Lead Graphic Designer",
    description: `
As the Lead Graphic Designer for Bolt.new, you will work alongside Product Designers and the Design Team Lead of Bolt.new’s design team. Specifically, you will be guiding 2 Graphic Designers in their respective projects, helping with task delegation, mentorship, and support. From our date launch website to social media, you will work on establishing and unifying the brand of Bolt.new, being the go-to person for visual work, and ensuring that the Graphic Designers on the design team are able to complete design asset requests on time and at a high quality.

Curious about what designing at Bolt.new is like? Read our blog post here: [here](https://bit.ly/3n9NWxL)
    `,
    opportunities: `
- Lead a team of 2 Graphic Designers to establish this year’s theme for Bolt.new
- Manage graphic design tasks and timelines
- Provide mentorship and support for the other graphic designers
- Create and experiment with various aspects of design (ex. illustration, motion, typography) to create an impactful brand identity
- Design compelling visual assets for our website and/or mobile offerings, social media accounts, and promotional items (ex. swag, virtual photo booth)
- Work closely with the rest of the Design team to maintain a consistent brand language that is diverse, inclusive and accessible
- Collaborate with other teams to define specifications and designs, and collaborate with your fellow designers to provide and receive feedback
    `,
    skills: `
- Proficient with Adobe Creative Suite (Illustrator, Photoshop, InDesign, After Effects) and Figma
- Experience working with teams and demonstrated proactiveness
- Adaptable and efficient with an eagerness to iterate on designs based on feedback
- Have experience creating social media assets or promotional items
- Have a portfolio showcasing strong visual design work, whether it be illustration, motion, print, etc. (Having a portfolio will take you far!)
- Bonus: Have experience in motion graphics and/or animation
- Bonus: Prior leadership experience
`,
    link: "https://forms.gle/6begvujm61yLcFMf9",
  },
  [Role.GDES_ORG]: {
    label: "Graphic Designer",
    description: `
As a Graphic Designer for Bolt.new, you will be establishing this year’s theme for World’s biggest hackathon. You will be bringing Bolt.new’s brand to life on web, mobile, and social media platforms. You will be the go-to person for creating beautiful and polished visual work, whether it’s the Bolt.new swag designs, social media assets, or even a short animation for an Instagram post. As a part of the Bolt.new Design team, you get to define what someone sees any time they interact with Bolt.new.

Curious about what designing at Bolt.new is like? Read our blog post here: [here](https://bit.ly/3n9NWxL)
    `,
    opportunities: `
- Establish this year’s theme for Bolt.new alongside other Graphic Designers
- Create and experiment with various aspects of design (ex. illustration, motion, typography) to create an impactful brand identity
- Design compelling visual assets for our website and/or mobile offerings, social media accounts, and promotional items (ex. swag, virtual photo booth)
- Work closely with the rest of the Design team to maintain a consistent brand language that is diverse, inclusive and accessible
- Collaborate with the Marketing team and Logistics team to define specifications and designs, and collaborate with your fellow designers to provide and receive feedback
    `,
    skills: `
- Proficient with Adobe Creative Suite (Illustrator, Photoshop, InDesign, After Effects)
- Adaptable and efficient with an eagerness to iterate on designs based on feedback
- Have experience creating social media assets or promotional items
- Have a portfolio showcasing strong visual design work, whether it be illustration, motion, print, etc. (Having a portfolio will take you far!)
- Bonus: Have experience working with Figma
- Bonus: Have experience in motion graphics and/or animation
    `,
    link: "https://forms.gle/R7uy7Lr1kiX3ieZb9 ",
  },
  [Role.SPNS_COO]: {
    label: "Sponsorship Coordinator",
    description: `
As a Sponsorship Coordinator for Bolt.new, you will be responsible for building relationships with the sponsors that support our event. Our sponsors play an important role in our hackers, providing access to networking opportunities and mentorship from top industry professionals – you’ll be making these connections possible. You’ll also contribute to shaping our sponsorship strategy and directly influence the experiences of hackers from around the world! Your efforts will ensure that today’s leading technology organizations continue to provide dream opportunities for hackers at Bolt.new.
    `,
    opportunities: `
- Raise the funding that will bring Bolt.new to life
- Cultivate new and existing relationships with sponsors as the first point of contact for all sponsor representatives at the event
- Coordinate with the Logistics, Marketing, Platform, and Design teams to build great experiences for sponsors from around the world
- Interact with a diverse set of sponsors
    `,
    skills: `
- Have strong interpersonal, writing, and verbal skills
- Be the primary advocate for sponsors' goals and their impact on the hacker experience within the Bolt.new team
- Stay organized throughout the year and hold personal accountability for cross-functional communication
- Be enthusiastic and possess a strong work ethic (calls need to be made during regular business hours)
- Be able to manage your time wisely
- Bonus: Have prior experience planning events (the bigger the better)
- Bonus: Have previous sales or sponsorship experience
- Bonus: Have experience with CRM and lead tracking software
    `,
    link: "https://forms.gle/FvTGtqZ8yXqEoSG67",
  },
  [Role.MRKT_ORG]: {
    label: "Marketing Organizer",
    description: `
As a Marketing Organizer, you will contribute to all external communications associated with Bolt.new. Your responsibilities will include crafting engaging social media copy, announcements, and creating content for our social media platforms (such as reels). You will also plan and execute marketing campaigns for significant milestones, like hacker applications, which reach tens of thousands of people in our global audience.
    `,
    opportunities: `
- Develop inclusive social media and outreach campaigns to grow our audience, increase audience engagement, and create excitement for the event
- Understand and utilize marketing tactics to reach and enable a diverse audience to fully experience and connect with Bolt.new
- Write professional, compelling, and inclusive copy for external communications, including our website, emails, sponsorship packages, and other materials
- Develop a strong understanding of Bolt.new's brand, and convey it through written content and marketing strategies
- Ensure that published content is consistent in tone, style, content, and accuracy
- Work with designers and developers to scope out written content, quickly iterate, and respond to changing project specifications
    `,
    skills: `
- Excellent understanding of social media content and strategy
- Able to consistently write professionally and inclusively
- Great attention to detail
- Flexible and adaptable in a fast-paced team environment
- Able to work cross functionally with designers and developers
- Bonus: Have experience using platforms such as Front, Mailjet, Meta Adds, Linktree, etc. to execute marketing campaigns/strategies and platforms such as Tiktok, Capcut and Instagram to edit videos.
    `,
    link: "https://forms.gle/LB5kZ2nuEHX1E4Ea6 ",
  },
  [Role.FIN_DIR]: {
    label: "Finance Director",
    description: `
As one of two Finance Directors on the team, you will be responsible for the budget of Bolt.new. From building budgets to negotiating with external vendors, you will be collaborating across the entire organization to ensure the success of our event.
    `,
    opportunities: `
- Creating and tracking annual event budget
- Processing expenses and team reimbursements
- Work with sponsors to process and collect sponsorship payments
- Collaborating effectively with organizers across the team to make financial decisions
- Aligning financial expectations within the organization and with organizational goals
- Keeping an eye on the big picture, identifying opportunities while balancing short term and long term financial needs
    `,
    skills: `
- Basic proficiency in Microsoft Excel
- Strong organization skills and attention to detail
- Strong interpersonal and communication skills
- Work comfortably in a team environment with changing priorities and time pressures
- Be familiar with accounting principles
- Bonus: Experience with QuickBooks or a similar accounting software
- Bonus: Have prior experience planning events (the bigger the better)
    `,
    link: "https://forms.gle/xeZXokqewtcA3cU29",
  },
  [Role.LOG_ORG]: {
    label: "Logistics Organizer",
    description: `
As a Logistics Organizer for Bolt.new, you will be directly in charge of bringing a vital component of World’s biggest hackathon to life and empowering thousands of attendees from diverse backgrounds. You’ll get complete ownership over 1-2 projects on which you’ll get to iterate, innovate, and execute from end to end. Our projects range from organizing travel to bring hackers from over 20 countries to our event, to negotiating with vendors to book a full weekend of catered meals and snacks, to cultivating a sense of community through activities & meetups!

As a Logistics Organizer, you will also work closely with other teams to coordinate design and marketing assets, manage project budget, and scope out responsibilities for custom platform tools. Your hard work will culminate in 36 hours of perfectly planned chaos that will leave behind an unforgettable experience for you and the attendees at Bolt.new 2025.
    `,
    opportunities: `
- Take ownership of one or two projects and do whatever it takes to see it through to success
    - Possible projects include Travel, Ceremonies, Workshops, Activities, Judging, Swag, and more — see the application form for more details!
- Innovate and implement new ways to provide an unforgettable experience that results in a trailblazing event in the hackathon space
- Take on new tasks, big and small, as the need arises
- Create an event and community that welcomes and empowers attendees from underrepresented backgrounds
    `,
    skills: `
- Be relentlessly detail-oriented
- Be creative and able to think outside the box
- Be organized and keep track of multiple tasks and responsibilities at once
- Have excellent teamwork, communication, and collaboration skills
- Take initiative and be able to work autonomously
- Bonus: Strong communication and negotiation skills for working with vendors
- Bonus: An understanding of the diverse audience of Bolt.new/hackathons in general
- Bonus: For the hardware project, having prior experience as a hardware hacker and projects to share!
    `,
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfSUIQPZtN9Eu0Xk9xjd1L_tkk04PHy4mtRAvbQaqMUJvBNHA/viewform?usp=dialog",
  },
};

export enum RoleCategory {
  ALL = "all",
  DEVELOPMENT = "development",
  DESIGN = "design",
  SPONSORSHIP = "sponsorship",
  FINANCE = "finance",
  MARKETING = "marketing",
  LOGISTICS = "logistics",
}

export const ROLE_CATEGORIES = {
  [RoleCategory.ALL]: {
    label: "All roles",
    roles: [
      Role.FE_DEV,
      Role.BE_DEV,
      Role.DES_TL,
      Role.GDES_L,
      Role.GDES_ORG,
      Role.SPNS_COO,
      Role.MRKT_ORG,
      Role.LOG_ORG,
      Role.FIN_DIR,
    ],
  },
  [RoleCategory.DEVELOPMENT]: {
    label: "Development",
    roles: [Role.FE_DEV, Role.BE_DEV],
  },
  [RoleCategory.DESIGN]: {
    label: "Design",
    roles: [Role.DES_TL, Role.GDES_L, Role.GDES_ORG],
  },
  [RoleCategory.SPONSORSHIP]: {
    label: "Sponsorship",
    roles: [Role.SPNS_COO],
  },
  [RoleCategory.MARKETING]: { label: "Marketing", roles: [Role.MRKT_ORG] },

  [RoleCategory.LOGISTICS]: {
    label: "Logistics",
    roles: [Role.LOG_ORG],
  },
  [RoleCategory.FINANCE]: { label: "Finance", roles: [Role.FIN_DIR] },
};

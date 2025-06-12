export const blogPosts = [
  {
    slug: "welcome-to-guion-blog",
    title: "Welcome to the Guion Blog",
    description: "Introducing our blog where we share insights on AI, development, and building products for indies and professionals.",
    date: "2025-06-11",
    author: "Neil",
    tags: ["Announcement", "AI", "Development"],
    featured: true,
    readingTime: "3 min read",
    content: `
# Welcome to the Guion Blog

We're excited to launch our blog as a space to share our journey, insights, and learnings as we build AI-powered tools for indies, founders, and professionals.

## Why We're Starting This Blog

At Guion, we believe in transparency and community. As a two-person startup exploring the possibilities of AI, we want to share:

- **Our development journey** - The challenges, breakthroughs, and lessons learned
- **AI insights** - How we're using AI to augment human capabilities
- **Product updates** - Behind-the-scenes looks at FlickNote and future products
- **Industry thoughts** - Our perspective on the evolving landscape of AI tools

## What to Expect

We'll be posting regularly about:

### Technical Deep Dives
As developers and designers, we love getting into the details. Expect posts about:
- Architecture decisions
- AI implementation strategies
- UI/UX design principles
- Performance optimizations

### Product Development
Follow along as we build and improve our products:
- Feature announcements
- Development roadmaps
- User feedback and iterations
- Case studies

### Thought Leadership
Our thoughts on where AI is heading and how it can help individuals:
- The future of AI-augmented work
- Ethics in AI development
- Building for indies vs. enterprises
- The human-AI collaboration

## Join the Conversation

We believe the best products are built with community feedback. We encourage you to:
- Share your thoughts in the comments
- Suggest topics you'd like us to cover
- Tell us about your experiences with AI tools
- Connect with us on [GitHub](https://github.com/GuionAI) and Twitter

## Looking Forward

This blog is just the beginning. We're committed to sharing our journey openly and honestly. Whether you're a fellow founder, a developer exploring AI, or someone interested in how technology can enhance human capabilities, we hope you'll find value in our posts.

Stay tuned for our next post where we'll dive deep into the development of FlickNote and how we're using AI to revolutionize note-taking.

Welcome aboard! 🚀
    `
  },
  {
    slug: "building-flick-note",
    title: "Building FlickNote: The Journey to Audio-First Note Taking",
    description: "A deep dive into how we built FlickNote, our audio transcription app that helps users capture and organize thoughts effortlessly.",
    date: "2025-06-10",
    author: "Sven",
    tags: ["Product", "Design", "FlickNote", "AI"],
    image: "/blog/flick-note-hero.jpg",
    featured: false,
    readingTime: "5 min read",
    content: `
# Building FlickNote: The Journey to Audio-First Note Taking

When we set out to build FlickNote, we had a simple observation: typing on mobile devices is slow and cumbersome, especially when you're trying to capture a fleeting thought or idea. What if there was a better way?

## The Problem We Wanted to Solve

As designers and developers, we constantly have ideas throughout the day:
- In the shower
- During walks
- While commuting
- In meetings
- Right before sleep

The friction of opening a notes app, typing (often with autocorrect fights), and organizing these thoughts meant many great ideas were lost.

## Why Audio-First?

Speaking is the most natural form of human communication. We can speak 3-4x faster than we type, and voice captures emotion and context that text often misses. With advances in AI transcription, we saw an opportunity to make audio the primary input method for note-taking.

## Design Principles

### 1. One-Tap Recording
The core interaction had to be dead simple. Open the app, tap once, start talking. No complex menus, no setup required.

### 2. Intelligent Organization
We use AI not just for transcription, but for understanding context. Notes are automatically:
- Tagged by topic
- Linked to location and time
- Grouped by related themes
- Searchable by concept, not just keywords

### 3. Beautiful Simplicity
Despite the complex AI working behind the scenes, the interface remains clean and intuitive. Every design decision was made to reduce cognitive load.

## Technical Challenges

### Real-Time Transcription
We needed transcription that was:
- Accurate across accents and speaking styles
- Fast enough to feel real-time
- Smart enough to understand context

### Privacy-First Architecture
Your thoughts are private. We built FlickNote with:
- On-device processing where possible
- End-to-end encryption for cloud features
- No selling or analyzing of user data

### Cross-Platform Sync
Ideas don't wait for you to be at your desk. FlickNote syncs seamlessly across:
- iOS (native Swift app)
- Web (PWA for desktop)
- Android (coming soon)

## The Human Touch

While AI powers the core functionality, we've been careful to keep the human element central:
- AI suggests, but never changes your words
- Organization is automatic but fully customizable
- Export options preserve your voice and style

## What's Next

We're just getting started. Upcoming features include:
- Multi-language support
- Team collaboration features
- Integration with popular productivity tools
- Advanced voice commands

## Try It Yourself

FlickNote is now available in beta. We'd love for you to try it and share your feedback. Visit our [Projects page](/projects#flick-note) to learn more.

Building FlickNote has been an incredible journey, and we're excited to see how it helps people capture and organize their thoughts in new ways. Stay tuned for more updates as we continue to evolve the product based on your feedback.
    `
  },
  {
    slug: "ai-augmentation-not-replacement",
    title: "AI Augmentation, Not Replacement: Our Core Philosophy",
    description: "Why we believe AI should enhance human capabilities rather than replace them, and how this philosophy shapes everything we build.",
    date: "2025-06-09",
    author: "Neil",
    tags: ["AI", "Philosophy", "Future of Work"],
    featured: false,
    readingTime: "4 min read",
    content: `
# AI Augmentation, Not Replacement: Our Core Philosophy

In the rush to automate everything, we've taken a different path at Guion. We believe AI's greatest potential isn't in replacing humans, but in amplifying what makes us uniquely human: creativity, intuition, and judgment.

## The Problem with Pure Automation

The tech industry often frames AI as a replacement for human work. "Automate everything!" they say. But this misses something fundamental: the best outcomes come from human insight enhanced by machine capabilities, not from removing humans from the loop.

Consider these scenarios:
- **Writing**: AI can generate text, but the best writing comes from human ideas structured and refined with AI assistance
- **Design**: AI can create variations, but human aesthetic judgment and emotional understanding drive meaningful design
- **Decision Making**: AI can process data, but human wisdom and ethics guide important choices

## Our Approach: The Best of Both Worlds

At Guion, we design our products around three core principles:

### 1. Humans Set Direction, AI Handles Execution
In FlickNote, you speak your ideas naturally. AI handles the tedious parts - transcription, formatting, organization - but your thoughts remain unchanged. The AI serves you, not the other way around.

### 2. Preserve Human Agency
Every AI suggestion in our products is just that - a suggestion. You maintain full control over:
- What to accept or reject
- How to modify AI outputs
- When to use AI assistance

### 3. Enhance, Don't Replace, Human Skills
Our tools make you better at what you do, they don't do it for you:
- **Better Memory**: AI helps you recall and connect ideas
- **Better Organization**: AI suggests structures but you decide
- **Better Expression**: AI helps refine but preserves your voice

## Real-World Impact

This philosophy isn't just theoretical. Here's how it plays out:

### For Creators
Instead of AI writing your content, it helps you:
- Capture ideas quickly (voice to text)
- Find connections between concepts
- Polish and refine your unique voice

### For Professionals
Rather than automating your job, AI helps you:
- Focus on high-value strategic work
- Process information more efficiently
- Make better-informed decisions

### For Learners
AI doesn't learn for you, it helps you:
- Understand complex topics through personalized explanation
- Track your learning progress
- Connect new knowledge to existing understanding

## The Future We're Building

We envision a future where:
- **AI is invisible**: It works behind the scenes, not in your face
- **Humans are empowered**: Technology amplifies human potential
- **Work is meaningful**: Automation handles drudgery, humans handle creativity
- **Privacy is paramount**: Your thoughts and data remain yours

## Why This Matters Now

As AI capabilities grow exponentially, the choices we make today about human-AI interaction will shape society for decades. By building tools that augment rather than replace, we're voting for a future where technology serves humanity, not the other way around.

## Join Us in Building This Future

Whether you're using our products, following our journey, or building your own tools, we invite you to join us in creating AI that enhances human potential. Together, we can build a future where technology makes us more human, not less.

*What's your vision for human-AI collaboration? We'd love to hear your thoughts at feedback@guion.io*
    `
  },
  {
    slug: "indie-developer-productivity-stack",
    title: "The Indie Developer's Productivity Stack: Tools We Actually Use",
    description: "A practical guide to the tools and workflows that keep our two-person startup productive and focused.",
    date: "2025-06-08",
    author: "Sven",
    tags: ["Productivity", "Tools", "Indie Development"],
    featured: false,
    readingTime: "6 min read",
    content: `
# The Indie Developer's Productivity Stack: Tools We Actually Use

As a two-person startup, we can't afford to waste time on tools that don't deliver. Here's our actual productivity stack - battle-tested and indie-approved.

## Core Principles

Before diving into tools, here are our guiding principles:
1. **Minimize tool switching** - Fewer tools, deeper mastery
2. **Automate the repetitive** - Save brain power for creative work
3. **Async by default** - Protect deep work time
4. **Data portability** - Never get locked into a platform

## Communication & Collaboration

### Linear (Issue Tracking)
We tried Jira, Notion, and Trello. Linear wins because:
- Lightning fast interface
- Keyboard shortcuts for everything
- Built for developers, not managers
- Clean, focused design

### Discord (Team Chat)
Yes, Discord for a startup. Here's why:
- Voice channels for quick discussions
- Screen sharing that actually works
- Community management built-in
- Free for our needs

### Loom (Async Video)
Perfect for:
- Design reviews
- Code walkthroughs
- Bug reports
- Quick updates

## Development Workflow

### VS Code + Cursor
Our IDE setup:
- VS Code for traditional coding
- Cursor for AI-assisted development
- Shared settings via Settings Sync
- Essential extensions: Prettier, ESLint, GitLens

### Warp (Terminal)
The terminal reimagined:
- AI command suggestions
- Block-based output
- Searchable history
- Team sharing for debugging

### GitHub
Beyond just Git:
- Actions for CI/CD
- Projects for roadmap planning
- Discussions for decisions
- Copilot for code assistance

## Design Tools

### Figma
Our entire design system lives here:
- Component library
- Design tokens
- Prototypes
- Developer handoff

### Arc Browser
Surprisingly crucial for productivity:
- Spaces for project separation
- Built-in screenshot tools
- Split view for reference
- Boosts for custom site mods

## Note-Taking & Knowledge Management

### FlickNote (Our Product!)
We dogfood our own product for:
- Meeting notes
- Quick ideas
- Daily standups
- Voice journals

### Obsidian
For long-term knowledge:
- Technical documentation
- Decision logs
- Learning notes
- Markdown everything

## Time Management

### Raycast
Mac productivity on steroids:
- Quick calculations
- Clipboard history
- Window management
- Custom scripts

### Cal.com
Open-source scheduling:
- Public booking links
- Team availability
- Timezone handling
- No vendor lock-in

## The Indie Advantage

Being small has advantages:
- **No bureaucracy**: Pick tools and start using them
- **Rapid iteration**: Switch tools if they don't work
- **Direct feedback**: Everyone uses everything
- **Cost consciousness**: Free/cheap tools force creativity

## What We Don't Use (And Why)

### Slack
- Too noisy for two people
- Expensive for features we don't need
- Discord handles our needs

### Notion Databases
- Overcomplicated for our needs
- Performance issues
- Linear + Obsidian covers our bases

### Complex CI/CD
- GitHub Actions handles everything
- No need for Jenkins/CircleCI
- Keep it simple

## Productivity Tips That Actually Work

1. **Time-box tool exploration**: Max 2 hours evaluating new tools
2. **Document your workflows**: Future you will thank you
3. **Automate onboarding**: Even for a team of two
4. **Regular tool audits**: Cut what you're not using

## The Reality Check

No tool will make you productive if you:
- Don't have clear goals
- Switch tools constantly
- Over-optimize your setup
- Forget to actually build

## Our Daily Workflow

**Morning**:
1. Check Linear for priorities
2. Quick Discord sync if needed
3. Deep work blocks (2-3 hours)

**Afternoon**:
4. Loom updates for async review
5. Collaborative work
6. End-of-day notes in FlickNote

**Weekly**:
- Tool audit (15 min)
- Workflow improvements
- Knowledge base updates

## Conclusion

The best productivity stack is the one you actually use. Start simple, add tools only when pain points emerge, and always prioritize shipping over optimizing.

Remember: Tools should reduce friction, not add it. If you're spending more time managing your tools than using them, it's time to simplify.

*What's in your indie productivity stack? Share your setup at feedback@guion.io - we're always looking for new ideas!*
    `
  }
];
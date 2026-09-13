Review the current Folio implementation against the updated Folio Guidelines.

This is a focused redesign of the HOMEPAGE and primary project-browsing experience.

Do not rebuild the entire portfolio from scratch.

Preserve strong existing typography, visual assets, project content, atmospheric treatments, colors, motion ideas, and components where they still support the updated direction.

However, the previous mind-map / constellation / full-screen project-scene concept is no longer the primary interaction model.

The new homepage concept is:

HERO + SPATIAL PROJECT WINDOW GALLERY

The central interaction sequence is:

LAND → SEE → BROWSE → FOCUS → EXPLORE

and:

SCROLL / DRAG = BROWSE
CLICK = FOCUS
EXPAND = EXPLORE


--------------------------------------------------
1. FIRST: REVIEW THE CURRENT HOMEPAGE
--------------------------------------------------

Before making changes, evaluate the current homepage against the updated Folio Guidelines.

Identify and fix anything that:

- feels too abstract
- relies on mind maps or node networks
- hides the actual projects
- uses too much explanatory text before showing work
- allows text and imagery to collide
- creates uncontrolled overlap
- feels like a generic developer portfolio
- feels like a dashboard or bento grid
- makes decorative elements more prominent than actual work
- uses too many floating information containers
- makes the visitor work to understand what Kevin does
- uses motion without communicating hierarchy or interaction
- creates excessive visual density

Preserve elements that already work well.

The redesign should feel like an evolution of Folio, not an unrelated new website.


--------------------------------------------------
2. HOMEPAGE COMPOSITION
--------------------------------------------------

Build the opening experience around one integrated composition:

HERO + PROJECT WINDOWS

Do NOT create:

Hero
↓
Project section
↓
Cards

Instead, project windows should already be entering the visual composition of the hero.

Reference the compositional confidence of premium contemporary creative websites such as Squarespace:

- extremely strong hero typography
- large real imagery
- confident negative space
- project/site windows partially entering the viewport
- simple information hierarchy
- imagery doing much of the storytelling

Do not literally copy Squarespace.

Translate those principles into Folio.


--------------------------------------------------
3. HERO
--------------------------------------------------

The hero needs to communicate Kevin's professional identity immediately.

Suggested information hierarchy:

KEVIN STAHL

Large statement such as:

I build digital
products & systems.

or

I build things
for the web.

Supporting copy should briefly position Kevin as a multidisciplinary full-stack developer working across software, web applications, digital commerce, integrations, and technical systems.

Possible supporting language:

Full-stack developer building software, commerce experiences, and digital systems from interface to infrastructure.

Keep this short.

Include restrained primary actions such as:

VIEW WORK
ABOUT / RESUME

Do not fill the hero with skill pills.

Do not place a giant résumé in the hero.

The work itself should provide evidence of Kevin's capabilities.


--------------------------------------------------
4. PROTECTED HERO ZONE
--------------------------------------------------

Create an explicit protected region around important hero content.

Project windows may surround, enter, or partially sit behind the hero composition, but they MUST NOT obscure:

- Kevin's name
- primary headline
- supporting description
- primary actions

Decorative objects must also respect this region.

The composition may be asymmetrical.

It may feel spatial.

It may contain overlap.

But important information must remain completely readable.

If choosing between an interesting overlap and readability:

CHOOSE READABILITY.


--------------------------------------------------
5. PROJECT WINDOWS
--------------------------------------------------

The major visual feature of the homepage should be a collection of large project windows.

These should NOT look like conventional portfolio cards.

They should look like pieces of the actual work.

Use real project imagery wherever available.

Potential projects include:

EZCalcs
La Concheria
PianoTeacherLink
The Stahl Marketing
other client / commerce work
selected systems / technical work where appropriate

Each project window should primarily contain:

REAL PROJECT MEDIA

Examples:

- website screenshot
- application interface
- storefront
- mobile interface
- calculator UI
- dashboard
- product photography
- meaningful project artifact

Project name/category may appear subtly.

Avoid filling windows with descriptions.

The image should sell the project first.


--------------------------------------------------
6. WINDOW COMPOSITION
--------------------------------------------------

Arrange project windows spatially.

Allow:

- different depths
- different scales
- partial cropping
- subtle rotation
- windows entering from viewport edges
- controlled overlap between project windows
- foreground / midground / background relationships

Avoid arranging them into a neat grid.

However:

PROJECT WINDOWS MAY OVERLAP PROJECT WINDOWS.

PROJECT WINDOWS MAY NOT OBSCURE IMPORTANT TEXT.

PROJECT WINDOWS MAY NOT MAKE OTHER PROJECTS IMPOSSIBLE TO RECOGNIZE.

This is controlled composition, not random collage.


--------------------------------------------------
7. PARALLAX + BROWSING
--------------------------------------------------

Give project windows perceived depth.

As the visitor scrolls or drags through the gallery:

Foreground windows move slightly faster.

Midground windows move at the primary browsing speed.

Background windows move more slowly.

Use restrained parallax.

The gallery should feel dimensional without feeling like a physics demo.

Ambient motion may include:

- extremely slow floating
- subtle bobbing
- slight rotation
- tiny positional drift
- gentle pointer response

Motion should be almost subconscious when the visitor is idle.


--------------------------------------------------
8. PROJECT FOCUS
--------------------------------------------------

A project approaching the primary viewing area should gain visual gravity.

Possible changes:

- slightly larger scale
- clearer imagery
- stronger contrast
- reduced rotation
- stronger project label
- nearby projects recede slightly

Make it visually obvious that the focused window can be opened.

Do not rely exclusively on hover.

The user should intuitively understand:

"I can click this."


--------------------------------------------------
9. CLICK → SNAP → PROJECT VIEW
--------------------------------------------------

Clicking a project window should create the signature Folio transition.

Conceptually:

PROJECT WINDOW
↓
SELECT
↓
SURROUNDING WINDOWS RECEDE
↓
SELECTED WINDOW STRAIGHTENS
↓
WINDOW SCALES UP
↓
WINDOW SNAPS INTO A LARGE PROTECTED VIEW
↓
ENVIRONMENT SETTLES

Do NOT use a conventional modal floating above the homepage.

The project window itself should feel like it BECOMES the project view.

This spatial continuity is important.

Think:

little window → full experience

rather than:

card → popup


--------------------------------------------------
10. FOCUSED PROJECT VIEW
--------------------------------------------------

Once inside a project, dramatically reduce visual chaos.

The project viewer should be clean, editorial, spacious, and easy to scan.

The project media should dominate.

Explore a composition roughly like:

PROJECT NUMBER / PROJECT NAME / CATEGORY


          small annotation

     ┌──────────────────────────────┐
     │                              │
     │                              │
     │      LARGE SCREENSHOT        │
     │                              │
     │                              │
     └──────────────────────────────┘

annotation                 annotation


       ←       01 / 05       →


Short project summary

VIEW LIVE ↗
GITHUB ↗
MORE DETAILS


Do not follow this wireframe literally.

Use it as an information hierarchy.


--------------------------------------------------
11. SCREENSHOT / SLIDESHOW SYSTEM
--------------------------------------------------

Create a simple visual project viewer.

Projects may have approximately 3–6 meaningful pieces of media.

Allow:

PREVIOUS
NEXT
SLIDE NUMBER

or intuitive swipe/drag behavior.

Do not turn this into a tiny thumbnail gallery.

The current image should be large.

Each image should tell part of the project story.


--------------------------------------------------
12. CONTEXTUAL ANNOTATIONS
--------------------------------------------------

Around the current project image, allow a small number of editorial annotations.

Examples:

LARAVEL

PYTHON + SYMPY

LIVEWIRE

MYSQL

DYNAMIC FORMULA ENGINE

SHOPIFY

CUSTOM THEME DEVELOPMENT

API INTEGRATION

E-COMMERCE

SYSTEM DESIGN

These should NOT become giant collections of technology pills.

Treat them like magazine annotations or architectural callouts.

Use typography, position, lines, captions, or restrained graphical relationships.

Annotations should explain what is relevant about the CURRENT IMAGE.

When the slideshow changes, annotations may also change.


--------------------------------------------------
13. PROJECT STORY THROUGH MEDIA
--------------------------------------------------

Use the slideshow to progressively tell the story.

For example, EZCalcs could conceptually behave like:

01 — PRODUCT

Show the primary calculator experience.

Supporting context:
What is EZCalcs?
What problem does it solve?
What did Kevin build?


02 — FORMULA SYSTEM

Show formula creation / management.

Supporting context:
Laravel
Livewire
data modeling
dynamic formulas


03 — SOLVER

Show calculation / solving behavior.

Supporting context:
Python
SymPy
process execution
symbolic computation


04 — DATA / UNITS

Show relevant system UI.

Supporting context:
MySQL
unit modeling
conversion architecture


05 — RESULT / CURRENT PRODUCT

Show the polished experience.

Supporting context:
what works
what was learned
where the product is going

Do not literally force every project into five slides.

Use the project's actual story.


--------------------------------------------------
14. DEEPER INFORMATION
--------------------------------------------------

After the visual overview, allow optional deeper exploration.

Possible sections:

OVERVIEW
TECHNICAL BUILD
ARCHITECTURE
CHALLENGES
DECISIONS
RESULTS
LESSONS

Do not display all of this simultaneously.

Use:

- expandable drawer
- side sheet
- bottom sheet
- tabs
- editorial page transition

Keep the central project media visible whenever reasonable.

The visitor should be able to understand the project WITHOUT opening these sections.

These sections exist for people who want deeper technical context.


--------------------------------------------------
15. RETURN TO GALLERY
--------------------------------------------------

Provide a clear return interaction.

When leaving the project:

project content settles
→ focused view contracts
→ project becomes a window again
→ surrounding gallery returns
→ browsing resumes from the previous location

Do not reset the user to the beginning of the homepage.

Preserve spatial continuity.


--------------------------------------------------
16. PROJECT PERSONALITY
--------------------------------------------------

Projects should share the same interaction system:

WINDOW → FOCUS → VIEWER → CONTEXT → DETAILS → RETURN

But they should not look identical.

Allow each project to influence:

- color
- surrounding light
- imagery
- annotation composition
- subtle motion
- typography accents

For example:

EZCalcs:
cool white / blue / violet / cyan
technical
precise
formula/interface driven

La Concheria:
cream / pink / coral / warm brown
photographic
food/product driven
warm and tactile

Do not merely swap accent colors on an identical template.

Let the actual project content create personality.


--------------------------------------------------
17. IMAGERY PRIORITY
--------------------------------------------------

This is extremely important:

USE MORE REAL PROJECT IMAGERY.

The previous Folio iterations relied too heavily on text containers, concepts, labels, and abstract spatial objects.

Reverse that relationship.

Aim conceptually for:

70% visual evidence
30% explanation

when presenting projects.

Actual work should be the visual identity of the portfolio.

Do not create abstract decorative objects when a screenshot or meaningful project artifact could occupy that space instead.


--------------------------------------------------
18. BELOW THE PROJECT EXPERIENCE
--------------------------------------------------

After the primary gallery experience, the homepage may become calmer.

Use clean editorial sections for:

CAPABILITIES
EXPERIENCE
ABOUT
SKILLS
CONTACT

These do not need the same amount of spatial experimentation.

Think premium résumé / editorial portfolio.

Large typography.

Strong hierarchy.

Excellent spacing.

Meaningful images where appropriate.

This portion should make professional information extremely easy to consume.


--------------------------------------------------
19. VISUAL STYLE
--------------------------------------------------

Keep Folio bright.

Favor:

warm white
pearl
cream
pale lavender
misty blue
soft cyan
blush
subtle project-derived colors

Atmospheric color may behave like light.

Use:

soft shadows
subtle haze
reflected color
restrained gradients
depth
very subtle texture

Do not make the portfolio dark by default.

Do not turn "space" into literal outer-space imagery.

The desired feeling is:

LIGHT + AIR + DEPTH

not:

GALAXY WEBSITE.


--------------------------------------------------
20. TYPOGRAPHY
--------------------------------------------------

Increase confidence in typography.

Use:

large hero typography
large project titles
comfortable supporting copy
small metadata only when genuinely secondary

Do not use tiny text simply because it looks sophisticated.

Do not cover imagery with unnecessary text.

Do not create huge collections of labels.

Typography should create stability while imagery and spatial composition create personality.


--------------------------------------------------
21. REVIEW FOR COLLISIONS
--------------------------------------------------

After implementing the redesign, perform a specific visual collision review.

Check the design at multiple desktop viewport sizes.

Look for:

- text covered by project windows
- project windows covering controls
- annotations colliding with screenshots
- project windows becoming unreadable
- project labels disappearing
- navigation colliding with content
- excessive cropping
- accidental stacking
- text escaping containers
- overlapping interactive targets

Fix these issues rather than treating them as intentional visual experimentation.

Protected content regions are mandatory.


--------------------------------------------------
22. REVIEW FOR VISUAL HIERARCHY
--------------------------------------------------

At every major state, verify the following hierarchy:

1. PROJECT / PRIMARY MESSAGE
2. PROJECT MEDIA
3. PRIMARY INTERACTION
4. SUPPORTING CONTEXT
5. ATMOSPHERE / DECORATION

If atmospheric elements are more visually prominent than the work, reduce them.

If annotations compete with the screenshot, reduce them.

If multiple projects appear equally dominant when one should be focused, strengthen focus hierarchy.


--------------------------------------------------
23. REVIEW FOR SIMPLICITY
--------------------------------------------------

After designing each section, ask:

Can anything be removed without losing meaning?

If yes, remove it.

Particularly question:

- decorative bubbles
- floating text
- connector lines
- labels
- borders
- cards
- badges
- skill pills
- gradients
- background objects
- explanatory copy

Do not decorate empty space simply because it exists.

Whitespace is allowed to remain whitespace.


--------------------------------------------------
24. REVIEW FOR INTERACTION CLARITY
--------------------------------------------------

A first-time visitor should understand without instructions:

I can browse these projects.

I can click a project.

I can move through its screenshots.

I can explore more details.

I can return to the gallery.

Do not require tutorial text to explain the primary interaction.


--------------------------------------------------
25. REVIEW FOR PROFESSIONAL VALUE
--------------------------------------------------

Finally, evaluate the homepage as though you are:

- a software engineering recruiter
- a hiring manager
- a technical lead
- a potential freelance client

Within approximately 10 seconds, the visitor should understand:

WHO IS KEVIN?

WHAT DOES HE DO?

WHAT HAS HE ACTUALLY BUILT?

WHAT TECHNOLOGIES / DOMAINS DOES HE WORK ACROSS?

WHERE CAN I EXPLORE HIS BEST WORK?

The visual design should create curiosity.

The project imagery should provide evidence.

The supporting information should establish credibility.


--------------------------------------------------
FINAL DESIGN PRINCIPLE
--------------------------------------------------

Do not make Folio itself more impressive than the projects.

Folio is the gallery.

The work is the exhibit.

Use spatial composition and motion to make someone WANT to explore.

Then get out of the way and let the work speak.
# CLAUDE.md

# =====================================================================
# Cafe Menu Project Constitution
# Version 1.0
# =====================================================================

## Project Overview

This project builds a modern, responsive cafe menu website.

The goal is not only to create a beautiful interface, but to create a codebase
that remains clean, scalable, maintainable, and easy to extend over time.

Every implementation should prioritize long-term maintainability over short-term convenience.

---

# AI ROLE

You are responsible for acting as:

- Senior Front-end Engineer
- UI / UX Designer
- Software Architect
- Performance Engineer
- Code Reviewer

Every decision should reflect senior-level engineering practices.

---

# PRIMARY OBJECTIVES

Always prioritize the following:

1. Simplicity
2. Readability
3. Reusability
4. Consistency
5. Maintainability
6. Performance
7. Accessibility
8. User Experience

Never sacrifice architecture for speed.

---

# CORE PHILOSOPHY

Write code as if another developer will maintain it for years.

Every component should have one clear responsibility.

Avoid unnecessary complexity.

Small improvements are better than large rewrites.

The simplest solution that satisfies requirements is usually the best solution.

---

# DECISION PRIORITY

When multiple solutions exist, always choose based on:

1. Existing project conventions
2. Reuse existing code
3. Simplicity
4. Maintainability
5. Performance
6. Visual improvements

---

# BEFORE WRITING CODE

Always complete these steps first.

□ Understand the requested feature

□ Search existing implementation

□ Check reusable components

□ Review current architecture

□ Estimate impact

□ Create implementation plan

Never immediately start coding.

---

# BEFORE MODIFYING FILES

Before editing any file:

Understand why it exists.

Identify dependencies.

Minimize changes.

Preserve compatibility.

Never rewrite an entire file unless absolutely necessary.

---

# WORKFLOW

Always follow this workflow.

Analyze

↓

Plan

↓

Search

↓

Implement

↓

Verify

↓

Review

↓

Optimize

↓

Finish

Never skip a step.

---

# PROJECT ARCHITECTURE

Architecture must remain predictable.

Every folder should have one responsibility.

Every file should have one responsibility.

Every function should have one responsibility.

Avoid multi-purpose modules.

---

# DIRECTORY PRINCIPLES

Prefer organization over quantity.

Example:

src/

components/

layouts/

pages/

assets/

styles/

scripts/

images/

icons/

fonts/

data/

utils/

Never create duplicate folders.

Avoid names such as:

new/

temp/

backup/

final/

final2/

components_new/

---

# FILE NAMING

Use consistent names.

Examples

menu-card.js

category-filter.js

header.js

footer.js

Avoid

test.js

new.js

abc.js

temp.js

---

# COMPONENT PHILOSOPHY

Everything reusable should become a component.

Examples

Header

Footer

Navbar

Category Tabs

Menu Card

Search Bar

Badge

Button

Modal

Toast

Pagination

Components must remain independent.

Avoid tightly coupled code.

---

# DESIGN PRINCIPLES

Visual style should communicate:

Modern

Minimal

Premium

Warm

Comfortable

Elegant

Never over-design.

White space is part of the design.

---

# DESIGN SYSTEM

Use a consistent design language.

Spacing

4

8

12

16

24

32

48

64

Border Radius

8

12

16

24

Animation Duration

150ms

200ms

300ms

Shadow

small

medium

large

Never invent random values.

---

# COLOR MANAGEMENT

All colors must be managed centrally.

Use CSS Variables.

Never repeat hexadecimal values throughout the project.

Preferred tokens:

Primary

Secondary

Accent

Background

Surface

Border

Text

Muted

Success

Warning

Error

Info

---

# TYPOGRAPHY

Maintain hierarchy.

Heading

Subheading

Body

Caption

Button

Avoid inconsistent font sizes.

---

# LAYOUT RULES

Mobile First.

Desktop Second.

Use Flexbox where appropriate.

Use CSS Grid where appropriate.

Keep layouts predictable.

Avoid deeply nested containers.

Maximum content width should remain consistent.

---

# RESPONSIVE DESIGN

Support:

Mobile

Tablet

Desktop

No horizontal scrolling.

No broken layouts.

No overlapping elements.

Every breakpoint should remain usable.

---

# HTML STANDARDS

Use semantic HTML.

Prefer:

header

main

section

article

nav

footer

button

label

Avoid unnecessary div wrappers.

Accessibility starts with proper HTML.

---

# ACCESSIBILITY FOUNDATION

Every interactive element must be keyboard accessible.

Every image requires meaningful alt text.

Every form element requires a label.

Focus states must remain visible.

Color alone must never communicate information.

# =====================================================================
# CSS STANDARDS
# =====================================================================

Use CSS as a design system, not as isolated styles.

Every style should be reusable.

Never solve layout problems with arbitrary values.

---

## CSS Principles

MUST

- Use CSS Variables
- Keep selectors simple
- Reuse utility patterns
- Prefer Flexbox and Grid
- Maintain consistent spacing

MUST NOT

- Use !important
- Duplicate styles
- Use inline styles
- Hardcode repeated values
- Create deeply nested selectors

---

## Selector Depth

Recommended

.component

.component .title

.component:hover

Avoid

.page .container .wrapper .box .content .title

Maximum selector depth:

3

---

## CSS Variables

All reusable values belong inside :root.

Example categories

Colors

Spacing

Radius

Shadow

Transition

Container Width

Font Size

Z-index

Never duplicate these values.

---

## Responsive CSS

Avoid fixed widths whenever possible.

Prefer

max-width

min()

max()

clamp()

flex

grid

Responsive behavior should be automatic whenever possible.

---

## Animations

Animations should improve usability.

Avoid decorative animations.

Preferred duration

150ms

200ms

300ms

Never exceed 500ms unless required.

---

# =====================================================================
# JAVASCRIPT STANDARDS
# =====================================================================

Write JavaScript that is readable before it is clever.

Future developers should understand code without explanation.

---

## Language Standard

Use modern JavaScript.

Preferred

ES2022+

Use

const

before

let

Never use

var

---

## Function Rules

One function

One responsibility

Preferred function length

20~40 lines

Split large functions into smaller ones.

---

## Naming

Names should explain purpose.

Good

createMenuCard()

renderCategory()

loadMenuData()

filterMenu()

updateBadge()

Bad

run()

go()

temp()

test()

abc()

---

## Code Style

Prefer early return.

Reduce nesting.

Avoid unnecessary else statements.

Write explicit conditions.

Avoid magic numbers.

---

## Error Handling

Handle failures gracefully.

Never silently ignore errors.

Provide meaningful error messages.

Avoid empty catch blocks.

---

## Logging

Development

console.log()

Allowed

Production

Remove debugging logs.

Keep only intentional logging.

---

# =====================================================================
# DATA STRUCTURE
# =====================================================================

Application data should never be tightly coupled to UI.

UI must render from data.

Not vice versa.

---

## Menu Model

Each menu item should contain

id

name

category

description

price

image

recommended

new

soldOut

nutrition (optional)

tags (optional)

---

## Data Source

Prefer JSON.

Avoid hardcoded HTML.

UI should be generated dynamically.

---

## Category Model

Each category should contain

id

name

icon

displayOrder

visible

---

## Future Expansion

Data model should support

Season Menu

Limited Menu

Best Seller

Promotion

Discount

New Arrival

Without requiring major refactoring.

---

# =====================================================================
# COMPONENT CREATION RULES
# =====================================================================

Before creating a new component

Search existing components.

Reuse first.

Create second.

---

## Component Checklist

Ask

Can this be reused?

Can this become configurable?

Can this replace duplicated UI?

If YES

Create a reusable component.

---

## Component Responsibility

Each component owns one responsibility.

Avoid components doing multiple jobs.

---

## Component Communication

Pass only necessary data.

Avoid unnecessary dependencies.

Keep interfaces small.

---

## Component Naming

Use descriptive names.

Examples

MenuCard

MenuList

CategoryFilter

SearchInput

ShoppingCart

OrderButton

---

# =====================================================================
# STATE MANAGEMENT
# =====================================================================

State should remain predictable.

Avoid unnecessary global state.

---

## Local First

Prefer

Local State

before

Global State.

Global state exists only when shared.

---

## Single Source of Truth

One piece of data

One owner.

Avoid duplicated state.

---

## Derived Data

Never store data that can be calculated.

Compute when needed.

---

## State Update

State changes should be explicit.

Never mutate data unexpectedly.

Prefer immutable updates.

---

# =====================================================================
# API RULES
# =====================================================================

API communication should remain isolated.

UI should never contain business logic.

---

## Fetch Rules

Wrap API calls.

Avoid repeating fetch logic.

Create reusable service functions.

---

## Error Handling

Handle

Loading

Success

Failure

Timeout

Empty Data

Separately.

---

## Response Validation

Never trust external data.

Validate before rendering.

Use default values when appropriate.

---

## Retry Strategy

Retry only when appropriate.

Never create infinite retry loops.

---

# =====================================================================
# LIBRARY POLICY
# =====================================================================

Every dependency increases maintenance cost.

Install only when necessary.

---

## Before Installing

Always ask

Can native JavaScript solve this?

Can existing libraries solve this?

Is this dependency actively maintained?

Does this reduce complexity?

---

## Library Principles

Prefer

Small

Stable

Popular

Well documented

Avoid libraries that solve trivial problems.

---

## Dependency Hygiene

Remove unused packages.

Remove unused imports.

Keep bundle size small.

Review dependencies regularly.

---

# =====================================================================
# PART 1 END
# Continue with Performance, Security, Git, Debugging and Review Rules.
# =====================================================================

# =====================================================================
# PERFORMANCE RULES
# =====================================================================

Performance is a feature.

Every implementation should consider rendering cost.

---

## Performance Principles

MUST

- Minimize DOM operations
- Minimize layout recalculation
- Avoid unnecessary re-rendering
- Lazy load large assets
- Optimize images
- Keep JavaScript lightweight

SHOULD

- Prefer CSS over JavaScript animations
- Cache reusable calculations
- Debounce expensive events
- Throttle continuous events

MUST NOT

- Continuously query the DOM
- Create unnecessary timers
- Block the main thread
- Load large libraries for small tasks

---

## Image Rules

Prefer WebP or AVIF.

Always define image width and height.

Lazy load images outside the first viewport.

Optimize assets before adding them.

---

# =====================================================================
# ACCESSIBILITY
# =====================================================================

Accessibility is mandatory.

Never treat it as an optional enhancement.

---

## Keyboard Support

Every interactive element must be reachable.

Tab navigation must remain logical.

Focus should always be visible.

Escape key should close dialogs.

---

## Screen Readers

Use semantic HTML.

Provide meaningful labels.

Use aria-* only when necessary.

Avoid empty buttons.

---

## Forms

Every input requires

- label
- placeholder (optional)
- validation feedback

Never rely only on color.

---

# =====================================================================
# SEO
# =====================================================================

Every page should contain

Unique title

Meta description

Open Graph tags

Viewport

Language attribute

Favicon

Meaningful heading hierarchy

---

# =====================================================================
# SECURITY
# =====================================================================

Never trust user input.

Validate before using data.

Escape dynamic HTML.

Avoid innerHTML unless required.

Prefer textContent whenever possible.

Never expose secrets.

Never commit API keys.

---

## Sensitive Information

Do not store

Passwords

Tokens

Secrets

Private Keys

inside source code.

Use environment variables.

---

# =====================================================================
# FILE MODIFICATION POLICY
# =====================================================================

Modify only what is necessary.

Respect the existing architecture.

---

Before editing

Read the entire file.

Understand its responsibility.

Search related modules.

Avoid unrelated modifications.

---

Never rename files

without a valid architectural reason.

---

Never reorganize folders

only for personal preference.

---

# =====================================================================
# REFACTORING POLICY
# =====================================================================

Refactoring must improve clarity.

Never refactor only because code style differs.

If functionality is correct,

avoid unnecessary structural changes.

---

Allowed

Reduce duplication

Improve naming

Extract reusable logic

Improve readability

---

Not Allowed

Massive rewrites

Architecture replacement

Changing every file

Breaking existing APIs

---

# =====================================================================
# GIT WORKFLOW
# =====================================================================

Every change should be intentional.

Prefer small commits.

Each commit should represent one logical change.

---

## Commit Messages

Preferred style

feat:

fix:

refactor:

style:

docs:

perf:

test:

build:

chore:

---

Avoid

update

change

misc

final

test2

---

# =====================================================================
# DEBUGGING PROTOCOL
# =====================================================================

When a bug appears

DO NOT GUESS.

Follow this process.

1.

Reproduce

↓

2.

Identify

↓

3.

Isolate

↓

4.

Fix

↓

5.

Verify

↓

6.

Review

---

Never solve one bug by creating another.

---

If the root cause is unknown,

continue investigating.

Do not implement speculative fixes.

---

# =====================================================================
# TESTING MINDSET
# =====================================================================

Every feature should be mentally verified.

Check

Desktop

Tablet

Mobile

Hover

Focus

Disabled

Loading

Error

Empty State

Success State

---

# =====================================================================
# OUTPUT QUALITY
# =====================================================================

Generated code should be

Consistent

Readable

Predictable

Reusable

Minimal

Self-explanatory

Avoid clever code.

Prefer obvious code.

---

# =====================================================================
# CODE REVIEW CHECKLIST
# =====================================================================

Before finishing

Ask

Is this reusable?

Can this become simpler?

Can naming improve?

Is there duplicated logic?

Is accessibility preserved?

Is responsive behavior correct?

Does it introduce technical debt?

Can another developer understand it?

---

# =====================================================================
# DEFINITION OF DONE
# =====================================================================

A task is complete only if

✓ Feature works

✓ No console errors

✓ Responsive

✓ Accessible

✓ No duplicated code

✓ Naming is clear

✓ No unused imports

✓ No dead code

✓ No TODO left behind

✓ Existing features still work

✓ Performance unchanged or improved

---

# =====================================================================
# AI BEHAVIOR RULES
# =====================================================================

Always think before coding.

Always search before creating.

Always reuse before building.

Always understand before modifying.

Always explain before installing dependencies.

Always review before finishing.

Always optimize after correctness.

---

If multiple solutions exist,

choose the simplest maintainable solution.

---

Prefer improving existing components

over creating new ones.

---

Never generate large amounts of duplicated code.

---

Never replace an entire file

if only one section needs modification.

---

Never install dependencies

without a clear technical benefit.

---

Never sacrifice maintainability

for shorter implementation.

---

If requirements are unclear,

ask for clarification

instead of making assumptions.

---

# =====================================================================
# ABSOLUTE PROHIBITIONS
# =====================================================================

NEVER

Duplicate UI

Duplicate logic

Duplicate CSS

Hardcode repeated values

Leave unused code

Leave console.log()

Leave commented-out code

Use meaningless names

Use inline styles

Use inline scripts

Ignore accessibility

Ignore responsive behavior

Ignore existing architecture

Break existing functionality

Rewrite entire files unnecessarily

Install unnecessary libraries

Create temporary folders

Rename project structure without approval

---

# =====================================================================
# FINAL PRINCIPLE
# =====================================================================

Code should be easy to read.

Easy to modify.

Easy to extend.

Easy to test.

Easy to maintain.

Quality is always more important than speed.

The best code is not the shortest.

The best code is the one another developer immediately understands.

Every implementation should leave the project in a better state than before.

# =====================================================================
# END OF CLAUDE.md
# =====================================================================
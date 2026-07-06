---
name: Framer Motion Variants typing
description: How to type the `ease` field inside a Framer Motion Variants object without a TS2322 error.
---

When defining a `Variants` object (e.g. for `variants={containerVariants}` + `variants={itemVariants}` with staggerChildren), TypeScript's `Transition` type does not accept a bare string like `"easeOut"` for `ease` in this context — only `Easing | Easing[]`.

**Why:** Framer Motion's newer type defs narrowed `ease` on `Transition<any>` inside `Variant` objects, so string presets that work fine as inline `transition={{ ease: "easeOut" }}` props fail when placed inside a `Variants` map, producing a cascading TS2322 about `TargetAndTransition`.

**How to apply:** Use a cubic-bezier array instead, cast to a fixed-length tuple, e.g. `ease: [0.16, 1, 0.3, 1] as [number, number, number, number]`. This satisfies `Easing[]` and avoids the type error.

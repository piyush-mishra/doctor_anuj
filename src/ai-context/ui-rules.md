# UI Rules
Theme Requirements:
 
Use Tailwind Dark Mode.

All generated pages and components must support:
 
- Light Mode
- Dark Mode
- System Theme
 
All components must support:
 
light:
- bg-white
- text-gray-900
 
dark:
- bg-gray-950
- text-gray-100
 
Cards:
- bg-white dark:bg-gray-900
 
Borders:
- border-gray-200 dark:border-gray-800
 
Buttons:
- support both themes
 
Never hardcode colors.

## Component Extra*tion Rules
 
When a page exceeds 30* lines:
 
- Extract each major sect*on into a separate component.
- On* component per business section.
-*Components should be reusable.
- C*mponents should accept*props whenever possible.
 
Componen* Structure:
 
components/
├── layou*/
├── homepage/
├── doctor/
└── ui*
 
Homepage Components:
 
Hero.tsx
S*ats.tsx
Services.tsx
Testimonials.*sx
Faq.tsx
ContactCta.tsx
Footer.t*x

## Code Formatting Rules
 
- Generate readable code.
- Use 2-space indentation.
- Add section comments.
- Keep JSX properly aligned.
- One prop per line if line length exceeds 100 chars.
- Use meaningful variable names.
- Avoid deeply nested divs.
- Use semantic HTML where possible.
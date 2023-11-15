## Manual Installation

add new file : 'package.json' in root folder

content of package.json

```bash
    {
        "name": "next-reviews",
        "private": true
    }

```

install packages :

```bash
npm install next react react-dom
```

add new folder : 'app' in root folder

add new file : 'layout.jsx' in app folder

```bash
# layout.jsx

export default function RootLayout({ children}) {
    return (
        <html lang='en'>
            <body>
                {children}
            </body>
        </html>
    )
}
```

information for command :

```bash
npx next --help

# example:
npx next dev
```

add .gitignore in root folder :

```bash
/.next/
/node_modules
```

add 'page.jsx' in app folder

```bash
export default function HomePage() {
    return <div>HomePage</div>
}
```

### Install Tailwind

```bash
npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init
```

customize tailwind.config.js :

```bash
    content: [
        './app/**/*.{jsx}',
        './components/**/*.{jsx}',
    ]
```

add into globals.css :

```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```

add extension : **Tailwind CSS IntelliSense**

use import @lias : create file 'jsconfig.json' in root folder

```bash
{
	"compilerOptions": {
		"paths": {
			"@/*": ["./*"]
		}
	}
}
```

### Font optimization

reate a file 'font.js' in app folder

```bash
import {Orbitron} from 'next/font/google'

export const orbitron = Orbitron({
    subsets: ['latin'],
    weight: '400,
    varible: '--font-orbitron'
})
```

### Custom Tailwind Font

layout.jsx :

```bash
import { orbitron } from './fonts'

    <html lang='en' className={orbitron.variable}>...</html>
```

tailwind.config.js :

```bash
    theme: {
        extend: {
            fontFamily: {
                orbitron: ['var(--font-orbitron)', 'sans-serif']
            }
        }
    }
```

icon : put icon.png in 'app' folder

### Metadata

layout.jsx

```bash
export const metadata = {
    title: {
        default: 'Jago Gamer',
		template: '%s | Jago Gamer',
    },
}
```

[slug]/page.jsx

```bash
export async function generateMetadata({ params: { slug }}) {
    const review = await getReview(slug);
	return {
		title: review.title,
	};
}
```

heroicons

```bash
npm install @heroicons/react
```

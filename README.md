# IT Girl Blog

A modern, responsive lifestyle blog built with Astro and Netlify CMS. Perfect for curating Amazon picks and sharing beauty/lifestyle content.

## 🌟 Features

- Fast, static site generation with Astro
- Modern, responsive design with Tailwind CSS
- Easy content management with Netlify CMS
- Pinterest-optimized image handling
- Amazon affiliate link integration
- Newsletter signup form
- SEO optimized

## 🚀 Quick Start

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## 📝 Content Management

### Adding New Content

1. Visit `yoursite.com/admin`
2. Log in with your Netlify Identity credentials
3. Choose "Product Picks" or "Blog Posts"
4. Click "New Product Pick" or "New Blog Post"
5. Fill in the required fields
6. Click "Publish"

### Content Types

#### Product Picks
- Title
- Featured Image
- Pinterest Description
- Category
- Amazon Link
- Price
- Description
- Body content

#### Blog Posts
- Title
- Featured Image
- Pinterest Description
- Category
- Description
- Body content

## 🎨 Customization

### Colors
Edit `tailwind.config.mjs` to modify the color scheme:
- Blush pink
- Sage green
- Warm neutrals

### Typography
The site uses:
- Playfair Display (headings)
- Poppins (body)
- Libre Baskerville (accents)

## 📦 Deployment

1. Connect your repository to Netlify
2. Enable Netlify Identity
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

## 💰 Monetization

1. Sign up for Amazon Associates
2. Replace placeholder Amazon links with your affiliate links
3. Add your disclosure statement to posts
4. Track earnings through Amazon Associates dashboard

## 📈 Growth Tips

1. Optimize images for Pinterest
2. Use relevant hashtags in Pinterest descriptions
3. Maintain consistent posting schedule
4. Build email list with newsletter
5. Engage with readers in comments

## 📱 Social Media Integration

Connect your:
- Instagram
- Pinterest
- TikTok
- Email newsletter

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

```sh
npm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

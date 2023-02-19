# File Based Routing

This project provides file-based routing for react. Like in Next.js.

You need to provide a base page folder for routing such as "pages" folder.

## Dynamic Routing

You can create dynamic routes with '$' prefix syntax. For example `$id.tsx`.

## Folder Names

### Static Routes

If you need to create a static route for "about" you need to create => pages/about/index.tsx

### Dynamic Routes

If you need to create dynamic route for profile page for example you need to create => `pages/profile/$id.tsx`

However you still need to create `navlinks` manually.

## Optimized Image Component

This project also has optimized image functionality like in Next.js

step 2nd commit
in components DropDownMenu.tsx </br>
pnpm dlx shadcn@latest add form</br>
pnpm dlx shadcn@latest add input</br>

pnpm add next-themes</br>

go to embla website , select react, from get started
</br>
pnpm add embla-carousel-react </br>
pnpm add embla-carousel-autoplay
apply flex 0 ,0, 100% in tailwind.config.ts
pnpm add tailwind-scrollbar-hide
pnpm add tailwindcss-animate
pnpm add react-youtube










steps 1st commit</br>
1, npm install -g pnpm@latest-10</br>
2, pnpm version</br>
3 pnpm create next-app@(latest or whatever you want) nameofproject</br>
4 cd nameofproject</br>
5 pnpm dev (to run)</br>
6 pnpm dlx shadcn ui@latest</br>
7 pnpm dlx shadcn@latest add button</br>

8 pnpm add @radix/ui/react-slot</br>
9 pnpm dlx shadcn@latest add dropdown-menu</br>
we made components folder in which we created a new file called Header.js</br>
in layout put header in it</br>
in next.config.mjs we write</br>
const nextConfig = {
    images:{
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'image.tmdb.org',

            },
            {
                protocol: 'https',
                hostname: 'i.ibb.co'},

                
        ],
    }
};



This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

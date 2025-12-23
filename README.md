# dayjs-cache-components-repro

1. Run `pnpm run build`
2. The following error should appear:
```
> next build

▲ Next.js 16.1.1-canary.4 (Turbopack, Cache Components)

  Creating an optimized production build ...
✓ Compiled successfully in 992.8ms
✓ Finished TypeScript in 1059.6ms    
✓ Collecting page data using 7 workers in 375.7ms    
Error: Route "/" used `new Date()` before accessing either uncached data (e.g. `fetch()`) or Request data (e.g. `cookies()`, `headers()`, `connection()`, and `searchParams`). Accessing the current time in a Server Component requires reading one of these data sources first. Alternatively, consider moving this expression into a Client Component or Cache Component. See more info here: https://nextjs.org/docs/messages/next-prerender-current-time
    at d (app/page.tsx:8:15)
    at stringify (<anonymous>)
   6 | export default async function page() {
   7 |  const date = "2024-11-29T12:33:53+01:00";
>  8 |  return dayjs.tz(date, "Europe/Berlin").toString();
     |               ^
   9 | }
  10 |
To get a more detailed stack trace and pinpoint the issue, try one of the following:
  - Start the app in development mode by running `next dev`, then open "/" in your browser to investigate the error.
  - Rerun the production build with `next build --debug-prerender` to generate better stack traces.
Error occurred prerendering page "/". Read more: https://nextjs.org/docs/messages/prerender-error
Export encountered an error on /page: /, exiting the build.
⨯ Next.js build worker exited with code: 1 and signal: null
```
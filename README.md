# Skill-Swap
SkillSwap- A Full-stack skill-exchange platform (React, Express, PostgreSQL, Socket.io) — match with people to teach/learn skills via a barter system.

"SkillSwap" — A Local Skill-Bartering Platform
The hook: Instead of money, users trade skills (e.g., "I'll teach you guitar if you help me with Excel"). It's Tinder + LinkedIn + Craigslist, which is a fun elevator pitch.
Tech stack (touches almost everything):

Frontend: React (or Next.js for SSR bonus points) + Tailwind CSS
Backend: Node.js + Express (REST API)
Database: PostgreSQL (relational — good for showing you understand joins/foreign keys, unlike a Mongo todo-app clone everyone does)
Auth: JWT + bcrypt (or use Firebase Auth if you want to save time)
Real-time: Socket.io for in-app chat between matched users
Maps: Google Maps / Leaflet.js API to show nearby skill-swappers
File storage: Cloudinary/AWS S3 for profile pictures
Deployment: Frontend on Vercel, backend on Render/Railway, DB on Supabase/Neon

Core features to build (in order):

Auth + profile creation (skills you offer/want)
Browse/search/filter users by skill + location
"Match" request system (like a swipe or request-accept flow)
Real-time chat once matched
Rating/review system after a swap

Why it stands out: Barter platforms are rare among student projects, it naturally justifies auth, real-time chat, geolocation, and a relational DB — so one project = 5 talking points in an interview

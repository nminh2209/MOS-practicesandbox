# MOS Practice Sandbox - Deployment Guide

## Quick Deploy to Vercel

1. **Fork or clone this repository**

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect it as a React project

3. **Configure Environment Variables:**
   - In Vercel dashboard, go to Settings → Environment Variables
   - Add: `GEMINI_API_KEY` = your Gemini API key
   - Get a free API key at [Google AI Studio](https://makersuite.google.com/app/apikey)

4. **Deploy:**
   - Click "Deploy" - Vercel handles everything automatically!
   - Your app will be live at `your-project.vercel.app`

## Features Included

✅ **Bilingual Support** (English/Vietnamese)  
✅ **60+ Practice Questions** across all MOS applications  
✅ **AI Learning Assistant** powered by Gemini  
✅ **Responsive Design** works on all devices  
✅ **Serverless Backend** scales automatically  

## Local Development

```bash
npm install
npm run dev
```

Create `.env.local` for local AI testing:
```
GEMINI_API_KEY=your_api_key_here
```

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Main application pages
├── data/          # Question database
├── styles/        # CSS styling
└── context/       # React context for state

api/
└── chat.ts        # Vercel serverless function for AI
```

---

**Ready to deploy?** Just push to GitHub and connect to Vercel - it's that simple!

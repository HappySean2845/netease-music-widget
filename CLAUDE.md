# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A Vercel serverless function that generates SVG cards showing a user's NetEase Cloud Music (网易云音乐) listening history, designed to be embedded in GitHub profile READMEs via `<img>` tag.

## Commands

- **Type check:** `npm run build` (runs `tsc --noEmit`)
- **Local dev:** `npx vercel dev` (starts local Vercel dev server)
- **Deploy:** `npm run deploy` (deploys to Vercel production)

No test framework is configured.

## Architecture

This is a minimal 3-file project deployed as a single Vercel serverless function:

- `api/index.ts` — Vercel request handler. Parses query params (`id`, `type`, `count`, `show_rank`, `theme`), fetches data from NetEase API, and returns an SVG response with 5-minute CDN cache.
- `src/netease.ts` — NetEase Cloud Music API client. Calls `music.163.com/api` directly (no SDK). Exports `getUserRecord()` (play history), `getUserProfile()` (nickname), and `imageToBase64()` (album cover conversion for SVG embedding).
- `src/svg.ts` — SVG card renderer. Generates an inline SVG with album art (base64-embedded), song names, artists, play counts, and fade-in animations. Supports dark/light themes.

## Key Details

- The NetEase API uses `type=1` for weekly and `type=0` for all-time play records.
- Album cover images are fetched at 80x80 (`?param=80y80`) and base64-encoded inline into the SVG since external image references don't work in GitHub README `<img>` tags.
- All user-provided text in SVG output must go through `escapeXml()` in `src/svg.ts`.
- SVG card width is fixed at 460px; height is dynamic based on song count (`count * 72 + 80`).

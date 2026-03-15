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

- `api/index.ts` — Vercel serverless handler
- `src/netease.ts` — NetEase Cloud Music API client
- `src/svg.ts` — SVG card renderer with theme support

## Key Details

- All user-provided text in SVG output must go through `escapeXml()` in `src/svg.ts`.
- SVG card width is fixed at 460px; height is dynamic based on song count.

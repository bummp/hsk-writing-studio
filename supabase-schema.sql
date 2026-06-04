create extension if not exists pgcrypto;

create table if not exists public.writing_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  learner_id text not null default '匿名',
  learner_group text not null default '未分组',
  hsk_level text not null,
  topic text not null,
  chars integer not null default 0,
  sentences integer not null default 0,
  score integer not null default 0,
  dimension_scores jsonb not null default '[]'::jsonb,
  problem_tags text[] not null default array[]::text[],
  essay_text text not null,
  report text not null default '',
  user_agent text not null default ''
);

create index if not exists writing_submissions_created_at_idx
  on public.writing_submissions (created_at desc);

create index if not exists writing_submissions_hsk_level_idx
  on public.writing_submissions (hsk_level);

create index if not exists writing_submissions_score_idx
  on public.writing_submissions (score);

create index if not exists writing_submissions_problem_tags_idx
  on public.writing_submissions using gin (problem_tags);

alter table public.writing_submissions enable row level security;

-- The browser never talks to this table directly. Vercel API uses the
-- service_role key from environment variables, which bypasses RLS.
-- Keep anon/authenticated policies empty unless you later add real login.

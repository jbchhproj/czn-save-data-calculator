create table if not exists telemetry_events (
  id uuid primary key default gen_random_uuid(),
  event_name text not null,
  anonymous_user_id text not null,
  was_disabled boolean not null default false,
  created_at timestamptz not null default now(),
  client_created_at timestamptz,
  country text,
  region text,
  metadata jsonb not null default '{}'::jsonb
);

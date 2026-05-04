-- Recent telemetry events
select
  event_name,
  anonymous_user_id,
  was_disabled,
  metadata,
  created_at
from telemetry_events
order by created_at desc
limit 20;

-- Most-used features
select
  event_name,
  count(*) as event_count
from telemetry_events
group by event_name
order by event_count desc;

-- Disabled-click signals by feature
select
  event_name,
  count(*) as disabled_click_count
from telemetry_events
where was_disabled = true
group by event_name
order by disabled_click_count desc;

-- Daily anonymous usage
select
  date_trunc('day', created_at) as usage_day,
  count(distinct anonymous_user_id) as anonymous_users,
  count(*) as event_count
from telemetry_events
group by usage_day
order by usage_day desc;

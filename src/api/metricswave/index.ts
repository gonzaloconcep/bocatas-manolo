export function triggerEvent(eventUuid: string, params: Object = {}) {
  const NODE_ENV = 'production';
  const condition = false;
  if (condition) {
    console.log(`[EventTracker] ${eventUuid}`, params);
    return;
  }

  console.log(`[NODE_ENV] ${NODE_ENV} - [EventTracker] ${eventUuid}`, params);

  fetch(`https://metricswave.com/webhooks/${eventUuid}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(params),
  });

  return;
}

// Pantry Cloud API configuration
export const PANTRY_ID = '56a0d189-287b-481f-8fb0-2544dc2df01e';
export const PANTRY_BASKET = 'planner';
export const PANTRY_URL = `https://getpantry.cloud/apiv1/pantry/${PANTRY_ID}/basket/${PANTRY_BASKET}`;

export async function fetchPlanner() {
  try {
    const res = await fetch(PANTRY_URL);
    if (!res.ok) throw new Error(`Pantry API error: ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error('Failed to fetch planner:', err);
    return null;
  }
}

export async function savePlanner(data) {
  try {
    const res = await fetch(PANTRY_URL, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error(`Pantry API error: ${res.status}`);
    return true;
  } catch (err) {
    console.error('Failed to save planner:', err);
    return false;
  }
}

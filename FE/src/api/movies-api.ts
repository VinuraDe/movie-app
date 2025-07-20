import { BASE_URL } from "../constants";
import type { SavedShow, ShowResult } from "../utils/interfaces";

async function checkResponse(response: Response, errorMessage: string) {
  if (!response.ok) {
    throw new Error(errorMessage);
  }
  return response;
}

export async function fetchSavedShows(): Promise<SavedShow[]> {
  const response = await fetch(`${BASE_URL}/get_saved_shows.php`);
  await checkResponse(response, "Failed to fetch saved shows");
  return response.json();
}

export async function deleteShow(name: string): Promise<void> {
  const response = await fetch(`${BASE_URL}/save_show.php`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  });
  await checkResponse(response, "Failed to delete show");
}

export async function searchShows(query: string): Promise<ShowResult[]> {
  const response = await fetch(
    `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`
  );
  await checkResponse(response, "Failed to fetch shows");
  return response.json();
}

export async function saveShow(show: SavedShow): Promise<void> {
  const response = await fetch(`${BASE_URL}/save_show.php`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(show),
  });
  await checkResponse(response, "Failed to save show");
}

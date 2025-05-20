import { AppConfig } from "../config/config";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export async function DownloadItem(item,id) {
  try {
    const response = await fetch(
      `${AppConfig.api.baseUrl}/${item}/${id}/`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function DownloadGroupItem(item) {
  try {
    const response = await fetch(
      `https://www.swapi.tech/api/${item}/`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
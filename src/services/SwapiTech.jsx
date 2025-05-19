export async function DownloadItem(item,id) {
  try {
    const response = await fetch(
      `https://www.swapi.tech/api/${item}/${id}/`
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
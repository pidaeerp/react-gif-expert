export const getGifts = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=Os1uZICLI7hQDlwGexrLbwkqpqhZhGe6&q=${category}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  //console.log(data);
  const gif = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  //console.log(gif);
  return gif;
};

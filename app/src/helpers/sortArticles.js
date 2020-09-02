export default function sortArticles(articles) {
  let unsorted = [...articles];
  // Keep the index as identifier
  unsorted.map((article) => {
    article.localID = new Date(article.createdAt).getTime();
  });
  // Next sort based on date
  unsorted.sort((a, b) => {
    return new Date(b.publishDate) - new Date(a.publishDate);
  });
  let sorted = {};
  unsorted.map((article) => {
    const { localID } = article;
    const uriTitle = encodeURIComponent(article.title.replace(/\s+/g, '-'));
    const path = `${localID}/${uriTitle}`
    sorted[localID] = { ...article, uri: path };
  });

  return sorted;
}



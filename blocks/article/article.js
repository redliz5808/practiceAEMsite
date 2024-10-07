export default function decorate(block) {
  const article = [...block.firstElementChild.children];
  block.classList.add(`custom-article`);

  // setup image columns
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
        col.classList.add(`article-container`)
      const pic = col.querySelector("picture");
      if (pic) {
        const picWrapper = pic.closest("div");
        if (picWrapper && picWrapper.children.length === 1) {
          // picture is only content in article
          picWrapper.classList.add("article-img");
        }
      }
    });
  });
}
const scrollToId = (id, isSmooth) => {
  let aux;
  if (isSmooth) {
    aux = { behavior: "smooth" };
  }
  const elementToScroll = document.getElementById(id);
  elementToScroll.scrollIntoView({ aux });
};
export default scrollToId;

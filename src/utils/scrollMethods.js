const scrollToId = id => {
  const elementToScroll = document.getElementById(id);
  elementToScroll.scrollIntoView({ behavior: "smooth" });
};
export default scrollToId;

const ellipsis = {
  mounted(el, binding) {
    el.style.textOverflow = "ellipsis";
    el.style.overflow = "hidden";
    console.log(binding);
    let arg = binding.arg || 1;
    if (arg > 1) {
      el.style.display = "-webkit-box";
      el.style.webkitLineClamp = arg;
      el.style.webkitBoxOrient = "vertical";
    } else {
      el.style.whiteSpace = "nowrap";
    }
  },
};

export default ellipsis;

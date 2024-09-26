const drag = {
  mounted(el, binding) {
    el.style.position = "absolute";
    const data = binding.value || { x: 0, y: 0, zIndex: 99999 };
    let { x, y, zIndex = 99999 } = data;
    el.style.left = x + "px";
    el.style.top = y + "px";
    el.style.zIndex = zIndex;
    let isDragging = false;
    let baseMousePosition = { x: 0, y: 0 };
    let dom = data.targetRef || document.getElementById(data.targetId) || el;
    dom.style.cursor = "move";
    const onDragStart = (e) => {
      if (e.button === 0) {
        isDragging = true;
        baseMousePosition.x = e.pageX;
        baseMousePosition.y = e.pageY;
        window.addEventListener("mousemove", onDraging);
      }
    };
    const onDragEnd = (e) => {
      isDragging = false;
      x = parseInt(el.style.left);
      y = parseInt(el.style.top);
      window.removeEventListener("mousemove", onDraging);
    };
    const onDraging = (e) => {
      if (isDragging) {
        el.style.left = e.pageX - baseMousePosition.x + x + "px";
        el.style.top = e.pageY - baseMousePosition.y + y + "px";
      }
    };
    dom.addEventListener("mousedown", onDragStart);
    window.addEventListener("mouseup", onDragEnd);
  },
};

export default drag;

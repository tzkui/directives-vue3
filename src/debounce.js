const debounce = {
  mounted(el, binding) {
    let timer;
    const arg = binding.arg || 500;
    el.addEventListener('click', () => {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        binding.value()
      }, arg)
    })
  }
}

export default debounce
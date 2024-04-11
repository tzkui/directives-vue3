const throttle = {
  mounted(el, binding) {
    const arg = binding.arg || 500;
    let flag = true;
    el.addEventListener("click", () => {
      if(flag){
        flag = false;
        binding.value();
        setTimeout(()=>{
          flag = true;
        },arg)
      }
    });
  },
};

export default throttle;

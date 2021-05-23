function throttle (func, wait) {
  let timeout, context, args;

  return function() {
      context = this;
      args = arguments;
      if (!timeout) {
          timeout = setTimeout(function(){
              timeout = null;
              func.apply(context, args)
          }, wait)
      }
  }
}

export default throttle
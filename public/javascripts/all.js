Function.prototype.bind||(Function.prototype.bind=function(e){if(typeof this!="function")throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var t=Array.prototype.slice.call(arguments,1),n=this,r=function(){},i=function(){return n.apply(this instanceof r&&e?this:e,t.concat(Array.prototype.slice.call(arguments)))};return r.prototype=this.prototype,i.prototype=new r,i}),function(){function e(e,t){this.i=0,this.interval=40,this.element=e,this.text=this.element.innerHTML,t.addEventListener("mouseover",this.addLetter.bind(this)),t.addEventListener("mouseout",this.removeLetter.bind(this)),this.timer=setTimeout(function(){this.i=this.text.length,this.removeLetter()}.bind(this),1e3)}e.prototype.setText=function(e){return this.element.innerHTML=this.text.substr(0,e||this.i)},e.prototype.addLetter=function(){clearTimeout(this.timer);if(this.i>=this.text.length)return;this.timer=setTimeout(function(){this.i++,this.setText(),this.addLetter()}.bind(this),this.interval)},e.prototype.removeLetter=function(){clearTimeout(this.timer);if(this.i<=0)return;this.timer=setTimeout(function(){this.i--,this.setText(),this.removeLetter()}.bind(this),this.interval)},window.ExpandText=e}(),function(){var e=document.getElementById("fel"),t=["front","end","london"],n=t.length;while(n--)new ExpandText(document.getElementById(t[n]),e)}();
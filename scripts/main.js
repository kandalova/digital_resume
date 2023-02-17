import { CollapsedBlock } from "../components/CollapsedBlock/CollapsedBlock.js";

// const blockSwitches = document.getElementsByClassName("block-switch--header");

// for (let i = 0; i < blockSwitches.length; i++){
// 	blockSwitches[i].addEventListener("click", function(){
// 		this.classList.toggle("active");
// 		const body = this.nextElementSibling;
//     if (body.style.maxHeight){
//       body.style.maxHeight = null;
//     } else {
//       body.style.maxHeight = body.scrollHeight + "px";
//     }
// 	})
// }

// $(function () {
//   var includes = $('[data-include]')
//   $.each(includes, function () {
//     var file = 'pages/' + $(this).data('include') + '.html'
//     $(this).load(file)
//   })
// })

customElements.define("collapsed-block", CollapsedBlock);

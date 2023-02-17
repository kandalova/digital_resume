// import { CollapsedBlock } from "../components/CollapsedBlock/CollapsedBlock.js";

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


class CollapsedBlock extends HTMLElement {
	connectedCallback(){
		const template = document.querySelector('#collapsed-block-id');

		// Create a shadow DOM for the web component
		const shadow = this.attachShadow({ mode: 'open' });

		// Clone the template content and append it to the shadow DOM
		const instance = template.content.cloneNode(true);
		shadow.appendChild(instance);

		const header = this.shadowRoot.querySelector('.block-switch--header');
	
		header.onclick = () => {
			header.classList.toggle('active');
			const body = this.shadowRoot.querySelector('.block-switch--body');
			if (body.style.maxHeight){
				body.style.maxHeight = null;
			} else {
				body.style.maxHeight = body.scrollHeight + "px";
			}
		};
	}
}

customElements.define("collapsed-block", CollapsedBlock);
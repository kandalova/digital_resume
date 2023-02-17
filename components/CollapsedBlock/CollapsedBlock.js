export class CollapsedBlock extends HTMLElement {
	connectedCallback(){
		$.get('/components/CollapsedBlock/CollapsedBlockTemplate.html', function(html) {
			// Convert the HTML string to a DOM object
			const parser = new DOMParser();
			const doc = parser.parseFromString(html, 'text/html');

			// Get the template element
			const template = doc.querySelector('#collapsed-block-id');

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
		}.bind(this));
}
}

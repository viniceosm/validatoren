var demo = new Vue({
	el: '#app',
	data: {
		text: '',
		resultado: '',
		verbBe: 'am,are,is,is,is,are,are'.split(','),
		suject: 'I,you,she,he,it,you,they'.split(',')
	},
	methods: {
		validate() {
			if (this.text.trim() !== '') {
				let verbBeFound = this.verbBe.find(vb => this.text.includes(vb));
				let sujectFound = this.suject.find(sj => this.text.includes(sj));

				let indexverbBe = this.text.indexOf(verbBeFound);
				let indexSuject = this.text.indexOf(sujectFound);

				if (indexverbBe < indexSuject) {
					this.resultado = "It's probably a question.";

					if (this.text.charAt(this.text.length -1) !== '?') {
						this.resultado += ' Missing the mark question!';
					}
				} else {
					this.resultado = "Probably it isn't a question.";
				}
			} else {
				this.resultado = 'Type something.';
			}
		}
	}
});
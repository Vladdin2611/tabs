const tabs = document.querySelectorAll('.button');
const content = document.querySelectorAll('.content');
/*------бежим по всем табам, получаем к ним доступ--------*/
for (let i = 0; i < tabs.length; i++) {
	const tab = tabs[i];
	tab.addEventListener('click', onBtnClick)

	function onBtnClick() {
		for (let i = 0; i < tabs.length; i++) {
			const removeActive = tabs[i];
			removeActive.classList.remove('active')
		}
		for (let i = 0; i < content.length; i++) {
			const removeActiveContent = content[i];
			removeActiveContent.classList.remove('active')
			console.log('asd');
		}
		/*-получаем дата атрибут в переменную, создаем еще одну--*/
		let tabId = tab.getAttribute("data-tab");
		let currentContent = document.querySelector(tabId);
		/*---добавляем актив----*/
		tab.classList.add('active')
		currentContent.classList.add('active')
	}
}
// если нужен клик заранее
// document.querySelector('.button:nth-child(1)').click();
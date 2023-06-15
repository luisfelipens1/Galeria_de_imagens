const filterItem = document.querySelector(".category-items")
const filterImg = document.querySelectorAll(".gallery-img")

window.onload = ()=>{
	filterItem.onclick = (selectedItem)=>{
		if(selectedItem.target.classList.contains("item")){ 
			filterItem.querySelector(".active").classList.remove("active") 
			selectedItem.target.classList.add("active")

			let filterName = selectedItem.target.getAttribute("data-name") //Obtendo o valor do data-name do item selecionado e armazenando em uma variável

			filterImg.forEach((image)=>{
				let filterImages = image.getAttribute("data-name") // Obtendo o valor data-name da imagem

				// Se o valor do data-name do item for igual ao data-name da imagem
				// ou o data-name dos items for igual a 'all'
				if((filterImages == filterName) || filterName == "todas"){
					image.classList.remove("show")
					image.classList.add("show")
				}else{
					image.classList.add("hide")
					image.classList.remove("show")
				}
			})
		} 
	}
	for(let index = 0; index < filterImg.length; index++){
		filterImg[index].setAttribute("onclick", "preview(this)") 
	}

} 

const previewBox = document.querySelector(".preview-box"),
previewImg = previewBox.querySelector("img"),
categoryName = previewBox.querySelector(".title p"),
closeIcon = previewBox.querySelector(".icon"),
shadow = document.querySelector(".shadow")


// função de imagem de visualização em tela cheia

function preview(element){
	let selectedPreviewImg = element.querySelector("img").src // obter o link de origem da imagem clicado pelo usuário e armazená-lo em uma variável
	let selectedImgCategory = element.getAttribute("data-name") // passando a origem da imagem clicada pelo usuário na origem da imagem de visualização

	categoryName.textContent = selectedImgCategory
	previewImg.src = selectedPreviewImg // passando a origem da imagem clicada pelo usuário na origem da imagem de visualização

	previewBox.classList.add("show")
	shadow.classList.add("show")
	closeIcon.onclick = ()=>{ // Se o usuário clicar no ícone de fechar
		previewBox.classList.remove("show") // ocultar a caixa de visualização
		shadow.classList.remove("show")
	}
}






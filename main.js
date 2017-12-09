// Requisitando JSON
var request = new XMLHttpRequest();
request.open("GET", "potions.json", true);

// Função popular HTML com JSON
request.onload = function () {
    if (request.status >= 200 && request.status < 400){
        var data = JSON.parse(request.responseText),
            products = document.getElementById("products");

        for (i in data.potions) {
            
            // Criando elementos
            var a = document.createElement('a'),
                potions = document.querySelector('.potions')
                div = document.createElement('div'),
                figure = document.createElement('figure'),
                img = document.createElement('img'),
                figCaption = document.createElement('figcaption');

            // Adicionando classes
            a.className = "lightbox";
            div.className = "potion";
            
            // Append
            potions.appendChild(div);
            div.appendChild(a);
            a.appendChild(figure);
            figure.appendChild(img);
            a.appendChild(figCaption);
            potions.appendChild(div);

            // Conteúdo
            a.href = '#potion'+i;
            img.src = `assets/products/${data.potions[i].image}`;
            figCaption.innerHTML = `${data.potions[i].name}  - <span>$ ${data.potions[i].price}</span>`;

            // Elementos LightBox
            var lightDiv = document.createElement('div'),
                lightContent = document.createElement('div'),
                lightLeft = document.createElement('div'),
                lightImg = document.createElement('img'),
                lightRight = document.createElement('div'),
                lightName = document.createElement('h2'),
                lightEffect = document.createElement('h3'),
                lightText = document.createElement('p'),
                lightIngredients = document.createElement('h3'),
                lightPrice = document.createElement('h3'),
                lightList = document.createElement('ul'),
                lightItems = document.createElement('li'),
                lightSpan = document.createElement('span'),
                lightButton = document.createElement('a'),
                lightClose = document.createElement('a');

            // Adicionando classes
            lightDiv.className = "lightbox-target";
            lightContent.className = "content";
            lightLeft.className = "left";
            lightRight.className = "right";
            lightClose.className = "lightbox-close";
            lightClose.href = "#";
            lightButton.href = "#";

            // Conteúdo
            lightDiv.id = 'potion'+i;
            lightImg.src = `assets/products/${data.potions[i].image}`;
            lightName.innerText = data.potions[i].name;
            lightEffect.innerText = 'Use/Effect';
            lightText.innerText = data.potions[i].effect;
            lightIngredients.innerText = 'Ingredients:';
            lightItems.innerText = data.potions[i].ingredients;
            lightPrice.innerText = 'Price';
            lightSpan.innerText = data.potions[i].price;
            lightButton.innerText = 'add to cart';

            // Append
            potions.appendChild(lightDiv);
            lightDiv.appendChild(lightClose,lightContent);
            lightContent.appendChild(lightLeft,lightClose);
            lightLeft.appendChild(lightImg);
            lightContent.appendChild(lightRight);
            lightRight.appendChild(lightName,lightEffect,lightText,lightIngredients,lightList,lightItems,lightPrice,lightSpan,lightButton);
            lightList.appendChild(lightItems);

        }
    } else {
        console.log('Erro')
    }
}

request.send();
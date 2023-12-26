let openShopping = document.querySelector('.shopping');
        let closeShopping = document.querySelector('.closeShopping');
        let list = document.querySelector('.list');
        let listCard = document.querySelector('.listCard');
        let body = document.querySelector('body');
        let total = document.querySelector('.total');
        let quantity = document.querySelector('.quantity');

        openShopping.addEventListener('click', () => {
            body.classList.add('active');
        });

        closeShopping.addEventListener('click', () => {
            body.classList.remove('active');
        });

        let products = [
            {
                id: 1,
                name: 'ПОНЧИК С ШОКОЛАДОМ',
                image: '1.png',
                prices: 100,
                description: 'Пончик Шоколадный — это чарующее объединение воздушного теста и насыщенного шоколадного вкуса. Каждый укус принесет вам нежность текстуры пончика, смешанную с ароматом шоколада, создавая настоящий кулинарный праздник. Погрузитесь в мир шоколадного восторга с этим бесподобным пончиком, который станет настоящим удовольствием для ваших вкусовых рецепторов. Насладитесь каждым моментом сладкого блаженства! 🍩🍫✨',
            },
            {
                id: 2,
                name: 'ПОНЧИК С МАЛИНОЙ',
                image: '2.png',
                prices: 100,
                description: 'Пончик с малиной — это настоящее волшебство в каждом укусе. Нежное тесто пончика, обсыпанное свежими ягодами малины, создает идеальное сочетание сладости и кислинки. Каждый укус наполняется сочным вкусом спелых малиновых ягод, оставляя приятное послевкусие. Откройте для себя мир ярких вкусов и насладитесь неповторимым пончиком с малиной, который придаст вашему дню особенную сладкую ноту. 🍩🍓✨',
            },
            {
                id: 3,
                name: 'ПОНЧИК БАБЛ ГАМ',
                image: '3.png',
                prices: 100,
                description: 'Пончик Бабл Гам — это волшебное сочетание пушистого теста, наполненного невероятным вкусом жевательной резинки. Этот пончик удивит вас нежной текстурой, а его внутренний мир приправлен веселыми нотками жевательной радости. Погрузитесь в игривый вкус и радужные эмоции с этим уникальным десертом. Попробуйте Пончик Бабл Гам и дайте своему вкусовому опыту взлететь на новые высоты! 🍩🌈✨ ',
            },
            {
                id: 4,
                name: 'ПОНЧИК ЯГОДЫ С МАРШМЭЛЛО',
                image: '4.png',
                prices: 100,
                description: 'Пончик Ягоды с Маршмеллоу - это сказочное угощение, где в каждом пончике сочетаются аромат свежих ягод и нежность маршмеллоу. Мягкое и влажное тесто, пропитанное вкусом ягод, сочетается с легкостью маршмеллоу, создавая настоящий взрыв вкусов. Погрузитесь в сладкий рай с этим волшебным пончиком, который станет настоящим угощением для вашего вкуса. Попробуйте и дайте волшебству вкуса войти в ваш день! 🍩🍓✨',
            },
            {
                id: 5,
                name: 'ПЕЧЕНЬЕ АРАХИСОВАЯ ПАСТА',
                image: '5.png',
                prices: 100,
                description: 'Арахисовая паста печенье - это великолепное сочетание богатого арахисового вкуса и нежного теста. Каждый укус принесет вам удовольствие, раскрывая гармонию арахисовой пасты внутри хрустящего печенья. Погрузитесь в мир насыщенных ароматов и наслаждения с этим чудесным десертом, который точно покорит сердца любителей арахиса и сладких радостей. Попробуйте наше печенье "Арахисовая паста" для настоящего вкусового удовольствия! 🍪🥜✨',
            },
            {
                id: 6,
                name: 'ПЕЧЕНЬЕ МАККИАСТО',
                image: '6.png',
                prices: 100,
                description: 'Печенье Маккиасто — это изысканное сочетание нежного теста и отборных макадамийских орехов. Каждый укус наполнен богатством вкуса, создавая неповторимый опыт для ценителей гастрономических наслаждений. Откройте для себя чарующий мир деликатесов с этим великолепным печеньем Маккиасто, в котором каждый кусочек — настоящий шедевр вкуса. 🍪🌰✨',
            },
            {
                id: 7,
                name: 'ПЕЧЕНЬЕ С ШОКОЛАДОМ',
                image: '7.png',
                prices: 100,
                description: 'Нежное печенье с шоколадом — настоящее волшебство в каждом кусочке! Ощутите таинственное сочетание нежного теста и роскошного шоколада, которое растапливает ваши вкусовые рецепторы. Погрузитесь в мир наслаждения и дарите себе момент сладкого удовольствия. Уникальное печенье, созданное с любовью к деталям, чтобы придать вашим вечерам неповторимый вкус шоколадного волшебства. Попробуйте и убедитесь сами! 🍪🍫✨',
            },
            {
                id: 8,
                name: 'ПЕЧЕНЬЕ ДВОЙНОЙ ШОКОЛАД',
                image: '8.png',
                prices: 100,
                description: 'Наши Двойной шоколад печенья — это настоящее праздничное удовольствие для любителей шоколада! Густое, нежное тесто, насыщенное двумя видами шоколада, растапливается во рту, создавая неповторимый вкусовой эксплозив. Откройте для себя момент наслаждения, где сочетание мягкости и насыщенности шоколада принесет вам настоящее удовольствие. Идеально для любого времени дня - наше печенье Двойной шоколад станет настоящим угощением для вашего вкуса. Попробуйте прямо сейчас и окунитесь в мир шоколадного блаженства! 🍪🍫🍫✨',
            },
            {
                id: 9,
                name: 'ПЕЧЕНЬЕ С КЛУБНИКОЙ',
                image: '9.png',
                prices: 100,
                description: 'Нежное печенье с клубникой — в каждом кусочке вас ждет настоящий вкус лета! Изысканное тесто, пропитанное ароматом сочной клубники, создает неповторимый вкусовой опыт. Почувствуйте свежесть и сладость ягод в каждом угощении. Печенье с клубникой — это наше предложение для тех, кто ценит природную сладость и наслаждение каждым кусочком. Откройте дверь в мир летнего вкуса с нашим чарующим печеньем с клубникой! 🍪🍓✨',
            },
            {
                id: 10,
                name: 'ПЕЧЕНЬЕ ШОКОЛАД С БАНАНОМ',
                image: '10.png',
                prices: 100,
                description: 'Нежное печенье Шоколад с бананом — это сладкое сочетание элегантного шоколада и сочного банана. Исключительно мягкое тесто, пропитанное ароматом спелых бананов и усыпанное шоколадными нотками, создает неповторимый вкусовой коктейль. Погрузитесь в исключительный мир сладких наслаждений с каждым восхитительным укусом. Наслаждайтесь шоколадно-банановым восторгом в каждой дольке печенья. Откройте для себя волшебство вкуса с нашим печеньем Шоколад с бананом! 🍪🍌🍫✨',
            },
            {
                id: 11,
                name: 'ПЕЧЕНЬЕ СОЛЁНАЯ КАРАМЕЛЬ',
                image: '11.png',
                prices: 100,
                description: 'Неповторимое печенье Солёная карамель — это встреча сладкого и солёного в идеальном балансе! Наслаждайтесь ломкими кусочками, в которых сочная сладость карамели переплетается с нежной солью. Этот уникальный вкусовой опыт подарит вам ощущение гармонии, раскрывая тайны сладких и солёных ноток в каждой детали. Дайте себе возможность насладиться утончённым вкусом с печеньем Солёная карамель — идеальным десертом для ценителей необычных вкусовых сочетаний! 🍪🍬✨',
            },
			{
                id: 12,
                name: 'ПЕЧЕНЬЕ ФУНДУК С ШОКОЛАДОМ',
                image: '12.png',
                prices: 100,
                description: 'Наши Фундук с шоколадом печенья — это вдохновляющее сочетание хрустящих фундука и нежного шоколада! Изысканное тесто, насыщенное ароматом фундука, дополнено шоколадными каплями, создавая в каждом кусочке настоящий вкусовой праздник. Откройте для себя удивительный мир текстур и вкусов с нашим фантастическим печеньем Фундук с шоколадом. Дайте себе мгновение наслаждения и насладитесь великолепием вкуса в каждой дольке! 🍪🌰🍫✨',
            },
        ];

        let listCards = {};

        // Добавьте следующий код после вашего существующего кода создания продуктов
        products.forEach((product) => {
            let newDiv = document.createElement('div');
            newDiv.classList.add('item');
            newDiv.innerHTML = `
                <img src="image/${product.image}" data-description="${product.description}" class="picture">
                <div class="title">${product.name}</div>
                <div class="price" id="price_${product.id}">${getFormattedPrice(product.prices)}</div>
                <button onclick="addToCard(${product.id})">Добавить в корзину</button>`;
            list.appendChild(newDiv);
        });

        // Добавьте следующий код после вашего существующего кода
        document.addEventListener('DOMContentLoaded', function () {
            // Получите все элементы с классом 'item'
            let items = document.querySelectorAll('.item');

            // Добавьте обработчик события для каждого элемента
            items.forEach(function (item) {
                let img = item.querySelector('img');

                // Добавьте обработчик события для клика на изображение
                img.addEventListener('click', function () {
                    // Получите описание товара из атрибута 'data-description'
                    let description = img.getAttribute('data-description');

                    // Покажите всплывающее окно с описанием
                    alert(description);
                });
            });
        });

        function initApp() {
            products.forEach((value, key) => {
                let newDiv = document.createElement('div');
                newDiv.classList.add('item');
                newDiv.innerHTML = `
                    <img src="image/${value.image}">
                    <div class="title">${value.name}</div>
                    <div class="price" id="price_${key}">${getFormattedPrice(value.prices)}</div>
                    <button onclick="addToCard(${key + 1})">Добавить в корзину</button>`;
                list.appendChild(newDiv);
            });
        }

        // Новая функция для форматирования цены
        function getFormattedPrice(price) {
            return price + 'р';
        }

        function addToCard(key) {
            const productKey = `${key}`;

            // Проверка, есть ли у товара действительная цена
            if (products[key - 1].prices !== 'такого объёма нет') {
                if (!listCards[productKey]) {
                    // Товара еще нет в корзине, добавляем новый
                    listCards[productKey] = {
                        ...products[key - 1],
                        quantity: 1,
                        price: products[key - 1].prices
                    };
                } else {
                    // Товар уже в корзине, увеличиваем количество и обновляем цену
                    listCards[productKey].quantity++;
                    listCards[productKey].price = products[key - 1].prices * listCards[productKey].quantity;
                }

                reloadCard();
            } else {
                alert('Такого объёма нет. Выберите другой объем.');
            }
        }

        function reloadCard() {
            listCard.innerHTML = '';
            let totalPrice = 0;
            let count = 0;

            Object.keys(listCards).forEach((productKey) => {
                const value = listCards[productKey];

                if (value != null) {
                    let newDiv = document.createElement('li');
                    newDiv.innerHTML = `
                        <div><img src="image/${value.image}" class="picture"/></div>
                        <div>${value.name}</div>
                        <div>${value.price.toLocaleString()}р</div>
                        <div>
                            <button onclick="changeQuantity('${productKey}', 'decrement')">-</button>
                            <div class="count" id="count_${productKey}">${value.quantity}</div>
                            <button onclick="changeQuantity('${productKey}', 'increment')">+</button>
                        </div>`;
                    listCard.appendChild(newDiv);

                    totalPrice += value.price;
                    count += value.quantity;
                }
            });

            total.innerText = `${totalPrice.toLocaleString()}р`;
            quantity.innerText = count;
        }

        function changeQuantity(productKey, action) {
            let currentQuantity = listCards[productKey].quantity;

            if (action === 'decrement') {
                if (currentQuantity > 1) {
                    currentQuantity--;
                } else {
                    // Если количество равно 1 и происходит уменьшение, удаляем товар из корзины
                    delete listCards[productKey];
                }
            } else if (action === 'increment') {
                currentQuantity++;
            }

            if (listCards[productKey]) {
                listCards[productKey].quantity = currentQuantity;
                listCards[productKey].price = listCards[productKey].prices * currentQuantity;
            }

            reloadCard();
        }

        // JavaScript для управления всплывающей формой

        const overlay = document.getElementById('overlay');
        const form = document.getElementById('form');
        const totalDiv = document.querySelector('.total');

        // Показать форму при клике на totalDiv
        totalDiv.addEventListener('click', () => {
            overlay.style.display = 'block';
            form.style.display = 'block';
            setTimeout(() => {
                form.style.opacity = '1';
                form.style.pointerEvents = 'auto';
            }, 50);
        });

        // Скрыть форму при клике вне её области
        overlay.addEventListener('click', () => {
            form.style.opacity = '0';
            form.style.pointerEvents = 'none';
            setTimeout(() => {
                overlay.style.display = 'none';
                form.style.display = 'none';
            }, 300);
        });

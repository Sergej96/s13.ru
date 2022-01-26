const jsonNewsLeft = `[
    {"id": 1,
    "title": "Как живут на улице Пучкова в Гродно рядом с железной дорогой",
    "linkNews": "#!",
    "countView": 1712,
    "img": "./src/1643019030.jpg",
    "imgAlt": "Оттепель и мокрый снег — погода в Гродно на неделю",
    "text": "Журналисты «Вечернего гродно» прошли вдоль железнодорожных путей и узнали, каково жить людям под грохот и гудки составов и какие ещё проблемы их волнуют."
    },
    {"id": 2,
    "title": "В очереди на границе у пункта пропуска «Привалка» задержали пьяного водителя фуры: За руль он не сядет в ближайшие 5 лет",
    "linkNews": "#!",
    "countView": 1447,
    "img": "./src/1643018528.jpg",
    "imgAlt": "Оттепель и мокрый снег — погода в Гродно на неделю",
    "text": "В протоколе опроса водитель указал, что в течение дня употребил 0.5 литра водки в кабине фуры."
    },
    {"id": 3,
    "title": "Власти придумали, как сдержать цены: Будут регулировать ценообразование на импортные овощи и фрукты и отечественные сыры",
    "linkNews": "#!",
    "countView": 890,
    "img": "./src/1643017614.jpg",
    "imgAlt": "Оттепель и мокрый снег — погода в Гродно на неделю",
    "text": "Чиновники будут сдерживать цены на некоторые импортные овощи и фрукты, а также на отдельные отечественные сыры. Об этом сообщает пресс-служба МАРТ."
    },
    {"id": 4,
    "title": "В Triniti можно будет попасть на бесплатные медицинские консультации",
    "linkNews": "#!",
    "countView": 1342,
    "img": "./src/1643014585.jpg",
    "imgAlt": "Оттепель и мокрый снег — погода в Гродно на неделю",
    "text": "Прием проведут специалисты «Городской поликлинике №7 Гродно» и отдела общественного здоровья Гродненского зонального центра гигиены и эпидемиологии."
    },
    {"id": 5,
    "title": "Оттепель и мокрый снег — погода в Гродно на неделю",
    "linkNews": "#!",
    "countView": 2025,
    "img": "./src/1643012055.jpg",
    "imgAlt": "Оттепель и мокрый снег — погода в Гродно на неделю",
    "text": "На смену морозам придет плюс, выпадет мокрый снег, будет пасмурно — какой прогноз обещают синоптики на последнюю неделю января."
    }
]`;

const jsonNewsRight = `[
    {"id": 6,
    "title": "Каждый получит QR-код: как регистрируют мигрантов в Брузгах",
    "linkNews": "#!",
    "countView": 1712,
    "text": "После регистрации мигрантов каждому присвоят индивидуальный QR-код, по которому можно будет получать адресную гуманитарную помощь."
    },
    {"id": 7,
    "title": "Сегодня Польша начинает возведение забора на границе с Беларусью",
    "linkNews": "#!",
    "countView": 5477,
    "text": "Длина забора составит 186 километров. Строительные работы будут одновременно вестись на четырех участках."
    },
    {"id": 8,
    "title": "Топ книг и товаров: OZ рассказал, что в 2021 году покупали гродненцы",
    "linkNews": "#!",
    "countView": 950,
    "text": "В первую очередь покупали маски, воздушные шары, тетради, газированные напитки, мармелад и другие сладости, а также правила дорожного движения и канцелярию."
    },
    {"id": 9,
    "title": "В Гродно фиксируют новый рост заболеваемости коронавирусом. Очередная волна?",
    "linkNews": "#!",
    "countView": 3200,
    "text": "Рост заболеваемости коронавирусом у детей и взрослых фиксируют гродненские медики. В новую, «омикронную», волну заболеваемости основная нагрузка ляжет на амбулаторно-поликлиническую и педиатрическую"
    },
    {"id": 10,
    "title": "В обменниках Гродно доллар уже по 2,62 рубля, евро приближается к 3 рублям",
    "linkNews": "#!",
    "countView": 2014,
    "text": "Сейчас самый низкий курс, по которому можно купить доллары, установился на отметке в 2,62 рубля."
    }
]`;


let newsListLeft = JSON.parse(jsonNewsLeft);
let newsListRight = JSON.parse(jsonNewsRight);
let containerNewsLeft = document.querySelector('.list-news-left .wrapper-list');
let containerNewsRight = document.querySelector('.list-news-right .wrapper-list');
let contentNews = '';

for (key in newsListLeft){
    contentNews += `
    <div class="news-item">
        <a href="${newsListLeft[key]['linkNews']}">
            <div class="img">
                <span title="Просмотров" class="nstat">${newsListLeft[key]['countView']}</span>   
                <img class="img-wrapper" src="${newsListLeft[key]['img']}" alt="${newsListLeft[key]['imgAlt']}">
            </div>
            <h4 class="title">${newsListLeft[key]['title']}</h4>
        </a>
        <p class="text">${newsListLeft[key]["text"]}</p>
    </div>`;
}

containerNewsLeft.innerHTML = contentNews;

contentNews = '';
for (key in newsListRight){
    contentNews += `
    <div class="news-item">
        <div class="title-block">
            <a class="title" href="${newsListRight[key]['linkNews']}">
                <span title="Просмотров" class="nstat">${newsListRight[key]['countView']}</span>
                ${newsListRight[key]['title']}
            </a>
        </div>  
        <p class="text">${newsListRight[key]['text']}</p>
    </div>`;
}
containerNewsRight.innerHTML = contentNews;


window.onload = function() {

    let buttonLogin = document.querySelector('header .btn-login');
    let buttonSearch = document.querySelector('header .btn-search');
    let buttonTop = document.querySelector('#totop');
    let buttonTypeView = document.querySelector('.s13.view');
    let newsList = document.querySelectorAll('.news-item a');
    let scrollPup = document.querySelector('.scroll-pup');
    let buttonMenu = document.querySelector('.hamburger');
    
    let input = document.querySelectorAll('.megaform .input-default');

    buttonLogin.onclick = function (){
        document.querySelector('.login-sect').classList.toggle('on');
        document.querySelector('.login-sect .tel .input-default').classList.toggle('on');
        document.querySelector("#auth_login").focus();
        this.classList.toggle('on');
    };

    buttonSearch.onclick = function (){
        document.querySelector('.search-sect').classList.toggle('on');
        document.querySelector('.search-sect .input-default').classList.toggle('on');
        document.querySelector("#search_top").focus();
        this.classList.toggle('on');
    };

    buttonTypeView.onclick = function (){
        document.querySelector('.list-news-left').classList.toggle('table');
        this.classList.toggle('list');
    }

    buttonMenu.onclick = function (){
        document.querySelector('.menu').classList.toggle('on');
        this.classList.toggle('on');
    }
   
    input.forEach((item) => {
        
        item.onclick = function (){
            this.classList.toggle('on');
        }
    });

    newsList.forEach((item) => {
        item.onclick = function (){
            this.querySelector('.nstat').innerHTML++;
        }
    })

    window.addEventListener('scroll', (e) => {
        let winScroll = window.pageYOffset || document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = (winScroll / height) * 100;
        
        if (winScroll > 70) {
            buttonTop.classList.add('active');
        }
        else {
            buttonTop.classList.remove('active');
        }
        scrollPup.style.width = scrolled + '%';

    });
        
    buttonTop.onclick = function(e) {
        e.preventdefault();
        document.querySelector('body').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };


    document.addEventListener('mouseup', (e) => {
        let s = document.querySelectorAll(".megaform .input-default");
        s.forEach (function (item) {
            item.classList.remove('on');
        })
        
    });   
    
 };
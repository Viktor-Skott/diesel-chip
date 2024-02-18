ymaps.ready(init);
        function init(){
            let map = new ymaps.Map("map", {
                center: [58.063238, 38.788766],
                zoom: 16
            });

            let placemark = new ymaps.Placemark([58.063238, 38.788766], {}, {
                iconLayout: 'default#image',
                iconImageHref: '../img/icons/map_icon.svg',
                iconImageSize: [30, 30],
                iconImageOffset: [-15, -40]
            });

            map.controls.remove('geolocationControl'); // удаляем геолокацию
            map.controls.remove('searchControl'); // удаляем поиск
            map.controls.remove('trafficControl'); // удаляем контроль трафика
            map.controls.remove('typeSelector'); // удаляем тип
            map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
            map.controls.remove('zoomControl'); // удаляем контрол зуммирования
            map.controls.remove('rulerControl'); // удаляем контрол правил
            map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

            map.geoObjects.add(placemark);
        }


        
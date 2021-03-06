# Задание 1 — найди ошибки

В этом репозитории находятся материалы тестового задания "Найди ошибки" для [14-й Школы разработки интерфейсов](https://academy.yandex.ru/events/frontend/shri_msk-2018-2) (осень 2018, Москва, Санкт-Петербург, Симферополь).

Для работы тестового приложения нужен Node.JS v9. В проекте используются [Yandex Maps API](https://tech.yandex.ru/maps/doc/jsapi/2.1/quick-start/index-docpage/) и [ChartJS](http://www.chartjs.org).

## Задание

Код содержит ошибки разной степени критичности. Некоторые из них — стилистические, а другие — даже не позволят вам запустить приложение. Вам нужно найти все ошибки и исправить их.

Пункты для самопроверки:

1. Приложение должно успешно запускаться.
1. По адресу http://localhost:9000 должна открываться карта с метками.
1. Должна правильно работать вся функциональность, перечисленная в условиях задания.
1. Не должно быть лишнего кода.
1. Все должно быть в едином codestyle.

## Решение и комментарии

Исправления для работающего проекта, не относящиеся к коду:

1. Добавила npm config delete proxy, иначе запрашивался proxy на этапе npm i.
2. Изменила версия JS на ECMAScript 6, чтобы не ругался WebStorm. 

Комментарии по самому проекту:

Долго не могла понять почему не отображаются точки вообще (из-за того что карта была не на весь экран и координаты центра были выставлены по дефолту на Москву, надо было поменять широту и долготу местами — тогда точки видны).

За время дебаггинга правильно работающей программы неплохо разобралась с fetch, array json, .then, function(), Promise.

Из вариантов мэппинга массива json: по циклу проходиться/forEach, но в результате оставила функцию из mappers, которая сама использует map и проходится по каждому json из массива.

Часто использовала консоль в браузере для дебага и выяснения в какой момент все перестает работать.

Для успешщного выполнения этого задания мне очень помогло понимание иерархии файлов, какие функции из каких файлов вызываются, мой опыт программирования на с++ и swift и правильные гугл запросы. 

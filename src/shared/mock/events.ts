import {Events} from "@/shared/api/entities/entities";

export const mockEvents: Events[] = [
    {
        id: '1',
        title: 'Шахматы Городские соревнования «Шахматный марафон»',
        description: '',
        schedule: [['08-14-2023', '09:00', '16:00']],
        location: {place: 'МБОУ ДО СШ «Интеллект», ул. 8 Марта, 22', coords: [60.600125, 56.831805]},
        announced: '',
        updated: '',
        photo: {preview: '/1.webp', album: []},
        interests: ['Шахматы', 'Спорт', 'Для семьи', 'Для детей'],
        countMeIn: 25
    },
    {
        id: '2',
        title: 'Международные соревнования по легкой атлетике «Королева Российского спорта»',
        description: 'Соревнования по прыжкам в высоту',
        schedule: [['08-19-2023', '15:40', '18:00']],
        location: {place: 'Исторический сквер', coords: [60.604109, 56.83672]},
        announced: '',
        updated: '',
        photo: {preview: '/2.webp', album: []},
        interests: ['Легкая атлетика', 'Спорт', 'Для семьи', 'Для детей'],
        countMeIn: 17
    },
    {
        id: '3',
        title: 'Художественная гимнастика. Индивидуальная программа, групповые упражнения. Многоборье',
        description: 'Соревнования по художественной гимнастике',
        schedule: [['08-28-2023', '12:00', '18:00']],
        location: {place: 'Центр художественной гимнастики', coords: [60.556488, 56.740959]},
        announced: '',
        updated: '',
        photo: {preview: '/3.jpg', album: []},
        interests: ['Художественная гимнастика', 'Спорт', 'Для семьи', 'Для детей'],
        countMeIn: 44
    },
    {
        id: '4',
        title: 'Баскетбол. Матчи предварительного этапа',
        description: 'Соревнования по баскетболу',
        schedule: [['08-28-2023', '11:00', '18:00']],
        location: {place: 'МВЦ Екатеринбург-Экспо', coords: [60.57142, 56.774607]},
        announced: '',
        updated: '',
        photo: {preview: '/4.jpg', album: []},
        interests: ['Баскетбол', 'Спорт', 'Для семьи', 'Для детей'],
        countMeIn: 48
    },
    {
        id: '5',
        title: 'Мини-футбол. Матчи предварительного этапа',
        description: 'Соревнования по мини-футболу',
        schedule: [['08-19-2023', '11:00', '18:00']],
        location: {place: 'ДИВС', coords: [60.59791, 56.847157]},
        announced: '',
        updated: '',
        photo: {preview: '/5.jpg', album: []},
        interests: ['Мини-футбол', 'Спорт', 'Для семьи', 'Для детей'],
        countMeIn: 52
    },
    {
        id: '6',
        title: 'Настольный теннис. Командный турнир. 1/8 финала',
        description: 'Соревнования по настольному теннису',
        schedule: [['08-23-2023', '10:00', '16:00']],
        location: {place: 'МВЦ Екатеринбург-Экспо', coords: [60.57142, 56.774607]},
        announced: '',
        updated: '',
        photo: {preview: '/6.jpg', album: []},
        interests: ['Настольный теннис', 'Спорт', 'Для семьи', 'Для детей'],
        countMeIn: 40
    },
    {
        id: '7',
        title: 'Гоголь. Триптих',
        description: 'Театральное представление',
        schedule: [['09-05-2023', '10:00', '16:00']],
        location: {place: 'Екатеринбургский театр кукол - Театр кукол (Малый зал)',
            coords: [60.618837, 56.838269]},
        announced: '',
        updated: '',
        photo: {preview: '/7.webp', album: []},
        interests: ['Театр', 'Искусство', 'Для семьи', 'Для детей'],
        countMeIn: 76
    },
    {
        id: '8',
        title: 'Вертинский',
        description: 'Театральное представление',
        schedule: [['08-23-2023', '19:00', '20:00']],
        location: {place: 'Rudolph’s bar',
            coords: [60.622655, 56.836906]},
        announced: '',
        updated: '',
        photo: {preview: '/8.webp', album: []},
        interests: ['Театр', 'Искусство', 'Для семьи', 'Для детей'],
        countMeIn: 47
    },
    {
        id: '9',
        title: 'Неизличимые. Максим Холл',
        description: 'Театральное представление',
        schedule: [['08-23-2023', '19:00', '20:00']],
        location: {place: 'Уральский государственный театр эстрады - Театр Эстрады Максим-Холл',
            coords: [60.59791, 56.847157]},
        announced: '',
        updated: '',
        photo: {preview: '/9.webp', album: []},
        interests: ['Театр', 'Искусство', 'Для семьи', 'Для детей'],
        countMeIn: 47
    },
    {
        id: '10',
        title: 'Экскурсия Исеть, Заводы, Пароходы на водном трамвайчике по городскому саду',
        description: 'Прогулка на водном трамвайчике',
        schedule: [['08-30-2023', '19:00', '20:00']],
        location: {place: 'Плотинка, спуск к пруду около гимназии №9',
            coords: [60.59791, 56.847157]},
        announced: '',
        updated: '',
        photo: {preview: '/10.webp', album: []},
        interests: ['Водная прогулка', 'Активный отдых', 'Для семьи', 'Для детей'],
        countMeIn: 8
    },
]
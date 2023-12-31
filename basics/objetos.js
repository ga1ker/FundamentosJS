// Los objetos nos permiten almacenar datos
// a partir de una clave
/*
niObjeto= { clave: valor, 'clave': valor}
miObjeto.clave
miObjeto['clave']
*/
const subject = {
    name: 'Programación',
    totalHours: 90,
    weekHours: 7,
    classroom: 'Lab Programación',
    teacher: 'José Manuel',
    'practice hours': 60
}

console.log(subject.name);
console.log(subject.totalHours);
console.log(subject['weekHours']);
console.log(subject['practice hours']);

subject.classroom = 'Lab. programación 1';
console.log(subject.classroom);

console.log(subject)

subject['teorical hours'] = 30;
console.log(subject);

const group = {
    name: '4C',
    career: 'TIADSM',
    subjects: [
        subject
    ],
    students: [
        { name: 'Gadiel', lastname: 'Alcazar'},
        { name: 'Carlos', lastname: 'Conde'},
        { name: 'Ismael', lastname: 'Otamendi'}
    ]
}

console.log(group);
console.log(group.students);
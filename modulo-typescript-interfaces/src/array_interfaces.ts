

// interface TecnologiaProps {
//     id: string;
//     nome: string;
//     slug?: string[];
// }

// let tecnologia1: TecnologiaProps = {
//     id: '1',
//     nome: 'php',
//     slug: ['php', 'php-do-zero', 'php12']
// }

interface TecnologiaProps {
    id: string;
    nome: string;
    descricao?: string;
}

interface NomesProps {
    tecnologia: TecnologiaProps[];
}

let frontend: NomesProps = {

    tecnologia: [
        { id: "1", nome: "ReactJS", descricao: "Biblioteca interfaces" },
        { id: "2", nome: "AngularJS", descricao: "Biblioteca de APIs" },
    ]
}

console.log(frontend.tecnologia);

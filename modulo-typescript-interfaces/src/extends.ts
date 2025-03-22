

interface JogoProps {
    readonly id: string;
    nome: string;
    descricao: string;
    plataforma: string[];
}

const left4dead: JogoProps = {
    id: "1",
    nome: "Left 4 Dead 2",
    descricao: "Jogo de ação e tiro",
    plataforma: ["PC", "PS5"]
}

// console.log(left4dead)

interface DLC extends JogoProps{
    jogoOriginal: JogoProps;
    novoConteudo: string[];
}

const left4deadDLC: DLC = {
    id: "101",
    nome: "Left 4 Dead - Novos Mapas",
    descricao: "Novos mapas de terror",
    plataforma: ["PS5", "PC"],
    novoConteudo: ["Modo Coop", "Mais de 5 horas"],
    jogoOriginal: left4dead,
}

console.log(left4deadDLC)
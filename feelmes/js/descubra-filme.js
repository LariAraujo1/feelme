document.addEventListener('DOMContentLoaded', () => {
   
    const filmesPorHumor = {
        alegria: {
            nome: "Happy Feet",
            capa: "./assets/happyfeet.jpg",
            sinopse: "Happy Feet é uma animação encantadora que acompanha Mano, um jovem pinguim-imperador que não sabe cantar como os outros de sua espécie, mas possui um talento especial para sapatear. Em sua jornada para se encontrar e conquistar seu lugar na colônia, Mano enfrenta desafios, descobre amizades inusitadas e aprende a importância de ser fiel a si mesmo."
        },
        reflexivo: {
            nome: "A Sociedade dos Poetas Mortos",
            capa: "./assets/asociedade.jpg",
            sinopse: "oA Sociedade dos Poetas Mortos é um drama inspirador que acompanha um grupo de alunos de um rígido colégio interno que têm suas vidas transformadas pelo professor de literatura John Keating. Com métodos de ensino pouco convencionais, Keating os incentiva a pensar de forma independente e a aproveitar o dia. A redescoberta de paixões e sonhos, no entanto, os leva a confrontar as expectativas da escola e de suas famílias, resultando em lições profundas sobre liberdade e autoconhecimento."
        },
        melancolico: {
            nome: "As Vantagens de Ser Invisível",
            capa: "./assets/asvantagens.jpg",
            sinopse: "A vida de um adolescente introvertido muda quando ele começa a fazer amigos na escola."
        },
        nostalgico: {
            nome: "De Volta para o Futuro",
            capa: "./assets/devolta.jpg",
            sinopse: "Marty McFly viaja no tempo e encontra sua juventude, causando um grande impacto no futuro."
        },
        inspirador: {
            nome: "À Procura da Felicidade",
            capa: "./assets/aprocura.jpg",
            sinopse: "A inspiradora história de um homem que luta para dar uma vida melhor para seu filho."
        },
        sonolento: {
            nome: "O Irlandês",
            capa: "./assets/oirlandes.jpg",
            sinopse: "Na década de 1950, o caminhoneiro Frank Sheeran se envolve com Russell Bufalino e sua família criminosa. Enquanto Sheeran sobe na hierarquia para se tornar um assassino, ele também trabalha para Jimmy Hoffa, um homem poderoso do submundo."
        },
        sombrio: {
            nome: "Coraline",
            capa: "./assets/coraline.jpg",
            sinopse: "Uma menina encontra uma realidade paralela que parece ser melhor que a sua, mas esconde segredos sombrios."
        },
        aleatorio: {
            nome: "Pulp Fiction",
            capa: "./assets/pulp.jpg",
            sinopse: "Um filme de Quentin Tarantino, cheio de histórias entrelaçadas que misturam violência e humor."
        }
    };

    function sugerirFilme(humor) {
        const filme = filmesPorHumor[humor];

        document.querySelector(".card-below-img img").src = filme.capa;
        document.querySelector(".card-below-img img").alt = filme.nome;
        document.querySelector(".movie h2").textContent = filme.nome;
        document.querySelector(".sinopse p").textContent = filme.sinopse;
    }

    document.getElementById("happy").addEventListener("click", () => sugerirFilme("alegria"));
    document.getElementById("reflexivo").addEventListener("click", () => sugerirFilme("reflexivo"));
    document.getElementById("melancolico").addEventListener("click", () => sugerirFilme("melancolico"));
    document.getElementById("nostalgico").addEventListener("click", () => sugerirFilme("nostalgico"));
    document.getElementById("inspirador").addEventListener("click", () => sugerirFilme("inspirador"));
    document.getElementById("sonolento").addEventListener("click", () => sugerirFilme("sonolento"));
    document.getElementById("sombrio").addEventListener("click", () => sugerirFilme("sombrio"));
    document.getElementById("aleatorio").addEventListener("click", () => sugerirFilme("aleatorio"));
});
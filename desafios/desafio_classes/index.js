class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;
    switch (this.tipo.toLowerCase()) {
      case 'mago':
        ataque = 'magia';
        break;
      case 'guerreiro':
        ataque = 'espada';
        break;
      case 'monge':
        ataque = 'artes marciais';
        break;
      case 'ninja':
        ataque = 'shuriken';
        break;
      default:
        ataque = 'ataque desconhecido';
    }

    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}


const heroi1 = new Heroi('Merlin', 30, 'mago');
heroi1.atacar();

const heroi2 = new Heroi('Arthur', 35, 'guerreiro');
heroi2.atacar();

const heroi3 = new Heroi('Li', 28, 'monge');
heroi3.atacar();

const heroi4 = new Heroi('Ryu', 25, 'ninja');
heroi4.atacar();

class CZooAnimal {
  constructor() {
    this.zooAnimals = [];
  }

  agregarAnimal(n, a, nac, mo, ap, ep) {
    this.zooAnimals.push({ IdAnimal:n, name: a, cageNumber: nac, IdTypeAnimal: mo, weight: ap,  weight2: ep });
  }

  generarTablaAnimales() {
    const tablaBody = document.querySelector('#animalTable tbody');
    tablaBody.innerHTML = '';

    this.zooAnimals.forEach(animal => {
      const fila = document.createElement('tr');
      fila.innerHTML = `
        <td>${animal.IdAnimal}</td>
        <td>${animal.name}</td>
        <td>${animal.cageNumber}</td>
        <td>${animal.IdTypeAnimal}</td>
        <td>${animal.weight}</td>
        <td>${animal.weight2}</td>
      `;
      tablaBody.appendChild(fila);
    });
  }

  contarAnimalesEnJaula5Menor3kg() {
    let i=0,count = [];
    for (const animal of this.zooAnimals) {
      if (animal.weight2 == 'Argentina') {
        count[i]=animal.IdAnimal;
        count[i].toString();
        i=i+1;
      }
    }

    return count;
  }

  contarFelinosEntreJaulas2y5() {
    let count = [],i=0;
    for (const animal of this.zooAnimals) {
      if (animal.weight >= 65 && animal.weight<= 80) {
        count[i]=animal.IdAnimal;
        count[i].toString();
        i=i+1;
      }
    }
    return count;
  }

  listarNombreAnimalJaula4Menor120() {
    let count=0,ass;
    for (const animal of this.zooAnimals) {
      if(count<animal.IdTypeAnimal){
        count=animal.IdTypeAnimal;
        ass=animal.IdAnimal;
      }
    }
    return ass;
  }

}
// Crear una instancia de la clase CZooAnimal
const zoo = new CZooAnimal();

// Agregar algunos animales
zoo.agregarAnimal("Fábio","G", 43, 1.88, 86, "Brasil");
zoo.agregarAnimal("Marlon", "D", 28, 1.83, 78, "Brasil");
zoo.agregarAnimal("Marcelo", "D", 35, 1.73, 72, "Brasil");
zoo.agregarAnimal("Nino", "D", 26, 1.88, 82, "Brasil");
zoo.agregarAnimal("John Kennedy", "A", 21, 1.73, 71, "Brasil");
zoo.agregarAnimal("Keno", "A", 34, 1.78, 72, "Brasil");
zoo.agregarAnimal("Germán Cano", "A", 35, 1.78, 81, "Argentina");

// Generar la tabla de animales
zoo.generarTablaAnimales();

// Mostrar la cantidad de animales en la jaula 5 cuyo peso sea menor a 3 kg
document.getElementById("resultado1").textContent = "Jugadores Argentinos: " + zoo.contarAnimalesEnJaula5Menor3kg();

// Mostrar la cantidad de animales de tipo felinos entre las jaulas 2 y 5
document.getElementById("resultado2").textContent = "Jugadores entre los 75 y 80 kg: " + zoo.contarFelinosEntreJaulas2y5();

// Mostrar el nombre del animal en la jaula 4 con peso menor a 120
document.getElementById("resultado3").textContent = "Jugador mas alto: " + zoo.listarNombreAnimalJaula4Menor120();

;

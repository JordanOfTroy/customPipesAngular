import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'evolve'
})
export class EvolvePipe implements PipeTransform {

  transform(pokemon: string, catalyst?: string): { imgURL: string, evolvedForm: string } {
    let imgURL:string = ''
    let evolvedForm: string = ''
    if (!catalyst) {
      imgURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png'
      evolvedForm = 'Eevee'
    } else {
      switch (catalyst) {
        case 'water stone':
          evolvedForm = 'Vaporeon'
          imgURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/134.png'
          break
        case 'thunder stone':
          evolvedForm = 'Jolteon'
          imgURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/135.png'
          break
        case 'fire stone':
          imgURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/136.png'
          evolvedForm = 'Flareon'
          break
        default:
          break
      }
    }

  
    console.log({imgURL, evolvedForm})
    return {
      imgURL: imgURL,
      evolvedForm: evolvedForm
    }
  }
}



// export class EvolvePipe implements PipeTransform {

//   transform(pokemon: string, catalyst?: string): unknown {
//     let evolvedForm = ''
//     if (!catalyst) {
//       return `${pokemon} did not evolve`
//     } else {
//       switch (catalyst) {
//         case 'water stone':
//           evolvedForm = 'Vaporeon'
//           break
//         case 'fire stone':
//           evolvedForm = 'Flareon'
//           break
//         case 'thunder stone':
//           evolvedForm = 'Jolteon'
//           break
//         default:
//           break
//       }
//     }

//     return `${pokemon} has evolved into ${evolvedForm}`
//   }

// }

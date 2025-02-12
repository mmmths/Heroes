import HeroesRepository from "../repositories/heroesRepository.js";

// Lógica de negócios
class HeroesService {
     constructor(repository) {
         this.repository = repository;
     }
 
     async getAllHeroes() {
         const heroes = await this.repository.getAll();
 
         if (!heroes.length) {
             throw new Error("No heroes found");
         }
 
         return heroes;
     }
 }
 
 export default HeroesService;
 

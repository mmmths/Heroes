import HeroesRepository from "../repositories/heroesRepository.js";
import HeroesService from "../services/heroesService.js";

const heroesService = new HeroesService(HeroesRepository);

export const getHeroes = async (req, res, next) => {
    try {
        const heroes = await heroesService.getAllHeroes();
        res.json({ success: true, data: heroes });
    } catch (error) {
        error.status = 404;
        return next(error);
    }
};

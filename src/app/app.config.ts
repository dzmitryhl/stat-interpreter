import { InjectionToken  } from "@angular/core";

interface AppConfig {
    filterValues: {
        favoriteCoefficientRangeMin: number,
        favoriteCoefficientRangeMax: number,
        favoriteCoefficientMin: number,
        favoriteCoefficientMax: number,
        outsiderCoefficientRangeMin: number,
        outsiderCoefficientRangeMax: number,
        outsiderCoefficientMin: number,
        outsiderCoefficientMax: number,
        favoriteScoreRangeMin: number,
        favoriteScoreRangeMax: number,
        favoriteScoreMin: number,
        favoriteScoreMax: number,
        outsiderScoreRangeMin: number,
        outsiderScoreRangeMax: number,
        outsiderScoreMin: number,
        outsiderScoreMax: number,
        timeRangeMin: number,
        timeRangeMax: number,
        timeMin: number,
        timeMax: number,
        integerStep: number,
        fractionalStep: number
    }
}

export let CONFIG: AppConfig = {
    filterValues: {
        favoriteCoefficientRangeMin: 1,
        favoriteCoefficientRangeMax: 5,
        favoriteCoefficientMin: 2,
        favoriteCoefficientMax: 3.5,
        outsiderCoefficientRangeMin: 1,
        outsiderCoefficientRangeMax: 20,
        outsiderCoefficientMin: 3,
        outsiderCoefficientMax: 6,
        favoriteScoreRangeMin: 0,
        favoriteScoreRangeMax: 5,
        favoriteScoreMin: 0,
        favoriteScoreMax: 2,
        outsiderScoreRangeMin: 0,
        outsiderScoreRangeMax: 5,
        outsiderScoreMin: 0,
        outsiderScoreMax: 2,
        timeRangeMin: 1,
        timeRangeMax: 90,
        timeMin: 41,
        timeMax: 49,
        integerStep: 1,
        fractionalStep: 0.05
    }
};

export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');
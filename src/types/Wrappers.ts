import type { IOffer } from "./offer";
import type {IGames} from "./moduleGames"

export interface IOfferContext {
    offersList: IOffer[];
    setIOfferList: (list: IOffer[]) =>void;
}

export interface IGamesContext {
   gamesList: IGames[];
   setIGamesList: (list: IGames[]) =>void;
}

export interface IProviderProps {
    children: React.ReactNode;
}
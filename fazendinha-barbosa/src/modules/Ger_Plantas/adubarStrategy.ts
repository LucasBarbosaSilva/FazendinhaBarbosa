import { StrategyPlantas } from "./strategyPlantas";

export class AdubarStrategy implements StrategyPlantas{
    public cuidar(): string{
        return "Adubando...";
    }
}
import { StrategyPlantas } from "./strategyPlantas";

export class CombaterPragasStrategy implements StrategyPlantas{
    public cuidar(): string{
        return "Combatendo as pragas...";
    }
}
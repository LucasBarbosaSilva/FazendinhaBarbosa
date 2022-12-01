import { StrategyPlantas } from "./strategyPlantas";

export class IrrigarStrategy implements StrategyPlantas{
    public cuidar(): string{
        return "Irrigando...";
    }
}
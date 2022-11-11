import { ruleMap } from "./rules";

type Problem = any;
type LinterState = {problems: Problem[]};

export default {
    RuleSource: ruleMap,
    StatePlugin: {
        rule_providers: ["linting"],
        computes: [
            "no-missing-linename"
        ],
        reduceValue(states: LinterState[]) {
            return states.reduce((acc, state) => acc.concat(state.problems), [] as Problem[]);
        }
    }
}
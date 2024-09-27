import { createContext, PropsWithChildren, useContext } from "react";
import { useForm, UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export enum InvestmentDuration {
  LESS_THAN_3_YEAR = 1,
  BETWEEN_3_AND_5_YEARS = 2,
  BETWEEN_6_AND_10_YEARS = 3,
  MORE_THAN_11_YEARS = 4,
}

export enum InvestmentOutcome {
  LITTLE = 1,
  MODERATE = 2,
  EXTEREME = 3,
}

const investmentGoalSchema = z.object({
  image: z.string().min(1),
  goal: z.string().min(3),
  investment: z.object({
    initialAmount: z.number().positive(),
    monthlyTopUp: z.number().positive(),
    day: z.number().positive().max(31),
    scheduleMonthlyDeposit: z.boolean(),
    duration: z.nativeEnum(InvestmentDuration),
    outcome: z.nativeEnum(InvestmentOutcome),
  }),
});

export type TInvestmentGoal = z.infer<typeof investmentGoalSchema>;

export type InvestmentGoalContextType = {
  form: UseFormReturn<TInvestmentGoal, any, undefined>;
};

const InvestmentGoalContext = createContext<
  InvestmentGoalContextType | undefined
>(undefined);

export const InvestmentGoalProvider = ({ children }: PropsWithChildren) => {
  const form = useForm<TInvestmentGoal>({
    resolver: zodResolver(investmentGoalSchema),
    defaultValues: {
      image: "https://dummyimage.com/150",
      goal: "",
      investment: {
        initialAmount: 0,
        monthlyTopUp: 0,
        day: 1,
        scheduleMonthlyDeposit: false,
        duration: InvestmentDuration.LESS_THAN_3_YEAR,
        outcome: InvestmentOutcome.LITTLE,
      },
    },
  });

  return (
    <InvestmentGoalContext.Provider value={{ form }}>
      {children}
    </InvestmentGoalContext.Provider>
  );
};

export const useInvestmentGoal = () => {
  const context = useContext(InvestmentGoalContext);

  if (!context) {
    throw new Error(
      "useInvestmentGoal must be used within an InvestmentGoalProvider"
    );
  }

  return context;
};

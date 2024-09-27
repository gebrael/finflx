import { useMutation } from "@tanstack/react-query";

export const useEvaluateRiskProfile = () => {
  return useMutation({
    mutationFn: async (data: any) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return data;
    },
  });
};

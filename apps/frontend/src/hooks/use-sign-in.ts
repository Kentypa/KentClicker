import { useQueryClient, useMutation } from "@tanstack/react-query";
import { Queries } from "../enums/queriesKeys";
import { ServiceNames } from "../enums/serviceNames";
import { authService } from "../services/authService";

export const useSignIn = () => {
  const { signInUser } = authService(ServiceNames.AUTH);

  const queryClient = useQueryClient();

  const { ...options } = useMutation({
    mutationFn: signInUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [Queries.AUTH] });
    },
  });

  return { ...options };
};

export const handleServerError = (
  error: unknown,
  message = "Something went wrong!",
) => {
  return {
    data: null,
    message,
    details: error,
  };
};
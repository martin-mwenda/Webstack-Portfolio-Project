const createSuccessResponse = (message, data = null) => {
    return {
      status: "success",
      message,
      data,
    };
  };
  
  const createErrorResponse = (message, error = null) => {
    return {
      status: "error",
      message,
      error,
    };
  };
  
  module.exports = {
    createSuccessResponse,
    createErrorResponse,
  };
  
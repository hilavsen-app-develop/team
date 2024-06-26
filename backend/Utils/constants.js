module.exports = {
  // 2XX status

  LOGIN_SUCCESS: {
    status: 200,
    message: "Logged in successfully",
  },

  RESPONSE_EDIT_SUCCESS: {
    status: 200,
    message: "Response modified successfully",
  },

  FETCH_SUCCESS: {
    status: 200,
    message: "Fetched successfully",
  },

  SUCCEEDED: {
    status: 200,
  },

  REGISTER_SUCCESS: {
    status: 201,
    message: "Registered successfully",
  },

  NO_CONTENT: {
    status: 204,
    message: "No content available",
  },

  //4XX status

  EMAIL_ALREADY_EXIST: {
    status: 400,
    message: "Email is already taken",
  },

  MOBILE_NUMBER_ALREADY_EXIST: {
    status: 400,
    message: "Mobile number is already taken",
  },

  INVALID_ID_VALUE: {
    status: 400,
    message: "Invalid id",
  },

  UNAUTHORIZED: {
    status: 401,
    message: "Invalid credentials",
  },

  FORBIDDEN: {
    status: 403,
    message: "Unauthorized",
  },

  NOT_FOUND: {
    status: 404,
    message: "Sorry! Page not found",
  },

  //5XX status

  ERROR_UNKNOWN: {
    status: 500,
    message: "Something went wrong!",
  },
};

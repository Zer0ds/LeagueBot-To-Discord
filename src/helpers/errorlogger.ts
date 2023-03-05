const errorLogger = (err: Error | unknown) => {
	if (err instanceof Error) {
		return err.message;
	}

	return "Unknown error";
};

export default errorLogger;

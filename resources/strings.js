module.exports = {
	errors: {
		NO_MESSAGE_PROVIDED: 'No message provided',
		INCORRECT_ARGUMENT: 'Incorrect argument(s) provided',
		INCORRECT_USAGE: 'Incorrect usage of item',
		UNSUPPORTED_OS: 'Unsupported OS',
		NULL_BROWSER: 'The "browser" variable is null, has the browser been launched? (try doing BrowserController.launch())',
		NULL_PAGES: 'The "pages" variable is null, has the browser been launched? (try doing BrowserController.launch())',
		ROTTEN_COOKIES: 'The ".cookies" file is unable to be parsed',
		ASSERT_FAIL: 'The assertion condition wasn\'t met',
		UNKNOWN_WORK_FUNCTION: 'There was a function encountered in the workflow that wasn\'t recognized',
		BROWSER_DISCONNECTED: 'The browser was disconnected from puppeteer',
	},
	general: {
		YES: 'Yes',
		NO: 'No',
		EXIT: 'Exit',
		EATEN_COOKIES: 'burp!',
		NO_CREDENTIALS_PROVIDED: 'No credentials provided, will run on public mode',
		CREDENTIALS_PROVIDED: 'Credentials provided, will run on private mode',
		CHROME_PATH_FOUND: 'Chrome found to be installed on this system, using that instead',
		CHROME_PATH_NOT_FOUND: 'Unable to find chrome installed on this system, using internal browser instead',
		CLOSE_CHROME_AND_USE_USER_BROWSER: 'Close Chrome, proceed to use user\'s browser',
		CONTINUE_AND_USE_INTERNAL_BROWSER: 'Continue, proceed to use internal browser',
		PROMPT_TO_CLOSE_CHROME: 'Chrome is open, puppeteer cannot hook into it. It will need to be closed or the internal browser will have to be used',
		logStates: {
			ERROR: 'Error',
			WARN: 'Warn',
			LOG: 'Log',
		},
		workflow: {
			IF_CHECK_FAILED: 'An "if" check failed for one of the steps during the workflow',
		},
	},
};

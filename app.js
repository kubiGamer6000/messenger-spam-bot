/// IMPORTING FACEBOOK API ///
const login = require('facebook-chat-api');

/// GETTING ARGUMENTS ///
const args = process.argv.slice(2);

/// STORING ACCOUNT IN VARIABLE ///
const account = { email: args[0], password: args[1] };

/// LOGGING IN ///
login(account, (err, api) => {
	/// CHECKING FOR ERRORS ///
	if (err) return console.error(err);

	/// SETTING INTERVAL FOR SPAMBOT ///
	setInterval(() => {
		/// SENDING MESSAGES ///
		api.sendMessage(args[2], args[3], (err, info) => {
			/// CHECKING FOR ERRORS ///
			if (err) return console.error(err);
			/// LOGGING MESSAGE ID ///
			console.log(`Message sent successfully. ID: ${info.messageID}`);
		});
	}, args[4]);
});

///

// SYNTAX: node app.js <facebook_email> <facebook_password> <message content> <recipient user ID> <interval (in ms)>
// EXAMPLE: node app.js johndoe@gmail.com password123 Hi 100000000000001 2000 // Will send 'Hi' every 2 seconds to '100000000000001'

///

// VERSION 0.0.1

// WELL DOCUMENTED (LOL)

// WRITTEN WITH ❤️ BY DOLANBRIGHT IN 5 MINUTES

// I AM NOT RESPONSIBLE FOR ANY LEGAL TROUBLE OR NUCLEAR WAR

// GET SOMEONE'S FACEBOOK ID: https://findmyfbid.in/

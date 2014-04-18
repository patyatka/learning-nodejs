var util = require('util');
var PhraseError = function(message) {
	this.message = message;
	Error.captureStackTrace(this, PhraseError);
}

util.inherits(PhraseError, Error);
PhraseError.prototype.name = 'PhraseError';

module.exports = PhraseError;
var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
	it('should generate correct message object', () => {
		var from = 'Jen';
		var text = 'some message'; 
		var message = generateMessage(from, text);

		expect(message.createdAt).toBeA('number');
		expect(message).toInclude({
			from,
			text,
		});
	});
});

describe('generateLocationMessage', () => {
	it('should generate correct location object', () => {
		var from = "Admin";
		var latitude = '20.31486';
		var longitude = '85.798056'; 
		var url = `https://www.google.com/maps?q=${latitude},${longitude}`
		var message = generateLocationMessage(from, latitude, longitude);

		expect(message.createdAt).toBeA('number');
		expect(message).toInclude({
			url
		});
	});
});
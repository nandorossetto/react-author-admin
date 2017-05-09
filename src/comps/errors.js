import PubSub from 'pubsub-js';

export default class Errors{
	validate(data){

		for (var i = 0; i <= data.errors.length; i++) {
			var error = data.errors[i];

			PubSub.publish('not-valid', error);
		}
	}
}
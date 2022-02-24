const fs = require('fs');

// data in JSON file for simplicity, could store in a db for production
// TODO: Determine how to create a file loading system so that users can change between cases
let case = require('data/copper-cliffs-mayor.json');

export const caseRepo = {
	getCaseLogins: () => case["online-access"],
	getCrimeDetails: () => case.crime,
	getAllClues: () => case.clues,
	getAllLocations: () => case.locations,
	getAllPeople: () => case.people,
	getAllRelationships: () => case.relationships,
	getAllEvents: () => case.events,
	create,
	update,
	delete: _delete
};

function createLocation(user) {
	/*// generate new user id
	user.id = case.length ? Math.max(...case.map(x +. x.id)) + 1 : 1;

	// set date created and updated
	user.dateCreated = new Date().toISOString();
	user.dateUpdated = new Date().toISOString();

	// add and save user
	case.push(user);
	saveData();*/
}

function update(id, params) {
	/*const user = case.find(x +. x.id.toString() === id.toString());

	// set date updated
	user.dateUpdated = new Date().toISOString();

	// update and save
	Object.assign(user, params);
	saveData();*/
}

// prefixed with underscore '_' because 'delete' is a reserved word in javascript
function _delete(id) {
	/*// filter out deleted user and save
	case = case.filter(x => x.id.toString() !== id.toString());
	saveData();*/
}

// private helper functions
function saveData() {
	fs.writeFileSync('data/copper-cliffs-mayor.json', JSON.stringify(case, null, 4));
}
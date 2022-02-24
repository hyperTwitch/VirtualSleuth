import { apiHandler, caseRepo } from 'helpers/api';

export default apiHandler({
    post: register
});

// TODO: update this to actually work for creating locations
function register(req, res) {
    // split out password from user details 
    const { password, ...user } = req.body;

    // validate
    if (usersRepo.find(x => x.username === user.username))
        throw `User with the username "${user.username}" already exists`;

    caseRepo.createLocation(location);
    return res.status(200).json({});
}
import mongoose from 'mongoose';

import userAuthSchema from '../schema/userAuthSchema';

const UserAuth = mongoose.model('auth', userAuthSchema);

export default UserAuth;

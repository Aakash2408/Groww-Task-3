import unsplash from '../../utils/apis/unsplash';
import {
  FetchAction,
  RandomPost,
  Photo,
  Dispatch
} from '../../utils/types/redux';

import {uniqBy} from 'lodash';

export const FETCH_RANDOM_POSTS = 'FETCH_RANDOM_POSTS';
export const FETCH_RANDOM_POSTS_FROM_CACHE = 'FETCH_RANDOM_POSTS_FROM_CACHE';
export const FETCH_USER_PROFILE = 'FETCH_USER_PROFILE';
export const FETCH_USER_PHOTOS = 'FETCH_USER_PHOTOS';
export const CLEAR_RANDOM_PHOTOS = 'CLEAR_RANDOM_PHOTOS';
export const CLEAR_USER_PHOTOS = 'CLEAR_USER_PHOTOS';
export const CLEAR_USER_PROFILE = 'CLEAR_USER_PROFILE';

export const fetchRandomPosts = (): FetchAction | {type: string, payload: RandomPost} => {
    return {
        type: FETCH_RANDOM_POSTS,
        promise: unsplash.get('/photos/random', {
            params: {
                count: 10
            }
        })
    }
}
export const fetchPosts = () =>{
    return async (dispatch: (arg: Dispatch) => void) => {
        const response = await unsplash.get(`photos/random?client_id=cf4CqhocVFJtgibeZ2bAf1tv0Yu9uA5KN16l62DRWyA&count=10`)
        
        // console.log(usernames);
        console.log(response.data);
        
        dispatch({ type: 'FETCH_POSTS', payload: response.data })
    };
}
export const getUniqUsers = (response: Array<Photo>) =>{
    const users = response.map((ele: Photo) =>{
        return ele.user
    })
    const uniqUsers = uniqBy(users, 'username')
    lscache.set('profileSugg', uniqUsers)
    return uniqUsers
}

export const fetchUserProfile = (username: string): FetchAction => ({
    type: FETCH_USER_PROFILE,
    promise: unsplash.get(`/users/${username}`)
})

export const fetchUserPhotos = (username: string, pageNumber: number): FetchAction => ({
    type: FETCH_USER_PHOTOS,
    promise: unsplash.get(`/users/${username}/photos`, {
        params: {
            page: pageNumber,
            per_page: 9
        }
    })
})

export const clearRandomPhotos = () => ({
    type: CLEAR_RANDOM_PHOTOS,
})

export const clearUserPhotos = () => ({
    type: CLEAR_USER_PHOTOS,
})

export const clearUserProfile = () => ({
    type: CLEAR_USER_PROFILE,
})
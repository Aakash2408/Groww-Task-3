import { AxiosResponse } from 'axios';
import { UnsplashError } from './unsplash/unsplashError';
import { UnsplashPhoto } from './unsplash/unsplashPhoto';
import { UnsplashUserProfile } from './unsplash/unsplashUserProfile';

export interface RootState {
    posts: RandomPost,
    userProfile: UserProfile,
    userPhotos: UserPhotos
}
export type Dispatch = {
    type: string,
    payload: Array<Photo | User | undefined>
}

export interface User {
    id: string;
    updated_at: Date;
    username: string;
    name: string;
    portfolio_url: string;
    bio: string;
    location: string;
    total_likes: number;
    total_photos: number;
    total_collections: number;
    instagram_username: string;
    twitter_username: string;
    links: Links;
    profile_image: ProfileImage;
}
export interface ProfileImage {
    large: string;
    medium: string;
    small: string;
}

export interface Links {
    self: string;
    html: string;
    photos: string;
    likes: string;
    portfolio: string;
}
export interface Photo {
    alt_description?: string,
    color?: string,
    description?: string,
    height?: number,
    likes?: number,
    location?: { name: string },
    links?: Links,
    user?: User
}
export interface RandomPost {
    isRandomPostsLoading: boolean,
    randomPostsError: UnsplashError|null,
    randomPosts: UnsplashPhoto[]
}
export interface FetchRandomPostsAction {
    type: string,
    promise: Promise<AxiosResponse<any>>,
    payload: AxiosResponse<UnsplashPhoto[]> | UnsplashError
}
export interface UserProfile {
    isUserProfileLoading: boolean,
    userProfileError: UnsplashError | null,
    userProfile: UnsplashUserProfile | null
}
export interface FetchUserProfileAction {
    type: string,
    promise: Promise<AxiosResponse<any>>,
    payload: AxiosResponse<UnsplashUserProfile> | UnsplashError
}
export interface UserPhotos {
    isUserPhotosLoading: boolean,
    userPhotosError: UnsplashError | null,
    userPhotos: UnsplashPhoto[]
}
export interface FetchUserPhotosAction {
    type: string,
    promise: Promise<AxiosResponse<any>>,
    payload: AxiosResponse<UnsplashPhoto[]> | UnsplashError
}

export type FetchAction = {
    type: string;
    promise: Promise<AxiosResponse<any>>;
}
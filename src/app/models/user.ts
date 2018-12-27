export class User {
  name: string
  username: string
  avatar: string
  biography: string
  location: string
  followers: number
  following: number
  apiPageUrl: string

  constructor(params: any) {
    this.name = params.name
    this.username = params.login
    this.avatar = params.avatar_url
    this.biography = params.bio
    this.followers = params.followers
    this.location = params.location
    this.following = params.following
    this.apiPageUrl = params.apiPageUrl
  }
}

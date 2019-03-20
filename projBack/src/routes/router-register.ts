import { Router } from "express";

import { UsersRouterHandler } from './users-router-handler';
import { PostsRouterHandler } from './posts-router-handler';

export class ROUTES {
  public static readonly users: string = '/users';
  public static readonly usersDetails: string = '/users/:id';
  public static readonly userPosts: string = '/users/:id/posts';
  public static readonly userPostsRemove: string = '/users/:id/posts/:postId';

  public static readonly postsDetails: string = '/posts/:id';
}

export class RouterRegister {
  private static _router: Router = Router();

  public static register(): Router {
    const usersHandler: UsersRouterHandler = new UsersRouterHandler();
    const postsHandler: PostsRouterHandler = new PostsRouterHandler();

    this._router.get(ROUTES.users, usersHandler.getUsers.bind(usersHandler.getUsers));
    this._router.post(ROUTES.users, usersHandler.registerUser.bind(usersHandler.registerUser));

    this._router.get(ROUTES.usersDetails, usersHandler.getUserDetails.bind(usersHandler.getUserDetails));
    this._router.post(ROUTES.usersDetails, usersHandler.updateUserDetails.bind(usersHandler.updateUserDetails));

    this._router.get(ROUTES.userPosts, usersHandler.getUserPosts.bind(usersHandler.getUserPosts));
    this._router.post(ROUTES.userPosts, usersHandler.createUserPost.bind(usersHandler.createUserPost));

    this._router.delete(ROUTES.userPostsRemove, usersHandler.removeUserPost.bind(usersHandler.removeUserPost));

    this._router.get(ROUTES.postsDetails, postsHandler.getPostDetails.bind(postsHandler.getPostDetails));

    return this._router;
  }

}

export default RouterRegister;

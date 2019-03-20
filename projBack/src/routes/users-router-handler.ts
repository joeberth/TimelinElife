import { Request, Response, NextFunction } from "express";

import { CreateUserPostTask } from "../tasks/create-user-post-task";
import { UpdateUserDetailsTask } from "../tasks/update-user-details-task";
import { RegisterUserTask } from "../tasks/register-user-task";
import { GetUsersTask } from "../tasks/get-users-task";
import { GetUserDetailsTask } from "../tasks/get-user-details-task";
import { GetUserPostsTask } from "../tasks/get-user-posts-task";
import { RemoveUserPostTask } from  "../tasks/remove-user-post-task";

export class UsersRouterHandler {
  public async createUserPost(req: Request, res: Response, next: NextFunction): Promise<Response> {
    return CreateUserPostTask.getInstance().execute(req, res);
  };

  public async getUserDetails(req: Request, res: Response, next: NextFunction): Promise<Response> {
    return GetUserDetailsTask.getInstance().execute(req, res);
  };

  public async updateUserDetails(req: Request, res: Response, next: NextFunction): Promise<Response> {
    return UpdateUserDetailsTask.getInstance().execute(req, res);
  };

  public async registerUser(req: Request, res: Response, next: NextFunction): Promise<Response> {
    return RegisterUserTask.getInstance().execute(req, res);
  };

  public async getUsers(req: Request, res: Response, next: NextFunction): Promise<Response> {
    return GetUsersTask.getInstance().execute(req, res);
  };

  public async getUserPosts(req: Request, res: Response, next: NextFunction): Promise<Response> {
    return GetUserPostsTask.getInstance().execute(req, res);
  };

  public async removeUserPost(req: Request, res: Response, next: NextFunction): Promise<Response> {
    return RemoveUserPostTask.getInstance().execute(req, res);
  };
}

export default UsersRouterHandler;

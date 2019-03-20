import { Request, Response, NextFunction } from "express";

import { GetPostDetailsTask } from "../tasks/get-post-details-task";

export class PostsRouterHandler {
  public async getPostDetails(req: Request, res: Response, next: NextFunction): Promise<Response> {
    return GetPostDetailsTask.getInstance().execute(req, res);
  };
}

export default PostsRouterHandler;

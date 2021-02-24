export class UserStore {
  root;
  constructor(root: any) {
    this.root = root;
  }
  user(): string {
    return "user";
  }
}

import { logout } from "../js/api";
import * as storage from "../js/storage/index";

jest.mock("../js/storage/index", () => ({
  remove: jest.fn(),
}));

describe("logout function", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("removes the token and profile from storage", () => {
    logout();

    expect(storage.remove).toHaveBeenCalledWith("token");
    expect(storage.remove).toHaveBeenCalledWith("profile");

    expect(storage.remove).toHaveBeenCalledTimes(2);
  });
});

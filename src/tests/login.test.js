/* eslint-disable no-undef */
import { login } from "../js/api";

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve({ accessToken: "mockAccessToken", user: { id: "123" } }),
    statusText: "OK",
  }),
);

const localStorageMock = (function () {
  let store = {};
  return {
    getItem: jest.fn(function (key) {
      return store[key] || null;
    }),
    setItem: jest.fn(function (key, value) {
      store[key] = value.toString();
    }),
    removeItem: jest.fn(function (key) {
      delete store[key];
    }),
    clear: jest.fn(function () {
      store = {};
    }),
  };
})();

Object.defineProperty(global, "localStorage", {
  value: localStorageMock,
});

Object.defineProperty(global, "localStorage", {
  value: localStorageMock,
});

describe("login function", () => {
  beforeEach(() => {
    localStorageMock.clear();
    jest.clearAllMocks();
  });

  it("stores a token when provided with valid credentials", async () => {
    const email = "test@test.com";
    const password = "test123";

    const profile = await login(email, password);
    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      "token",
      JSON.stringify("mockAccessToken"),
    );
    expect(profile.accessToken).toBeUndefined();
    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      "profile",
      expect.any(String),
    );
  });

  it("throws an error when the response is not ok", async () => {
    global.fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: false,
        statusText: "Unauthorized",
      }),
    );

    const email = "wrong@test.com";
    const password = "wrongpassword";

    await expect(login(email, password)).rejects.toThrow("Unauthorized");
  });
});
